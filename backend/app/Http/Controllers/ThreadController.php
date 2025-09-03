<?php
namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class ThreadController extends Controller
{
    public function index()
    {
        $threads = Thread::with('user', 'comments', 'category')
            ->orderBy('created_at', 'desc') // sortiranje po datumu kreacije
            ->get();

        return response()->json($threads);
    }

    public function show($id)
    {
        $thread = Thread::with('user', 'comments', 'category')->findOrFail($id);
        return response()->json($thread);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string|max:200',
            'body' => 'required|string',
            'status' => 'required|string|in:open,closed',
            'category_id' => 'required|exists:categories,id',
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
            'category_id' => 'sometimes|exists:categories,id', // opcionalno za update
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

    public function search(Request $request)
    {
        $query = Thread::with('user', 'comments', 'category');

        // filtriranje po kategoriji
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // filtriranje po statusu
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // tekstualna pretraga u title ili body
        if ($request->has('q')) {
            $search = $request->q;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                ->orWhere('body', 'like', "%{$search}%");
            });
        }

        $threads = $query
        ->orderBy('created_at', 'desc') // sortiranje po datumu kreacije
        ->get();

        return response()->json($threads);
    }

}
