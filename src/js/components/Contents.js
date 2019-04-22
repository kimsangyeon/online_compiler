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
                        <div id="canvas-question">
                        {
                            CANVAS[question] && CANVAS[question].split('<br>').reduce((children, line) => {
                                children.push(<span key={'line-' + children.length}>{line}<br/></span>);
                                return children;
                            }, [])
                        }
                        </div>
                    </div>

                    <div>
                        <Select select={select} onSelectChange={this.props.onSelectChange}/>
                        <Button button={button} onClick={this.props.onClick}/>
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