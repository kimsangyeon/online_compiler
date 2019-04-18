import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }
    __onDraw__ = (e) => {
        this.props.onDraw(e);
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