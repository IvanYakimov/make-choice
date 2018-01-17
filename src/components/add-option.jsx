import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    }; 

    addOption = (event) => {
        event.preventDefault();
        const input = event.target.querySelector('input[name=addOption]');
        const option = input.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if (!error)
            input.value = '';
    }

    render() {
        return (
            <div className='add-option-btn'>
                {this.state.error && <p> {this.state.error} </p>}
                <form className="pure-form" onSubmit={this.addOption}>
                    <input type='text' name='addOption' />
                    <button className='pure-button pure-button-primary'>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}
