<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\FutsalListings;
use App\Models\User;


return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table
                ->foreignIdFor(FutsalListings::class)
                ->constrained()
                ->onDelete('cascade');
            $table
                ->foreignIdFor(User::class)
                ->constrained()
                ->onDelete('cascade');
            $table->text('review');
            $table->integer('rating')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_approved')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};
