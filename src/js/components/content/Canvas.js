import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id} = this.props;
        return (
            // canvas
            <canvas id={id}></canvas>
        );
    }
}

export default Canvas;