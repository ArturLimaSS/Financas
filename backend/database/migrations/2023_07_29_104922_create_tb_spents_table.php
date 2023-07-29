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
        Schema::create('tb_spents', function (Blueprint $table) {
            $table->id();
            $table->char('title', 100);
            $table->decimal('value', 10, 2)->nullable();
            $table->jsonb('products');
            $table->string('reason')->nullable();
            $table->integer('user_id');
            $table->timestamps();
            $table->enum('status', ['0','1'])->default('1');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_gastos');
    }
};
