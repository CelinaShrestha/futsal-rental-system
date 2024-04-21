<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Booking extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['booking_date', 'start_time', 'end_time', 'duration', 'day', 'total_price', 'is_confirmed', 'is_cancelled', 'is_paid', 'futsal_listings_id', 'user_id', 'time_slot_id'];

    protected $casts = [
        'booking_date' => 'date',
        'is_confirmed' => 'boolean',
        'is_cancelled' => 'boolean',
        'is_paid' => 'boolean',
    ];

    public function futsalListings()
    {
        return $this->belongsTo(FutsalListings::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function timeSlot()
    {
        return $this->belongsTo(TimeSlot::class);
    }
}
