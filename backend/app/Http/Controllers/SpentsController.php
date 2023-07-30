<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SpentsModel;
use App\Models\ProductModel;
use Illuminate\Support\Facades\DB;


class SpentsController extends Controller
{
    public function index()
    {
        try {
            $spentsWithProducts = SpentsModel::join('tb_spent_products', 'tb_spents.id', '=', 'tb_spent_products.spent')
                ->join('tb_products', 'tb_spent_products.product', '=', 'tb_products.id')
                ->select('tb_spents.title', 'tb_spent.reason', 'tb_spents.value', 'tb_products.name as products')
                ->get();

            return response()->json($spentsWithProducts);
        } catch (\Exception $e) {
            // Capturar e registrar qualquer exceção gerada pela consulta
            return response()->json(['error' => $e->getMessage()], 500);
        }
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
        $sucesso = array('message' => 'Gasto inserido com sucesso!', "data" => $spent);
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
