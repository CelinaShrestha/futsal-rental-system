<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VendorRegisteredMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $password;

    /*

    Create a new message instance.*
        @param string $name
    @param string $email
    @param string $password
*/
    public function __construct($name, $email, $password)
    {
        $this->name = $name;

        $this->email = $email;
        $this->password = $password;
    }

    /*

Build the message.*
@return $this*/
    public function build()
    {
        return $this->markdown('vendorRegister')
            ->subject('Welcome to KickIt Futsal Rental System')
            ->with(['name' => $this->name, 'email' => $this->email, 'password' => $this->password]);
    }
}
