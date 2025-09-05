<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    
    public function index()
    {
        $comments = Comment::with('user', 'thread')->get();
        return response()->json($comments);
    }

    
    public function show($id)
    {
        $comment = Comment::with('user', 'thread')->findOrFail($id);
        return response()->json($comment);
    }

    
    public function store(Request $request)
    {
        $fields = $request->validate([
            'body' => 'required|string',
            'thread_id' => 'required|exists:threads,id',
        ]);

        $fields['user_id'] = $request->user()->id;

        $comment = Comment::create($fields);

        return response()->json($comment, 201);
    }

    
    public function update(Request $request, $id)
    {
        $comment = Comment::findOrFail($id);

        
        if ($comment->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $fields = $request->validate([
            'body' => 'sometimes|string',
        ]);

        $comment->update($fields);

        return response()->json($comment);
    }

    
    public function destroy(Request $request, $id)
    {
        $comment = Comment::findOrFail($id);

        
        if ($comment->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $comment->delete();

        return response()->json(['message' => 'Comment deleted successfully']);
    }

    public function getByThread($thread_id)
    {
        $comments = Comment::where('thread_id', $thread_id)
            ->with('user') // opcionalno vraca podatke o autoru
            ->get();

        return response()->json($comments);
    }

}
