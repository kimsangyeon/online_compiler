import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {select} = this.props;
        const {id, name, defaultValue, options} = select;

        return (
            // Select
            <select className="custom-select-sm form-control-sm" 
                id={id}  
                name={name} 
                defaultValue={defaultValue}>
                {
                    options.map(o => {
                        return <option
                                    value={o}
                                    key={o}>{o}</option>;
                    })
                }
            </select>
        );
    }
}

export default Select;