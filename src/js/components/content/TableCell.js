import React from 'react';

class TableCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, content} = this.props;
        let index = 0;
        return (
            // table cell
            <td 
                id={id}>
                {
                    content.map(c => {
                        return <p key={"p" + index++}>{c}</p>
                    })
                }
            </td>
        );
    }
}

export default TableCell;