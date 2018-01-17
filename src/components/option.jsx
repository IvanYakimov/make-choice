import React from 'react';
import ListItem from 'material-ui/List';

const Option = (props) => (
    <div className='option'>
        
        <button
            onClick={() => props.handleDeleteOption(props.optionText)}
        >
        delete
        </button>
    </div>
);

export default Option;
