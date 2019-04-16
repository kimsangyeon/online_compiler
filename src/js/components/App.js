import React from 'react';
import Sidebar from './Sidebar';
import Contents from './Contents';
import Compiler from '../Compiler';
import Canvas from '../Canvas';
import consts from '../consts/consts';
import utilDraw from '../util/utilDraw';

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
    active: "compiler",
    data: {
        "compile-output": '',
        "compile-message": '',
        "compile-time":  ''
    }
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
        code: '',
        question: '',
        select: ALGORITHM_SELECT_OPTIONS,
        button: COMPILE_BUTTON,
        table: COMPILE_TABLE,
        codemirror: null
    }
    constructor(props) {
        super(props);
    }
    __initCompiler__() {
        this.codemirror = new Compiler('codesnippet-editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[LANGUAGE.JAVASCRIPT][ALGORITHM.NONE]);
    }
    __initCanvas__() {
        this.codemirror = new Canvas('codesnippet-editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[LANGUAGE.JAVASCRIPT][ALGORITHM.CANVAS]);
    }
    sidebarClick = (e) => {
        const name = e.target.closest('.nav-link').getAttribute('name');
        if (name === 'compiler') {
            this.setState({
                complierActive: 'nav-item active',
                canvasActive: 'nav-item',
                active: 'compiler',
                code: CODE.none,
                question: '',
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
                code: CODE.canvas,
                question: 'fillRect',
                select: QUESTION_SELECT_OPTIONS,
                button: DRAW_BUTTON,
                table: CANVAS_TABLE
            });

            this.__initCanvas__();
        }
    }
    onSelectChange = (e) => {
        const language = this.codemirror.getLanguage();
        const mode = this.codemirror.getMode();
        const algorithm = e.target.name === 'algorithm' ? e.target.value : 'canvas';
        const code = CODE[language][algorithm];

        this.codemirror.init('codesnippet-editable', language, mode, code);
        this.setState({
            question: e.target.value
        }); 
    }
    onCompile = (e) => {
        const language = this.codemirror.getLanguage();
        const code = this.codemirror.getEditor().getForm().getValue();
        const algorithm = this.state.question;

        if (algorithm === ALGORITHM.NONE) {
            this.setState({
                table: COMPILE_TABLE
            });
            return;
        }

        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {
                'language': language,
                'algorithm': algorithm,
                'code': code
            },
            success: (data) => {
                const result = JSON.parse(data);
                const table = {
                    id: "compile-table",
                    active: "compiler",
                    data: {
                        "compile-output": '',
                        "compile-message": '',
                        "compile-time":  ''
                    }
                };
                result.forEach(({stdout, stderr, time, result}) => {
                    table.data["compile-output"] = stdout;
                    table.data["compile-message"] = !!result ? "answer" : "wrong";
                    table.data["compile-time"] = time + ' ms';

                    this.setState({table});
                });
            }
        });
    };
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
                    table={this.state.table}
                    code={this.code}
                    question={this.state.question}
                    onSelectChange={this.onSelectChange}
                    onClick={this.onCompile}/>
            </div>
        );
    }
}

export default App;