<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpentsController;

//Spents Routes
Route::get('/spents', [SpentsController::class, 'index']);
Route::post('/spents/create', [SpentsController::class, 'store']);
Route::post('/spents/update/{spent}', [SpentsController::class, 'update']);

//Products RoutesQ
Route::get('/products', [ProductsController::class, 'index']);
Route::post('/products/create', [ProductsController::class, 'store']);