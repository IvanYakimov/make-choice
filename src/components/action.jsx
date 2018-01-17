import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const Action = (props) => (
    <div className='action-btn'>
        <RaisedButton 
            label="Что мне делать?"
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}
        />
        {/* <button
            className='pure-button'
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}>
            Что мне делать?
            </button> */}
    </div>
);

export default Action;
