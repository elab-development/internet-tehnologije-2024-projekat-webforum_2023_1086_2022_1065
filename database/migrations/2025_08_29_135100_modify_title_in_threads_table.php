<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// TIP MIGRACIJE: MODIFIKACIJA KOLONE

return new class extends Migration
{
    // run migration
    public function up(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->string('title', 200)->change(); // kolonu title (zahteva dependency dbal)
        });
    }

    // migration rollback
    public function down(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->string('title', 255)->change(); // trebalo bi da je 255 defaultna duzina
        });
    }
};
