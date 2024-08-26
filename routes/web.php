<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ShopController;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

Route::resource('shops', ShopController::class);
