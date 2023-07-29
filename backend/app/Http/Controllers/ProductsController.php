<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductModel;

class ProductsController extends Controller
{
    public function index()
    {
        $products = ProductModel::all();
        return response()->json($products);
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

    public function update(Request $request, ProductModel $product)
    {
        $data = $request->validate(([
            "name"=>"string",
            "value"=>"numeric",
            "status"=>"numeric"
        ]));

        $product ->update($data);
        return response()->json($product);

    }
}
