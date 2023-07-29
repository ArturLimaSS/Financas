<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpentsModel extends Model
{
    use HasFactory;
    protected $table = 'tb_spents';
    protected $fillable = [
        'title',
        'value',
        'reason',
        'user_id',
        'status',
    ];

    protected $casts = [
        'value' => 'decimal:2',
    ];
}
