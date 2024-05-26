<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ConfirmBookingMail extends Mailable
{
    use Queueable, SerializesModels;

    public $booking_date;
    public $start_time;
    public $end_time;
    public $total_price;
    public $day;
    public $duration;
    public $futsal_name;
    public $user_name;

    /**
     * Create a new message instance.
     */
    public function __construct($booking_date, $start_time, $end_time, $total_price, $day, $duration, $futsal_name, $user_name)
    {
        $this->booking_date = $booking_date;
        $this->start_time = $start_time;
        $this->end_time = $end_time;
        $this->total_price = $total_price;
        $this->day = $day;
        $this->duration = $duration;
        $this->futsal_name = $futsal_name;
        $this->user_name = $user_name;
    }

    /*Build the message.*
     @return $this*/
    public function build()
    {
        return $this->markdown('bookingConfirmation')
            ->subject('Your booking has been confirmed!')
            ->with(['booking_date' => $this->booking_date, 'start_time' => $this->start_time, 'end_time' => $this->end_time, 'total_price' => $this->total_price, 'day' => $this->day, 'duration' => $this->duration, 'futsal_name' => $this->futsal_name, 'user_name' => $this->user_name]);
    }
}
