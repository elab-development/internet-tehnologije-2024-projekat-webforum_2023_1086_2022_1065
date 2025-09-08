<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ThreadController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;

// nekakva GET ruta koju je laravel sam izgenerisao
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// thread search TESTIRANO (NOTE: mora da bude u ovom php fajlu ispred resursne rute!!!)  
Route::get('/threads/search', [ThreadController::class, 'search']);

// resursne rute za citanje TESTIRANO
Route::apiResource('users', UserController::class)->only(['index', 'show']);
Route::apiResource('threads', ThreadController::class)->only(['index', 'show']);
Route::apiResource('comments', CommentController::class)->only(['index', 'show']);

// resursne rute za upis i update TESTIRANO
Route::middleware('auth:sanctum')->group(function () {
    //Route::apiResource('users', UserController::class)->only(['store', 'update']); // nije nuzno za sad
    Route::apiResource('threads', ThreadController::class)->only(['store', 'update']);
    Route::apiResource('comments', CommentController::class)->only(['store', 'update']);
});

// TESTIRANO
Route::post('register', [AuthController::class, 'register']);  // registracija
Route::post('login', [AuthController::class, 'login']);        // login

// logout ruta TESTIRANO
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']); // logout
    Route::get('user', function(Request $request) {
        return $request->user();
    });
});

// ruta za reset lozinke TESTIRANO
Route::middleware('auth:sanctum')->post('/reset-password', [AuthController::class, 'resetPassword']);

// delete korisnika – samo admin
Route::delete('/users/{user}', [UserController::class, 'destroy'])
    ->middleware(['auth:sanctum', 'can:manage-users'])
    ->name('users.destroy');

// delete threada – admin i moderator
Route::delete('/threads/{thread}', [ThreadController::class, 'destroy'])
    ->middleware(['auth:sanctum', 'can:manage-threads'])
    ->name('threads.destroy');

Route::patch('/threads/{thread}/close', [ThreadController::class, 'close'])
    ->middleware(['auth:sanctum', 'can:manage-threads'])
    ->name('threads.close');
    
// kategorije TESTIRANO
Route::apiResource('categories', CategoryController::class)
    ->only(['index', 'show']);

// vraca sve komentare na thread-u NETESTIRANO
Route::get('/threads/{thread_id}/comments', [CommentController::class, 'getByThread']);