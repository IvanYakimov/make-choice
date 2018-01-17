import React from 'react';

const Option = (props) => (
    <div className='option'>
        {props.optionText}
        <i
            className='ion-ios-close-empty'
            onClick={() => props.handleDeleteOption(props.optionText)}
        />
    </div>
);

export default Option;
