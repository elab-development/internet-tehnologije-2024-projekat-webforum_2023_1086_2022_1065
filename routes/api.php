<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ThreadController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AuthController;

// nekakva GET ruta koju je laravel sam izgenerisao
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::apiResource('users', UserController::class)->only(['index', 'show']);
Route::apiResource('threads', ThreadController::class)->only(['index', 'show']);
Route::apiResource('comments', CommentController::class)->only(['index', 'show']);

Route::post('register', [AuthController::class, 'register']);  // registracija
Route::post('login', [AuthController::class, 'login']);        // login

// Rute koje zahtevaju autentifikaciju
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']); // logout
    Route::get('user', function(Request $request) {
        return $request->user();
    });
});

// ruta za reset lozinke
Route::middleware('auth:sanctum')->post('/reset-password', [AuthController::class, 'resetPassword']);

// delete korisnika – samo admin
Route::delete('/users/{user}', [UserController::class, 'destroy'])
    ->middleware(['auth:sanctum', 'can:manage-users'])
    ->name('users.destroy');

// delete threada – admin i moderator
Route::delete('/threads/{thread}', [ThreadController::class, 'destroy'])
    ->middleware(['auth:sanctum', 'can:manage-threads'])
    ->name('threads.destroy');
