<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Vendor extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $guard = 'vendor';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['firstName', 'middleName', 'lastName', 'contactNumber', 'email', 'address', 'username', 'password'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function futsalListings()
    {
        return $this->hasMany(FutsalListings::class)->where('is_verified', true);
    }

    public function vendorPayments()
    {
        return $this->hasMany(VendorPayment::class);
    }
}
