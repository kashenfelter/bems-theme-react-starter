import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FontIcon from './FontIcon';

const defaultProps = {
    id: `ACI-${new Date().getTime()}`
};

class AutoCompleteInput extends Component {
    input = null;
    isFocused = false;

    focus = () => {
        this.input.focus();
        this.isFocused = true;
    };

    blur = () => {
        this.input.blur();
        this.isFocused = false;
    };

    //   handleBlur = () => {
    //     this.isFocused = false;
    //   };

    //   handleFocus = () => {
    //     this.isFocused = true;
    //   };

    handleClickArrowDropDown = evt => {
        const { inputProps: { lov, lov: { state: lovState, input } } } = this.props;
        // console.log('handleClickArrowDropDown, lov.input, lov.state=', lov.input, lov.state);
        console.log('handleClickArrowDropDown, lov.state=', lov.state);
        const { isFocused } = lovState;
        if (isFocused) {
            input.blur();
        } else {
            input.focus();
        }
    };

    // handleClickArrowDropDown = evt => {
    //     const { input, isFocused } = this;
    //     if (isFocused) {
    //         input.blur();
    //     } else {
    //         input.focus();
    //     }
    // };

    render() {
        //this.props originate from MUI <Input /> Component
        //inputProps originate from AutoSuggest Component
        const { handleClickArrowDropDown, handleFocus, handleBlur } = this;
        const { id, inputProps, rowsMax, ...otherProps } = this.props;
        // const { classes, home, inputRef, lov, ...otherInputProps } = inputProps;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>S</div>
                <input ref={ref => (this.input = ref)} id={id} {...otherProps} />
                <div onClick={handleClickArrowDropDown}>
                    <FontIcon name="arrow_drop_down" />
                </div>
            </div>
        );
    }
}

AutoCompleteInput.defaultProps = defaultProps;
export default AutoCompleteInput;
