<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\FutsalListings;
use App\Models\TimeSlot;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('disabled_date_times', function (Blueprint $table) {
            $table->id();
            $table
                ->foreignIdFor(FutsalListings::class)
                ->constrained()
                ->onDelete('cascade');
            $table
                ->foreignIdFor(TimeSlot::class)
                ->constrained()
                ->onDelete('cascade');

            $table->date('date');
            $table->string('day');
            $table->time('start_time')->index();
            $table->time('end_time')->index();
            $table->string('reason');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disabled_date_times');
    }
};
