import React from 'react';
import TableBody from './TableBody';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.onDraw = this.props.onDraw;
    }
    render() {
        const {table} = this.props;
        return (
            // table
            <table
                id ={table.id}
                className="table table-bordered">
                <TableBody 
                    active={table.active}
                    onDraw={this.onDraw}/>
            </table>
        );
    }
}

export default Table;