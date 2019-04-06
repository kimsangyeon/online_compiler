import React from 'react';
import TableCell from './TableCell';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, children} = this.props;
        let index = 0;
        return (
            // table row
            <tr>
                {
                    children.map(td => {
                        return <TableCell
                                        key={"td" + index++}
                                        id={td.id}
                                        content={td.content}/>
                    })
                }
            </tr>
        );
    }
}

export default TableRow;