<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_spent_products', function (Blueprint $table) {
            $table->id();
            $table->integer('spent');
            $table->integer('product')->nullable();
            $table->timestamps();
            $table->enum('status', ['0','1'])->default('1');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_spent_products');
    }
};
