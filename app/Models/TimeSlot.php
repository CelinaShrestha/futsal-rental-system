<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class TimeSlot extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['day', 'start_time', 'end_time', 'is_booked', 'is_available', 'vendor_id', 'futsal_listings_id'];

    // protected $casts = [

    // ];

    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    public function futsalListings()
    {
        return $this->belongsTo(FutsalListings::class);
    }
}
