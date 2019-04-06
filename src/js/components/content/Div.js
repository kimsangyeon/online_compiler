import React from 'react';

class Div extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, className} = this.props;
        return (
            // div
            <div id={id} className={className}></div>
        );
    }
}

export default Div;