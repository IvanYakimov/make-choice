import React from 'react';

const Action = (props) => (
    <div className='action-btn'>
        <button
            className='pure-button'
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}>
            Что мне делать?
            </button>
    </div>
);

export default Action;
