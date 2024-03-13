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
        if (request()->isMethod('post')) {
            return [
                'title' => 'required|string|max:258',
                'image' => 'required|image|mimes:jpg,jpeg,png,jpg,gif,svg|max:2048',
                'description' => 'required|string',
                'location' => 'required|string',
                'price' => 'required|integer',
            ];
        } else {
            return [
                'title' => 'required|string|max:258',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'description' => 'required|string',
                'location' => 'required|string',
                'price' => 'required|integer',
            ];
        }
    }

    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                'title.required' => 'Name is required!',
                'image.required' => 'Image is required!',
                'image.mimes' => 'Image must be of type jpeg, png, jpg, gif, svg!',
                'image.max' => 'Image must be less than 2048kb!',
                'description.required' => 'Descritpion is required!',
                'location.required' => 'Location is required!',
                'price.required' => 'Price is required!',
            ];
        } else {
            return [
                'title.required' => 'Name is required!',
                'description.required' => 'Descritpion is required!',
                'location.required' => 'Location is required!',
                'price.required' => 'Price is required!',
            ];
        }
    }
}
