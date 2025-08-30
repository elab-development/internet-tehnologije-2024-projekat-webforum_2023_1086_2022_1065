<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ThreadController;
use App\Http\Controllers\CommentController;


Route::apiResource('users', UserController::class);
Route::apiResource('threads', ThreadController::class);
Route::apiResource('comments', CommentController::class);

// POST /api/users/
// GET /api/users/{id}