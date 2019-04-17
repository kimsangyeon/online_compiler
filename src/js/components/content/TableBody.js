import React from 'react';
import TableRow from './TableRow';
import Div from './Div';
import Canvas from './Canvas';

class Tbody extends React.Component {
    static defaultProps = {
        compiler: [{
            name: "row-title",
            children: [   // td
                {content: ["output"]},
                {content: ["message"]},
                {content: ["millisecond"]}
            ]
        }, {
            name: "row-output",
            children: [
                {id: "compile-output"},
                {id: "compile-message"},
                {id: "compile-time"}
            ]
        }],
        canvas: [{
            name: "row-result",
            children: [
                {content: [<Div id={"draw-result"} className={"card text-white bg-primary o-hidden"}></Div>]}
            ]
        }, {
            name: "row-canvas",
            children: [
                {content: [<Canvas id={"canavs"}></Canvas>]},
                {content: [<Canvas id={"canvas-ex"}></Canvas>]}
            ]
        }]
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {active, data} = this.props;
        const tableRows = active === "compiler" ? this.props.compiler : this.props.canvas;
        if (active === "compiler") {
            tableRows[1].children.forEach(child => child.content = data.map(c => c[child.id]));
        }
        let index = 0;
        return (
            // tbody
            <tbody 
                key="tbody">
                {
                    tableRows.map(tableRow => {
                        return <TableRow 
                                        key={"tr" + index++}
                                        children={tableRow.children}/>;
                    })
                }
            </tbody>
        );
    }
}

export default Tbody;