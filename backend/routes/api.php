<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpentsController;
use App\Http\Controllers\UserController;

//User Routes
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);

//Spents Routes
Route::get('/spents', [SpentsController::class, 'index']);
Route::get('/spents/spent/{id}', [SpentsController::class, 'show']);
Route::post('/spents/create', [SpentsController::class, 'store']);
Route::post('/spents/update/{spent}', [SpentsController::class, 'update']);

//Products RoutesQ
Route::get('/products', [ProductsController::class, 'index']);
Route::post('/products/create', [ProductsController::class, 'store']);
Route::post('/products/update/{product}', [ProductsController::class, 'update']);