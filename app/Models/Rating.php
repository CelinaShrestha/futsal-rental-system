<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = ['rating', 'review', 'description', 'is_approved','futsal_listings_id', 'user_id'];

    public function futsalListing()
    {
        return $this->belongsTo(FutsalListings::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
