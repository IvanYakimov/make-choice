import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={Boolean(props.selectedOption)}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearOption}
    >
        <h3> Сделай это: </h3>
        <p> {props.selectedOption} </p>
        <button onClick={props.handleClearOption}> ОКЕЙ </button>
    </Modal>
);

export default OptionModal;