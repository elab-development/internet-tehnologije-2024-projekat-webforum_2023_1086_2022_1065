<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// tip: dodavanje ogranicenja (izmedju ostalog)

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // rename kolone
            $table->renameColumn('name', 'username');
        });

        Schema::table('users', function (Blueprint $table) {
            // dodaj unique constraint
            $table->unique('username');
        });
    }

    // redosled u rollback je znacajan!!

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['username']);
        });

        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('username', 'name');
        });
    }
};
