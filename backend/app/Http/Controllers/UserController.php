<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // read all operacija
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    // read one operacija
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    // create operacija
    public function store(Request $request)
    {
        $fields = $request->validate([
            'username' => 'required|string|unique:users,username',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);

        return response()->json($user, 201);
    }

    // update operacija
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $fields = $request->validate([
            'username' => 'sometimes|string|unique:users,username,' . $id,
            'email' => 'sometimes|string|email|unique:users,email,' . $id,
            'password' => 'sometimes|string|confirmed'
        ]);

        if (isset($fields['password'])) {
            $fields['password'] = Hash::make($fields['password']);
        }

        $user->update($fields);

        return response()->json($user);
    }

    // delete operacija
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
