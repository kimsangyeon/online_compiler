import React from 'react';
import Select from './content/Select';
import Button from './content/Button';

class Contents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {select, button} = this.props;
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
                        <table id="compile-table" className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>output</td>
                                    <td>message</td>
                                    <td>millisecond</td>
                                </tr>
                                <tr>
                                    <td id="compile-output"></td>
                                    <td id="compile-message"></td>
                                    <td id="compile-time"></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contents;