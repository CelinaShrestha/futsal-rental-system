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
            'timeSlots' => 'required|array',
            'timeSlots.*.day' => 'required|string',
            'timeSlots.*.start_time' => 'required|date_format:H:i',
            'timeSlots.*.end_time' => 'required|date_format:H:i',
            'futsal_listings_id' => 'required|integer|exists:futsal_listings,id', // Moved outside of timeSlots array
        ];
    }

    public function messages()
    {
        return [
            'timeSlots.*.day.required' => 'The day is required.',
            'timeSlots.*.start_time.required' => 'The start time is required.',
            'timeSlots.*.end_time.required' => 'The end time is required.',
            'futsal_listings_id.required' => 'The futsal listing ID is required.',
            'futsal_listings_id.exists' => 'The provided futsal listing ID does not exist.',
        ];
    }
}
