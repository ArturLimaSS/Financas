<?php

namespace App\Http\Controllers;

use App\Models\SelicModel;
use Illuminate\Http\Request;

class SelicController extends Controller
{
    public function index()
    {
        $selicIndex - SelicModel::all();
        return response()->json($selicIndex);

    }
}