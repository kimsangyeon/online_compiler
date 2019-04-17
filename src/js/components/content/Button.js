import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    __onClick__ = (e) => {
        this.props.onClick(e);
    }
    render() {
        const {button} = this.props;
        const {id, text} = button;
        return (
            // Button
            <button className="btn-success" type="button"
                id={id}
                onClick = {this.__onClick__}>{text}</button>
        );
    }
}

export default Button;