<?php

namespace App\Http\Requests;

use App\Models\Vendor;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class VendorProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $id = $this->route('id'); // Retrieve the id from the route parameters
        $vendor = Vendor::find($id);
        return [
            'firstName' => ['required', 'string', 'max:255'],
            'middleName' => ['nullable', 'string', 'max:255'], // Make it nullable if it's not required
            'lastName' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(Vendor::class)->ignore($vendor), // Use the retrieved admin ID here
            ],
            'contactNumber' => 'required|string|max:10|min:10',
            'address' => 'required|string|max:255',
        ];
    }
}
