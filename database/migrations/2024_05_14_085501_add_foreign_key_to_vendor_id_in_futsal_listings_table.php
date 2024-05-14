<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Vendor;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('futsal_listings', function (Blueprint $table) {
            $table
                ->foreignIdFor(Vendor::class)
                ->nullable()
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('futsal_listings', function (Blueprint $table) {
            $table->dropForeign(['vendor_id']);
        });
    }
};
