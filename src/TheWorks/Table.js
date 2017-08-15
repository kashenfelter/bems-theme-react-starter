import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableExample from 'TheWorks/TableExample';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Table</h2>
                <div style={{ backgroundColor: '#dcdcdc', padding: '5px 20px 5px 20px' }}>
                    <h4>Description</h4>
                    An attachment can be a picture, a Word document, an Excel document, or any other file that requires another program to open it.
                    <br />
                    <br />
                    <h4>Common Framework Status</h4>
                    Approved
                    <br />
                    <br />
                    <h4>Rules</h4>
                    <ul>
                        <li>None</li>
                    </ul>
                </div>
                <br />
                <h4>Examples</h4>
                <TableExample />
            </div>
        );
    }
}

export default Table;
