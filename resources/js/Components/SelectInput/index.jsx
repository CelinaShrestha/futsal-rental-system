import Select from "react-select";

const SelectInput = ({
    label,
    options,
    value,
    onChange,
    isSearchable,
    required,
    isDisabled,
}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div className="form-control">
                <Select
                    options={options}
                    value={value}
                    onChange={onChange}
                    placeholder={`Select ${label}`}
                    isSearchable={isSearchable}
                    required={required}
                    isDisabled={isDisabled}
                />
            </div>
        </div>
    );
};

export default SelectInput;
