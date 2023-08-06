<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductModel;

class SpentsModel extends Model
{
    use HasFactory;
    protected $table = 'tb_spents';
    protected $fillable = [
        'title',
        'value',
        'reason',
        'products',
        'created_at',
        'user_id',
        'status',
    ];

    protected $casts = [
        'value' => 'decimal:2',
    ];

    public function relationatedProducts()
    {
        return ProductModel::whereIn('id', json_decode($this->products))->get();
    }

    public function getSumTotalSpents()
    {
        return $this->sum('value');
    }

}