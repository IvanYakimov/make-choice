import React from 'react';

import Option from './option'

const OptionList = (props) => {
    let uniq_key_counter = 0;
    return (
        <div className='option-list'>
            <h3> Варианты </h3>
            <button onClick={props.handleDeleteAllOptions} className='button-remove pure-button'>
                Удалить все
            </button>
            {props.optionList.length === 0 && <p> Пожалуйста, дабавьте вариант</p>}
            {
                props.optionList.map((option, idx) =>
                    <Option key={uniq_key_counter++} optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
        </div>
    );
}

export default OptionList;
