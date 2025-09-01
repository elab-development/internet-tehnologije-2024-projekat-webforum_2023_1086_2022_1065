<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->dropForeign(['category_id']); // prvo drop foreign key
            $table->dropColumn('category_id');    // pa kolonu
        });
    }

    public function down(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
        });
    }
};
