import React, {Component, PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className={"field"}>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {options.map((option, index) =>{
              return <option value={option.value} key={index}>{option.text}</option>
            })}
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    )
}
SelectInput.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options:PropTypes.arrayOf(PropTypes.object)
};
export default SelectInput;
