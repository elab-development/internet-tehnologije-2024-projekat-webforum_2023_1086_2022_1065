<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class ThreadController extends Controller
{
    public function index()
    {
        $threads = Thread::with('user', 'comments')->get();
        return response()->json($threads);
    }

    public function show($id)
    {
        $thread = Thread::with('user', 'comments')->findOrFail($id);
        return response()->json($thread);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string|max:200',
            'body' => 'required|string',
            'status' => 'required|string|in:open,closed',
        ]);

        $fields['user_id'] = $request->user()->id;

        $thread = Thread::create($fields);

        return response()->json($thread, 201);
    }

    public function update(Request $request, $id)
    {
        $thread = Thread::findOrFail($id);

        
        if ($thread->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $fields = $request->validate([
            'title' => 'sometimes|string|max:255',
            'body' => 'sometimes|string',
            'status' => 'sometimes|string|in:open,closed',
        ]);

        $thread->update($fields);

        return response()->json($thread);
    }

    
    public function destroy(Request $request, $id)
    {
        $thread = Thread::findOrFail($id);

        
        if ($thread->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $thread->delete();

        return response()->json(['message' => 'Thread deleted successfully']);
    }
}
