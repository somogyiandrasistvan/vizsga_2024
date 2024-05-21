<?php

use App\Models\Tema;
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
        Schema::create('temas', function (Blueprint $table) {
            $table->id('id');
            $table->String('temanev');
            $table->timestamps();
        });

        Tema::create(['temanev' => "termeszet"]);
        Tema::create(['temanev' => "informatika"]);
        Tema::create(['temanev' => "sport"]);
        Tema::create(['temanev' => "egyeb"]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temas');
    }
};
