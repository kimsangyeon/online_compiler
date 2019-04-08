import React from 'react';
import Sidebar from './Sidebar';
import Contents from './Contents';
import Compiler from '../Compiler';
import Canvas from '../Canvas';
import consts from '../consts/consts';

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

const {LANGUAGE, MODE, CODE, ALGORITHM} = consts;

class App extends React.Component {
    state = {
        complierActive: 'nav-item active',
        canvasActive: 'nav-item',
        active: 'compiler',
        select: ALGORITHM_SELECT_OPTIONS,
        button: COMPILE_BUTTON,
        table: COMPILE_TABLE
    }
    __initCompiler__() {
        new Compiler('codesnippet-editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[LANGUAGE.JAVASCRIPT][ALGORITHM.NONE]);
    }
    __initCanvas__() {
        new Canvas('codesnippet-editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[LANGUAGE.JAVASCRIPT][ALGORITHM.CANVAS]);
    }
    sidebarClick = (e) => {
        const name = e.target.closest('.nav-link').getAttribute('name');
        if (name === 'compiler') {
            this.setState({
                complierActive: 'nav-item active',
                canvasActive: 'nav-item',
                active: 'compiler',
                select: ALGORITHM_SELECT_OPTIONS,
                button: COMPILE_BUTTON,
                table: COMPILE_TABLE
            });

            this.__initCompiler__();
        } else if (name === 'canvas') {
            this.setState({
                complierActive: 'nav-item',
                canvasActive: 'nav-item active',
                active: 'canvas',
                select: QUESTION_SELECT_OPTIONS,
                button: DRAW_BUTTON,
                table: CANVAS_TABLE
            });

            this.__initCanvas__();
        }
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.__initCompiler__();
    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar
                    sidebarClick={this.sidebarClick}
                    complierActive={this.state.complierActive}
                    canvasActive={this.state.canvasActive}/>
                <Contents
                    active={this.state.active}
                    select={this.state.select}
                    button={this.state.button}
                    table={this.state.table}/>
            </div>
        );
    }
}

export default App;