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
    id:"question-select",
    name: "canvas",
    defaultValue: "fillRect",
    options: ["fillRect", "triangle", "smile"]
};

class App extends React.Component {
    state = {
        complierActive: 'nav-item active',
        canvasActive: 'nav-item',
        select: ALGORITHM_SELECT_OPTIONS
    }
    sidebarClick = (e) => {
        const name = e.target.closest('.nav-link').getAttribute('name');
        if (name === 'compiler') {
            this.setState({
                complierActive: 'nav-item active',
                canvasActive: 'nav-item',
                select: ALGORITHM_SELECT_OPTIONS
            });
        } else if (name === 'canvas') {
            this.setState({
                complierActive: 'nav-item',
                canvasActive: 'nav-item active',
                select: QUESTION_SELECT_OPTIONS
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
                    select={this.state.select}/>
            </div>
        );
    }
}

export default App;