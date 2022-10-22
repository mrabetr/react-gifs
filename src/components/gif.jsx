import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    // const src = "https://media2.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif";
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img
        src={src}
        alt="le-wagon"
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
