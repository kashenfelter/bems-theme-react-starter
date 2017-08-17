import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisHeading from 'TomisApp/TomisHeading';
import Duration from 'common/TomisDurationReadOnly';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';

const propTypes = {
    isCloneable: PropTypes.bool
};

class UasMceSectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
        return (
            <div>
                <TomisPanel label="MCE (RDR-RDRGCS2)">
                    <TomisPanelBody>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="MCE Site Name" value="RDR" />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="GCS Code" hintText="Type GCS Code" isCloneable={isCloneable} />
                            </div>
                            <div className="flex-1">
                                <TomisTimeSpinner
                                    floatingLabelText="Brief Start Time (Zulu)"
                                    isDisplayArrowIcons={true}
                                    hintText="Type Brief Start time"
                                    isCloneable={isCloneable}
                                    isDisplayArrowIcons={true}
                                />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Brief End Time (Zulu)" value="0000" />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Handover Date (Zulu)" value="mm/dd/yyyy" />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Handover Time (Zulu)" value="0000" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <Duration />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="Number of Missions*" hintText="Type Number of Missions" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1" />
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
            </div>
        );
    }
}

export default UasMceSectionRender;
