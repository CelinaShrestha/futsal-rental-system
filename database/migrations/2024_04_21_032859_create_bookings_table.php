<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\FutsalListings;
use App\Models\User;
use App\Models\TimeSlot;


return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table
                ->foreignIdFor(FutsalListings::class)
                ->constrained()
                ->onDelete('cascade');
            $table
                ->foreignIdFor(User::class)
                ->constrained()
                ->onDelete('cascade');
            $table
                ->foreignIdFor(TimeSlot::class)
                ->constrained()
                ->onDelete('cascade');
            $table->date('booking_date')->index();
            $table->time('start_time')->index();
            $table->time('end_time')->index();
            $table->integer('duration');
            $table->string('day');
            $table->integer('total_price');
            $table->boolean('is_confirmed')->default(false);
            $table->boolean('is_cancelled')->default(false);
            $table->boolean('is_paid')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
