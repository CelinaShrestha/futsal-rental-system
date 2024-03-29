import React, { useState } from "react";
import SelectInput from "@/Components/SelectInput";

function Booking() {
    const options = [
        { value: "9:00AM", label: "9:00AM-10:00AM" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    // State to manage the selected value
    const [selectedValue, setSelectedValue] = useState(null);

    // Handler for when the selected value changes
    const handleSelectChange = (selectedOption) => {
        setSelectedValue(selectedOption);
    };

    return (
        <div>
            {/* Use the SelectInput component */}
            <SelectInput
                label="Your Label"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                isSearchable={false} // Disable typing in the select input
            />

            {/* Other form fields */}
        </div>
    );
}

export default Booking;
