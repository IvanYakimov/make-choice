import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    };

    addOption = (event) => {
        // event.preventDefault();
        const input = document.querySelector('#input');
        const option = input.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if (! error)
            input.value = '';
    }

    render() {
        return (
            <div className='add-option-btn'>
                <TextField
                    id='input'
                    errorText={this.state.error}
                    onKeyPress={(event) => {
                        if (event.key == 'Enter')
                            this.addOption()
                    }}
                    onChange={() => {
                        this.setState(prev => ({error: undefined}));
                    }}
                    />
                <br></br>
                <RaisedButton
                    label="Добавить"
                    primary={true}
                    onClick={this.addOption}
                />
            </div>
        );
    }
}
