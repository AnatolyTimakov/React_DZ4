import React, { Children, Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {

  state = {
    selectedChild: 0
  };


  changeChild = (event) => {
    this.setState({ selectedChild: Number(event.target.dataset.id) })
  };

  render() {

    const {children} = this.props;

    return (
      <div className="switcher">
        <ul className="component-list">
          {
            React.Children.map(children,  (item, index) => {
              const name = item.type.displayName || item.type.name;
              return (
                <li className="component-list__name"
                  data-id={index}
                  key={index}
                  onClick={this.changeChild}
                >{name}</li>
              )
            })
          }
        </ul>
        <hr></hr>
        {
          React.Children.map(children, (item, index) => {
            if (this.state.selectedChild === index) {
              return item
            }
            else {
              return null
            }
          })
        }
      </div>
    );
  }
}

export default Switcher;
