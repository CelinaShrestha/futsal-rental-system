<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class DisabledDateTime extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['date', 'day', 'start_time', 'end_time', 'reason', 'futsal_listings_id', 'time_slot_id'];

    public function futsalListings()
    {
        return $this->belongsTo(FutsalListings::class);
    }

    public function timeSlot()
    {
        return $this->belongsTo(TimeSlot::class);
    }
}
