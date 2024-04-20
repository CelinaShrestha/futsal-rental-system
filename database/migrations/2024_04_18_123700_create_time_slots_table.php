<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Vendor;
use App\Models\FutsalListings;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('time_slots', function (Blueprint $table) {
            $table->id();
            $table
                ->foreignIdFor(Vendor::class)
                ->constrained()
                ->onDelete('cascade');
            $table
                ->foreignIdFor(FutsalListings::class)
                ->constrained()
                ->onDelete('cascade');
            $table->string('day');
            $table->time('start_time')->index();
            $table->time('end_time')->index();
            $table->boolean('is_booked')->default(false);
            $table->boolean('is_available')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('time_slots');
    }
};
