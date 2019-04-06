import React from 'react';
import Tbody from './Tbody';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {table} = this.props;
        return (
            // table
            <table className="table table-bordered"
                id ={table.id}>
                <Tbody 
                    tbody={table.tbody}/>
            </table>
        );
    }
}

export default Table;