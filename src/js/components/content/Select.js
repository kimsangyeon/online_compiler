import React from 'react';

class Select extends React.Component {
    render() {
        return (
            // Select
            <select id="algorithm-select" className="custom-select-sm form-control-sm" name="algorithm" defaultValue="none">
                <option value="none">none</option>
                <option value="factorial">factorial</option>
                <option value="gcd">gcd</option>
                <option value="fibonacci">fibonacci</option>
            </select>
        );
    }
}

export default Select;