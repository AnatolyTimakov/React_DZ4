import React, { Component } from 'react';
import Modal from './Modal'
import './ModalButton.css';

class ModalButton extends Component {

  state = {
    isModalShow: false
  }

  showModal = () => {
    this.setState({ isModalShow: true })
  }

  closeModal = (value) => {
    this.setState({ isModalShow: value })
  }

  render() {
    return (
      <div className={this.state.isModalShow ? "modal__fog" : "modal"}>
        <button onClick={this.showModal}>Show modal</button>
        <div className={this.state.isModalShow ? "modal__body_show" : "modal__body_hidden"}>
          <Modal ModalShow={this.closeModal}/>
        </div>
      </div>
    );
  }
}

export default ModalButton;
