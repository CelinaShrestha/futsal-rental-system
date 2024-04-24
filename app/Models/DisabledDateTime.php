<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class DisabledDateTime extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'date',
        'day',
        'start_time',
        'end_time',
        'reason',
    ];

    

    public function futsalListings()
    {
        return $this->belongsTo(FutsalListings::class);
    }

    public function timeSlot()
    {
        return $this->belongsTo(TimeSlot::class);
    }


}
