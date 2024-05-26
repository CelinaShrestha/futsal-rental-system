<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
</head>

<body>
    <p>Dear {{ $user_name }},</p>
    <p>Thank you for booking with us. Here are your booking details:</p>
    <ul>
        <li style="font-size: 16px;"><strong>Futsal Name:</strong> {{ $futsal_name }}</li>
        <li style="font-size: 16px;"><strong>Booking Date:</strong> {{ date('d-m-Y', strtotime($booking_date)) }}</li>
        <li style="font-size: 16px;"><strong>Booking Day:</strong> {{ $day }}</li>
        <li style="font-size: 16px;"><strong>Booking Time:</strong> {{ date('h:i A', strtotime($start_time)) }} -
            {{ date('h:i A', strtotime($end_time)) }}</li>
        <li style="font-size: 16px;"><strong>Duration:</strong> {{ $duration }}</li>
        <li style="font-size: 16px;"><strong>Price:</strong> Rs. {{ $total_price }}</li>
    </ul>
    <p>Thanks,<br>KickIt</p>
</body>

</html>
