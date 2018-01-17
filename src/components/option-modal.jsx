import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// const OptionModal = (props) => (
//     <Modal
//         isOpen={Boolean(props.selectedOption)}
//         contentLabel="Selected Option"
//         onRequestClose={props.handleClearOption}
//     >
//         <h3> Сделай это: </h3>
//         <p> {props.selectedOption} </p>
//         <button onClick={props.handleClearOption}> ОКЕЙ </button>
//     </Modal>
// );


export default class OptionModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.props.handleMakeDecision();
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Спасибо"
                primary={true}
                onClick={this.handleClose}
            // handleMakeDecision={this.handleMakeDecision}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    label="Что выбрать?"
                    onClick={this.handleOpen}
                    disabled={!this.props.hasOptions}
                />
                <Dialog
                    title="Твой выбор:"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <p>{this.props.selectedOption}</p>
                </Dialog>
            </div>
        );
    }
}
