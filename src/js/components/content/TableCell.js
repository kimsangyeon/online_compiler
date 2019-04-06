import React from 'react';

class TableCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, content} = this.props;
        return (
            // table cell
            <td 
                id={id}>
                {
                    content
                }
            </td>
        );
    }
}

export default TableCell;