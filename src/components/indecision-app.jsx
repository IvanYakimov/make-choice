import React from 'react';

import AddOption from './add-option';
import OptionList from './option-list';
import OptionModal from './option-modal';
import Action from './action';
import Header from './header';

export default class IndectionApp extends React.Component {
    state = { 
        optionList: [],
        selectedOption: undefined, 
    }

    handleClearOption = () => this.setState( () => ({selectedOption: undefined}) );

    handleDeleteAllOptions = () => this.setState(() => ({ optionList: [] }));

    handleDeleteOption = (option) => {
        this.setState((prev) => ({ optionList: prev.optionList.filter(x => x != option) }));
    }

    handleMakeDecision = () => {
        const idx = Math.floor(Math.random() * this.state.optionList.length);
        const option = this.state.optionList[idx];
        this.setState(() => ({
            selectedOption: option
        }));
        console.log(this.state);
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Введите верную строку'
        } else if (this.state.optionList.indexOf(option) > -1) {
            return 'Этот вариант уже в списке'
        }

        this.setState(prevState => ({
            optionList: prevState.optionList.concat(option),
        }));
    }

    componentDidMount() {
        try {
            let optionList = JSON.parse(localStorage.options);
            this.setState(() => ({
                optionList
            }));
        } catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.optionList.length != this.state.optionList.length) {
            localStorage.options = JSON.stringify(this.state.optionList);
        }
    }

    render() {
        const title = "Сделай выбор";
        const subTitle = "Доверься компьютеру в принятии решений";
        return (
            <div className='row'>
                <Header
                    title={title}
                    subTitle={subTitle}
                />
                <Action
                    hasOptions={this.state.optionList.length > 0}
                    handleMakeDecision={this.handleMakeDecision}
                />
                <OptionList
                    optionList={this.state.optionList}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}
                />
            </div>
        );
    }
}