import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CowAndActionableIntelligenceSectionRender from 'common/CowAndActionableIntelligenceSectionRender';

class CowAndActionableIntelligenceSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <CowAndActionableIntelligenceSectionRender {...this.props} />;
    }
}
export default CowAndActionableIntelligenceSection;
