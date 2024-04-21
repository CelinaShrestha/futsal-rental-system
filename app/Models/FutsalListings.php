<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class FutsalListings extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['title', 'short_description', 'long_description', 'images', 'location', 'price', 'capacity', 'facilities', 'contactNumber', 'altContactNumber', 'is_verified', 'is_available', 'vendor_id'];

    protected $casts = [
        'images' => 'array',
        'facilities' => 'array',
    ];

    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }


}
