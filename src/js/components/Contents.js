import React from 'react';
import Select from './content/Select';
import Button from './content/Button';
import Table from './content/Table';
import questions from '../consts/questions';
const {CANVAS} = questions;

class Contents extends React.Component {
    state = {
        active: 'compiler'
    }
    constructor(props) {
        super(props);
        this.onSelectChange = this.props.onSelectChange;
    }
    render() {
        const {select, button, table, question} = this.props;
        return (
            <div id="content-wrapper">
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>
                        Code Compiler
                    </div>
                    <div className="card-body">
                        <textarea id="codesnippet-editable" name="codesnippet_editable" rows="5" cols="100"></textarea>
                        <div id="canvas-question" dangerouslySetInnerHTML={{__html: CANVAS[question]}}></div>
                    </div>

                    <div>
                        <Select select={select} onSelectChange={this.onSelectChange}/>
                        <Button button={button}/>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>
                        Result Table
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <Table table={table}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contents;