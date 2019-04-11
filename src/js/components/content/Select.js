import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    __onChange__ = (event) => {
        this.props.onSelectChange(event);
    }
    render() {
        const {select} = this.props;
        const {id, name, defaultValue, options} = select;

        return (
            // Select
            <select className="custom-select-sm form-control-sm" 
                id={id}  
                name={name} 
                defaultValue={defaultValue}
                onChange={this.__onChange__}>
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