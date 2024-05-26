<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Booking;
use App\Models\User;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table
                ->foreignIdFor(Booking::class)
                ->constrained()
                ->onDelete('cascade');
            $table
                ->foreignIdFor(User::class)
                ->constrained()
                ->onDelete('cascade');
            $table->string('transaction_id')->unique();
            $table->decimal('amount', 10, 2);
            $table->boolean('is_cancelled')->default(false);
            $table->boolean('is_refunded')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
