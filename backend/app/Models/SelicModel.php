<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelicModel extends Model
{
    protected $table = 'tb_selic';
    protected $fillable = [
        'id',
        'data',
        'valor',
        'status'
    ];

    protected $casts = [
        'valor' => 'decimal:2',
    ];
    use HasFactory;
}
