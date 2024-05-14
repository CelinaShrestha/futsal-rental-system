<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('futsal_listings', function (Blueprint $table) {
            // Drop the 'capacity' column
            $table->dropColumn('capacity');

            // Add 'longitude' and 'latitude' columns
            $table->decimal('longitude', 10, 7)->after('images'); // Adjust precision if needed
            $table->decimal('latitude', 10, 7)->after('longitude'); // Adjust precision if needed
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('futsal_listings', function (Blueprint $table) {
            // Add back the 'capacity' column
            $table->integer('capacity')->after('price');

            // Remove 'longitude' and 'latitude' columns if they exist
            if (Schema::hasColumn('futsal_listings', 'longitude') && Schema::hasColumn('futsal_listings', 'latitude')) {
                $table->dropColumn(['longitude', 'latitude']);
            }
        });
    }
};
