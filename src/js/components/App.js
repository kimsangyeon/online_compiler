import React from 'react';
import Sidebar from './Sidebar';
import Contents from './Contents';

class App extends React.Component {
    state = {
        complierActive: 'nav-item active',
        canvasActive: 'nav-item'
    }
    sidebarClick = (e) => {
        const name = e.target.closest('.nav-link').getAttribute('name');
        if (name === 'compiler') {
            this.setState({
                complierActive: 'nav-item active',
                canvasActive: 'nav-item'
            });
        } else if (name === 'canvas') {
            this.setState({
                complierActive: 'nav-item',
                canvasActive: 'nav-item active'
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
                <Contents/>
            </div>
        );
    }
}

export default App;