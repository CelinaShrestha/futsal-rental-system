<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TimeSlotRequest extends FormRequest
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
            'day' => 'required|string',
            'start_time' => 'required|time_format:H:i',
            'end_time' => 'required|time_format:H:i',
            'is_booked' => 'boolean',
            'is_available' => 'boolean',
            'vendor_id' => 'required|integer|exists:vendors,id',
            'futsal_listings_id' => 'required|integer|exists:futsal_listings,id',
        ];
    }

    public function messages()
    {
        return [
            'day.required' => 'The day is required.',
            'start_time.required' => 'The start time is required.',
            'end_time.required' => 'The end time is required.',
        ];
    }
}
