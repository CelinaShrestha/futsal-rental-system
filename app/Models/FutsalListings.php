<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FutsalListings extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'short_description', 'long_description', 'images', 'location', 'price', 'capacity', 'facilities', 'contactNumber', 'altContactNumber', 'is_verified', 'is_available'];

    protected $casts = [
        'images' => 'array',
        'facilities' => 'array',
    ];

    // Define relationship with Vendor model
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }
}
