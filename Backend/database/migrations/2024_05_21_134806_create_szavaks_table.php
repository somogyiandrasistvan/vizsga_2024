<?php

use App\Models\Szavak;
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
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id('id');
            $table->String('angol');
            $table->String('magyar');
            $table->foreignId('temaId')->references('id')->on('temas');
            $table->timestamps();
        });

        Szavak::create(['angol' => "beautiful", 'magyar' => "gyönyörű", "temaId" => 1]);
        Szavak::create(['angol' => "diligent", 'magyar' => "okos", "temaId" => 2]);
        Szavak::create(['angol' => "curious", 'magyar' => "irigy", "temaId" => 3]);
        Szavak::create(['angol' => "english", 'magyar' => "angol", "temaId" => 4]);
        Szavak::create(['angol' => "hungary", 'magyar' => "magyar", "temaId" => 4]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
