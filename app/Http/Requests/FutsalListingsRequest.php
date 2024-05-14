<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FutsalListingsRequest extends FormRequest
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
        $commonRules = [
            'title' => 'required|string|max:255',
            'short_description' => 'required|string',
            'long_description' => 'required|string',
            'location' => 'required|string',
            'price' => 'required|integer',
            'contactNumber' => 'required|string',
            'altContactNumber' => 'nullable|string',
            'facilities' => 'nullable|array',
            'is_verified' => 'boolean',
            'is_available' => 'boolean',
            'longitude' => 'nullable|numeric',
            'latitude' => 'nullable|numeric',
        ];

        $imageRules = [
            'images' => 'nullable|array|max:5',
            'images.*' => 'image|mimes:jpg,jpeg,png,gif,svg|max:2048',
        ];

        return $this->isMethod('post') ? array_merge($commonRules, $imageRules) : $commonRules;
    }

    public function messages()
    {
        return [
            'title.required' => 'The title is required.',
            'title.max' => 'The title must not exceed 255 characters.',
            'short_description.required' => 'The short description is required.',
            'long_description.required' => 'The long description is required.',
            'location.required' => 'The location is required.',
            'price.required' => 'The price is required.',
            'price.integer' => 'The price must be an integer.',
            'contactNumber.required' => 'The contact number is required.',
            'images.required' => 'At least one image is required.',
            'images.array' => 'The images field must be an array.',
            'images.max' => 'Max 5 images allowed.',
            'images.*.image' => 'Each image must be a valid image file.',
            'images.*.mimes' => 'Each image must be of type jpeg, png, jpg, gif.',
            'images.*.max' => 'Each image must not exceed 2048kb.',
        ];
    }
}
