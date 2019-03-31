import React from 'react';
import Sidebar from './Sidebar';
import Contents from './Contents';

class App extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar></Sidebar>
                <Contents></Contents>
            </div>
        );
    }
}

export default App;