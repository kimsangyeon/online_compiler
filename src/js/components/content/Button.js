import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {button} = this.props;
        const {id, text} = button;
        return (
            // Button
            <button className="btn-success" type="button"
                id={id} >{text}</button>
        );
    }
}

export default Button;