import React from 'react';
import Sidebar from './Sidebar';
import Contents from './Contents';

const ALGORITHM_SELECT_OPTIONS = {
    id: "algorithm-select",
    name: "algorithm",
    defaultValue: "none",
    options: ["none", "factorial", "gcd", "fibonacci"]
};
const QUESTION_SELECT_OPTIONS = {
    id: "question-select",
    name: "canvas",
    defaultValue: "fillRect",
    options: ["fillRect", "triangle", "smile"]
};

const COMPILE_BUTTON = {
    id: "compile-btn",
    text: "compile!"
};

const DRAW_BUTTON = {
    id: "draw-btn",
    text: "draw!"
};

const COMPILE_TABLE = {
    id: "compile-table",
    active: "compiler"
};

const CANVAS_TABLE = {
    id: "canvas-table",
    active: "canvas"
};

class App extends React.Component {
    state = {
        complierActive: 'nav-item active',
        canvasActive: 'nav-item',
        select: ALGORITHM_SELECT_OPTIONS,
        button: COMPILE_BUTTON,
        table: COMPILE_TABLE
    }
    sidebarClick = (e) => {
        const name = e.target.closest('.nav-link').getAttribute('name');
        if (name === 'compiler') {
            this.setState({
                complierActive: 'nav-item active',
                canvasActive: 'nav-item',
                select: ALGORITHM_SELECT_OPTIONS,
                button: COMPILE_BUTTON,
                table: COMPILE_TABLE
            });
        } else if (name === 'canvas') {
            this.setState({
                complierActive: 'nav-item',
                canvasActive: 'nav-item active',
                select: QUESTION_SELECT_OPTIONS,
                button: DRAW_BUTTON,
                table: CANVAS_TABLE
            });
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar
                    sidebarClick={this.sidebarClick}
                    complierActive={this.state.complierActive}
                    canvasActive={this.state.canvasActive}/>
                <Contents 
                    select={this.state.select}
                    button={this.state.button}
                    table={this.state.table}/>
            </div>
        );
    }
}

export default App;