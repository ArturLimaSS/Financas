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
        $spentsmodel = new SpentsModel();
        try {
            // A consulta abaixo está usando Eloquent para realizar a junção (join) entre as tabelas.
            $spentsWithProducts = SpentsModel::leftJoin('tb_spent_products', 'tb_spents.id', '=', 'tb_spent_products.spent')
                ->leftJoin('tb_products', 'tb_spent_products.product', '=', 'tb_products.id')
                ->select('tb_spents.title', 'tb_spents.reason', 'tb_spents.value', 'tb_products.name as products')
                ->get();

            return response()->json($spentsWithProducts);

        } catch (\Exception $e) {
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

    public function getDataToChart()
    {
        $results = SpentsModel::selectRaw('DATE(created_at) AS date_only, SUM(VALUE) AS total_spents')
                ->groupBy('date_only')
                ->orderBy('date_only', 'DESC')
                ->limit('5')
                ->get();
        return response()->json($results);
    }
}