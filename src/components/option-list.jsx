import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
// import LabelOutline from 'material-ui/svg-icons/label/outline';
import Icon from 'material-ui/svg-icons/action/label-outline';

import Option from './option'

const OptionList = (props) => {
    let uniq_key_counter = 0;
    const getUniqKeyCounter = () => uniq_key_counter++;
    return (
        <div className='option-list'>
            <List>
                {props.optionList.map((option, idx) =>
                    <ListItem 
                        key={getUniqKeyCounter()} 
                        primaryText={option}
                        leftIcon={<Icon />}
                        onClick={(event) => {
                            console.log(event.target);
                            props.handleDeleteOption();
                        }}
                        />
                    // <Option key={uniq_key_counter++} optionText={option}
                    //     handleDeleteOption={props.handleDeleteOption}
                    // />
                )}
            </List>
            <RaisedButton
                label="Удалить все"
                onClick={props.handleDeleteAllOptions}
                secondary={true}
            />
        </div>
    );
}

export default OptionList;
