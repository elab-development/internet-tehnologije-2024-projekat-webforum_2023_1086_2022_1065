<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->foreignId('category_id')
                  ->constrained()      // reference na categories.id
                  ->cascadeOnDelete()  // ako se obriše kategorija, obriši i thread
                  ->after('user_id');  // opcionalno, mesto kolone
        });
    }

    public function down(): void
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropColumn('category_id');
        });
    }
};
