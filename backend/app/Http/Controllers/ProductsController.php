<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductModel;

class ProductsController extends Controller
{
    public function index()
    {
        $producs = ProductModel::all();
        return response()->json($producs);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "name"=>"required|string",
            "value" => "required|numeric",
            "status" => "numeric"
        ]);

        $product = ProductModel::create($data);
        $success = array('message' => 'Produto Inserido com Sucesso!', "data" => $product);
        return response()->json($success, 201);
    }
}
