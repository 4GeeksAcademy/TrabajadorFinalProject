import React from 'react';

const Filter = ({ label, options, onChange }) => {
    return (
        <div className="filter">
            <label>{label}</label>
            <select onChange={e => onChange(e.target.value)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;