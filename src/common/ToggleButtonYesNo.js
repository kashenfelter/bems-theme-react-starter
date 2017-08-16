import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonYesNoRender from 'common/ToggleButtonYesNoRender';

const defaultProps = {
    label: 'Yes/No'
};

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    property: PropTypes.string.isRequired
};

class ToggleButtonYesNo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('ToggleButtonYesNo this.props=', this.props);
        return <ToggleButtonYesNoRender {...this.props} />;
    }
}

ToggleButtonYesNo.defaultProps = defaultProps;
ToggleButtonYesNo.propTypes = propTypes;
export default ToggleButtonYesNo;
