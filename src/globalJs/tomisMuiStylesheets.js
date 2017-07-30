import { createStyleSheet } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import tomisTheme from 'app/themes/tomisLightTheme.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import _get from 'lodash/get';
import { RIPPLE_TIME_MS } from 'globalJs/constants';

const theme = createMuiTheme(createPalette(tomisTheme));

const checkboxSize = 24;
const checkboxW = 36;
const checkboxMRFactor = 1.15;
const twoIconMRFactor = 1.75;
// Give ripple time to finish before updating HOC
const cloneCheckboxChange$ = Observable.timer(RIPPLE_TIME_MS).take(1).share();

export const getDisplayVals = ({ disabled, isCloneable, disabledClone, readOnly, placeholder }) => {
  const isDisabled = readOnly ? true : disabled ? true : false;
  const displayPlaceholder = readOnly ? '' : placeholder;
  const isDisplayCloneable = isCloneable && !readOnly;
  return { isDisabled, displayPlaceholder, isDisplayCloneable };
};

export const handleCloneCheckboxChange = (onCloneCheckboxChange, evt) => {
  evt.stopPropagation();
  cloneCheckboxChange$.subscribe({
    next: () => {
      onCloneCheckboxChange();
    },
    err: () => {},
    complete: () => {}
  });
};

export const cloneableStyleSheet = createStyleSheet('CloneableRender', theme => ({
  formControl: {
    width: '100%',
    flex: 1
  },
  lov: {
    marginLeft: '4px',
    width: '100%'
  },
  lovCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  inputLabel2Cloneable: {
    marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
    top: '0px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectArrow: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${0}px`,
    width: '36px',
    height: '36px'
  }
}));

export const autoCompleteStyleSheet = createStyleSheet('AutoCompleteRender', theme => ({
  formControl: {
    width: '100%',
    flex: 1
  },
  lov: {
    marginLeft: '4px',
    width: '100%'
  },
  lovCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectArrow: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${0}px`,
    width: '36px',
    height: '36px'
  }
}));

export const datePickerStyles = {
  formControl: {
    width: '100%',
    flex: 1
  },
  dp: {
    marginLeft: '4px',
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  },
  dpCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectCalendar: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${-2}px`,
    width: '36px',
    height: '36px'
  },
  selectCalendarDisabled: {
    color: theme.text.disabled
  }
};

export const datePickerStyleSheet = createStyleSheet('DatePickerRender', theme => datePickerStyles);

export const timeSpinnerStyles = {
  formControl: {
    width: '100%',
    flex: 1
  },
  inpBase: {
    marginLeft: '4px',
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px'
  },
  inpSpinner: {
    marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inpCloneable: {
    marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  arrowsCloneableTrue: {
    left: `24px`
  },
  arrowsCloneableFalse: {
    left: 0
  },
  arrowsBase: {
    color: theme.text.primary,
    position: 'absolute',
    width: '24px',
    height: '24px'
  },
  arrowUp: {
    top: `${-4}px`
  },
  arrowDown: {
    top: `${10}px`
  },
  arrowsDisabled: {
    color: theme.text.disabled
  }
};

export const timeSpinnerStyleSheet = createStyleSheet('TimeSpinnerRender', theme => timeSpinnerStyles);
