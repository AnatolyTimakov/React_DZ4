import React, { Component } from 'react';

class Modal extends Component {

  closeForm = () => {
    this.props.ModalShow(false);
  }

  render() {
    return (
      <div>
        <h1>Модальное окно!</h1>
        <button onClick={this.closeForm}>Close</button>
      </div>
    );
  }
}

export default Modal;
