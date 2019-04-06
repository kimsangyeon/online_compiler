import React from 'react';
import Select from './content/Select';
import Button from './content/Button';
import Table from './content/Table';

class Contents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {select, button, table} = this.props;
        return (
            <div id="content-wrapper">
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>
                        Code Compiler
                    </div>
                    <div className="card-body">
                        <textarea id="codesnippet-editable" name="codesnippet_editable" rows="5" cols="100"></textarea>
                    </div>
                    <div>
                        <Select select={select}/>
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