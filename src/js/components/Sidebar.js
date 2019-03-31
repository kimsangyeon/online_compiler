import React from 'react';

class Sidebar extends React.Component {
    __onClick__(e) {
        const $elTargetItem = $(e.target).closest('.nav-item');
        const $elSidebarItem = $('.sidebar .nav-item');
        Array.from($elSidebarItem).forEach(el => {
            const $el = $(el);
            if ($el.hasClass('active')) {
               $el.removeClass('active');
            }
        });

        $elTargetItem.addClass('active');
    }
    constructor(props) {
        super(props);
        this.onClick = this.__onClick__.bind(this);
    }    
    render() {
        return (
            // Sidebar
            <ul className = "sidebar navbar-nav">
                <li className = "nav-item active">
                    <div className = "nav-link" onClick = {this.onClick}>
                        <i className = "fas fa-fw fa-tachometer-alt" > </i>
                        <span > Compiler </span> 
                    </div>
                </li>
                <li className = "nav-item" >
                    <div className = "nav-link" onClick = {this.onClick}>
                        <i className = "fas fa-fw fa-chart-area" > </i>
                        <span > Canvas </span>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Sidebar;