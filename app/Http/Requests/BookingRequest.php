<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'booking_date' => 'required|date',
            'time_slot' => 'required',
            'interval' => 'required|integer',
            'total_price' => 'required',
            'day' => 'required|string',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'booking_date.required' => 'Booking date is required',
            'booking_date.date' => 'Booking date must be a valid date',
            'time_slot.required' => 'Time slot is required',

            'interval.required' => 'Interval is required',
            'total_price.required' => 'Total price is required',
            'day.required' => 'Day is required',
        ];
    }
}
