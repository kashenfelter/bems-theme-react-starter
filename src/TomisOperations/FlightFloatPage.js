import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightFloatPageRender from './FlightFloatPageRender';

const setStateLocalZuluValue = (localZuluValue, state, props) => {
    return { localZuluValue };
};

const setStateYesNo = (property, yesNoValue, state, props) => {
    return { [property]: yesNoValue };
};

const initState = {
    localZuluValue: 'LOCAL',
    yesNoValue: '',
    isInitAmo: ''
};

class FlightFloatPage extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    handleChangeLocalZulu = value => {
        console.log('changed local/zulu, value=', value);
        this.setState(setStateLocalZuluValue.bind(this, value));
    };
    handleChangeYesNo = (property, evt, value) => {
        console.log('changed yes/no evt, property, value=', evt, property, value);
        this.setState(setStateYesNo.bind(this, property, value));
    };
    render() {
        const { handleChangeLocalZulu, handleChangeYesNo } = this;
        const { localZuluValue, yesNoValue } = this.state;
        //Note, dimensions are passed as prop from Container Pane Component.
        return (
            <FlightFloatPageRender
                isCloneable={true}
                handleChangeLocalZulu={handleChangeLocalZulu}
                localZuluValue={localZuluValue}
                handleChangeYesNo={handleChangeYesNo}
                {...this.state}
                {...this.props}
            />
        );
    }
}

export default FlightFloatPage;
