import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, textFieldSimpleStyleSheet, cloneableStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';
import TextField from 'material-ui/TextField';

const defaultProps = {
    id: `tfs-${new Date().getTime()}`,
    label: 'TFS Field',
    placeholder: 'TFS Placeholder',
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false,
    multiline: false
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TomisTextFieldSingleLine extends Component {
    state = {
        payload: {
            val: '',
            isCloneChecked: true
        },
        currentCharCount: 0,
        isFocused: false
    };

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        const { payload: { val } } = this.state;
        this.setState({ payload: { isCloneChecked, val } });
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.setState({ payload: { val }, currentCharCount: val.length });
    };

    handleInputFocus = evt => {
        evt.stopPropagation();
        this.setState({ isFocused: true });
    };

    handleInputBlur = evt => {
        evt.stopPropagation();
        this.setState({ isFocused: false });
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleInputBlur, handleInputFocus } = this;
        const { payload: { val, isCloneChecked }, currentCharCount, isFocused } = this.state;
        const {
            id,
            label,
            placeholder,
            disabled,
            helperText,
            classes: {
                formControl: clsFormControl,
                inputLabel: clsInputLabel,
                inputLabelCloneable: clsInputLabelCloneable,
                formHelperText: clsFormHelperText,
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                inputBase: clsInputBase,
                inputMultilineBase: clsInputMultilineBase,
                inputCloneable: clsInputCloneable,
                inputDisabled: clsInputDisabled
            },
            isCloneable,
            disabledClone,
            required,
            maxLength,
            multiline = false,
            rows,
            rowsMax,
            readOnly = false
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly, placeholder, multiline });
        return (
            <FormControl className={clsFormControl} margin="dense">
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxChange}
                        disabled={isDisabled || disabledClone}
                        tabIndex="-1"
                        checked={isCloneChecked || disabledClone}
                    />}
                <TextField
                    id={id}
                    label={label}
                    labelClassName={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })}
                    placeholder={displayPlaceholder}
                    value={val}
                    disabled={disabled}
                    margin="dense"
                    fullWidth={true}
                    required={required}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    multiline={multiline}
                    rows={rows}
                    rowsMax={rowsMax}
                    inputClassName={cx({
                        [clsInputBase]: !multiline,
                        [clsInputMultilineBase]: multiline,
                        [clsInputCloneable]: isDisplayCloneable,
                        [clsInputDisabled]: isDisabled
                    })}
                    inputProps={{
                        maxLength
                    }}
                />
                <FormHelperText className={clsFormHelperText}>
                    <span>
                        {helperText}
                    </span>
                    {isFocused &&
                        !!maxLength &&
                        <span>
                            {`${currentCharCount}/${maxLength}`}
                        </span>}
                </FormHelperText>
            </FormControl>
        );
    }
}
TomisTextFieldSingleLine.defaultProps = defaultProps;
TomisTextFieldSingleLine.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(TomisTextFieldSingleLine);
