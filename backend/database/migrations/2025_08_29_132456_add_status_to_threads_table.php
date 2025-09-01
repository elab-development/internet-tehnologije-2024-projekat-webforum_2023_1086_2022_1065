<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// TIP MIGRACIJE: dodavanje kolone

return new class extends Migration
{
    // pokreni migraciju
    public function up(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->string('status')->default('open'); // nova kolona i defaultni status 'open'
        });
    }

    // rollbackuj transakciju
    public function down(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
