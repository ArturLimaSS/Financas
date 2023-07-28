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
        $data = $request->validade([
            'title' => 'required|string|max:100',
            'value' => 'required|numeric',
            'reason' => 'nullable|string|max:255'
        ]);

        $spent = SpentsModel::create($data);
        return response()->json($spent, 201);

    }

    public function show(SpentsModel $spent)
    {
        return response()->json($spent);
    }

    public function update(Request $request, SpentsModel $spent)
    {

        $data = $request->validate([
            'title' => 'required|string|max:100',
            'value' => 'required|numeric',
            'reason' => 'nullable|string|max:255',
            'status' => 'required|in:0,1',
        ]);

        $spent->update($data);
        return response()->json($spent);
    }
}
