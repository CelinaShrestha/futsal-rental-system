import Select from "react-select";

const SelectInput = ({ label, options, value, onChange, isSearchable,required }) => {
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
                />
            </div>
        </div>
    );
};

export default SelectInput;
