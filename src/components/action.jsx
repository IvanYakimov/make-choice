import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const Action = (props) => (
    <div className='action-btn'>
        <RaisedButton 
            label="Что мне делать?"
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}
        />
    </div>
);

export default Action;
