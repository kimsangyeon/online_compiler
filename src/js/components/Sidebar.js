import React from 'react';

class Sidebar extends React.Component {
    static defaultProps = {
        complierActive: 'nav-item active',
        canvasActive: 'nav-item'
    }
    constructor(props) {
        super(props);
    }
    __sidebarClick__ = (e) => {
        this.props.sidebarClick(e);
    }
    render() {
        let {complierActive, canvasActive} = this.props;
        return (
            // Sidebar
            <ul className = "sidebar navbar-nav">
                <li className = {complierActive}>
                    <div className = "nav-link" onClick = {this.__sidebarClick__} name = "compiler">
                        <i className = "fas fa-fw fa-tachometer-alt" > </i>
                        <span > Compiler </span> 
                    </div>
                </li>
                <li className = {canvasActive} >
                    <div className = "nav-link" onClick = {this.__sidebarClick__} name = "canvas">
                        <i className = "fas fa-fw fa-chart-area" > </i>
                        <span > Canvas </span>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Sidebar;