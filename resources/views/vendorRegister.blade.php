<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
</head>

<body>
    <h1>Welcome to KickIt Futsal Rental System</h1>
    <p>Dear {{ $name }},</p>
    <p>Thank you for registering with us. Here are your account details:</p>
    <ul>
        <li style="font-size: 16px;"><strong>Email:</strong> {{ $email }}</li>
        <li style="font-size: 16px;"><strong>Password:</strong> {{ $password }}</li>
    </ul>
    <p>
        <a href="{{ url('/vendor/login') }}">Login</a>
    </p>
    <p>Thanks,<br>KickIt</p>
</body>

</html>
