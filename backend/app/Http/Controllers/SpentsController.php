<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SpentsModel;

class SpentsController extends Controller
{
    public function index()
    {
        $spents = SpentsModel::all();
        return response()->json($spents);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:100',
            'value' => 'required|numeric',
            'reason' => 'nullable|string|max:255',
            'products' => 'nullable|json',
            'user_id' => 'numeric'
        ]);

        $spent = SpentsModel::create($data);
        $sucesso = array('message'=> 'Gasto inserido com sucesso!', "data" => $spent);
        return response()->json($sucesso, 201);

    }

    public function show($id)
    {   
        $spent = SpentsModel::findOrFail($id);
        return response()->json($spent);
    }

    public function update(Request $request, SpentsModel $spent)
    {

        $data = $request->validate([
            'title' => 'string|max:100',
            'value' => 'numeric',
            'products' => 'nullable|json',
            'reason' => 'nullable|string|max:255',
            'status' => 'in:0,1',
        ]);

        $spent->update($data);
        return response()->json($spent);
    }
}
