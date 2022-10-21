import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello, {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  // handleClick() {
  //   this.setState({
  //     clicked: !this.state.clicked
  //   });
  // }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    // console.log('counter', this.state.counter);
    return (
      <div
        className={this.state.clicked ? "clicked" : ""}
        onClick={this.handleClick}
        // onClick={this.handleClick.bind(this)}
      >
       Hello, {this.props.name} {this.state.counter}
     </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Rafik" />, root);
}
