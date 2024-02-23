<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('firstName')->after('id');
            $table->string('middleName')->nullable();
            $table->string('lastName');
            $table->string('username')->unique();
            $table->string('address');
            $table->string('contactNumber');
            $table->dropColumn('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('firstName');
            $table->dropColumn('middleName');
            $table->dropColumn('lastName');
            $table->dropColumn('username');
            $table->dropColumn('address');
            $table->dropColumn('contactNumber');
        });
    }
};
