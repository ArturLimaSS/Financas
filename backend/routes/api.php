<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpentsController;
use App\Http\Controllers\UserController;
// query builder -- pesquisar

//Auth Routes
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->group(function(){
    route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function(Request $request){
        return $request->user();
    });
});

//User Routes
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::post('/users/bulk', [UserController::class, 'storeBulk']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);

//Spents Routes
Route::get('/spents/{user_id}', [SpentsController::class, 'index']);
Route::get('/spents/spent/{id}', [SpentsController::class, 'show']);
Route::post('/spents/create', [SpentsController::class, 'store']);
Route::post('/spents/update/{spent}', [SpentsController::class, 'update']);
Route::get('/spents/date/{user_id}', [SpentsController::class, 'getDataToChart']);

//Products RoutesQ
Route::get('/products', [ProductsController::class, 'index']);
Route::post('/products/create', [ProductsController::class, 'store']);
Route::post('/products/update/{product}', [ProductsController::class, 'update']);