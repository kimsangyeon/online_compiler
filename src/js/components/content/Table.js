import React from 'react';
import TableBody from './TableBody';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {table} = this.props;
        return (
            // table
            <table
                id ={table.id}
                className="table table-bordered">
                <TableBody 
                    active={table.active}/>
            </table>
        );
    }
}

export default Table;