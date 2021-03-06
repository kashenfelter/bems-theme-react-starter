//@flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableBody } from 'material-ui/Table';
import TomisTableHeaderColumn from './TomisTableHeaderColumn';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
};

const editColumn = { id: 'edit', numeric: false, disablePadding: false, label: '&nbsp;', cell: null };

const defaultProps = {};
const propTypes = {};

class TomisTableHeader extends Component {
    state = {
        order: 'asc',
        orderBy: ''
    };

    handleSortTableHeader = property => {
        const { onRequestSort } = this.props;
        if (onRequestSort) {
            const orderBy = property;
            let order = 'desc';

            if (this.state.orderBy === property && this.state.order === 'desc') {
                order = 'asc';
            }

            this.setState({ order, orderBy }, () => {
                onRequestSort(property, order);
            });
        }
    };

    render() {
        const { handleSortTableHeader } = this;
        const { order, orderBy } = this.state;
        const { columnData, onRequestSort = false } = this.props;
        const cursor = onRequestSort ? 'pointer' : 'default';
        return (
            <TableBody>
                <TableRow>
                    {columnData.map(column => {
                        return <TomisTableHeaderColumn key={column.id} column={column} handleRequestSort={handleSortTableHeader} orderBy={orderBy} order={order} cursor={cursor} />;
                    })}
                    <TomisTableHeaderColumn key={editColumn.id} column={editColumn} />
                </TableRow>
            </TableBody>
        );
    }
}

TomisTableHeader.defaultProps = defaultProps;
TomisTableHeader.propTypes = propTypes;
export default TomisTableHeader;
