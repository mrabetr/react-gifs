import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
      gifs: []
    };

    // this.search('disney');
  }

  search = (query) => {
    // API call
    giphy('WJH0bieJ3BRDTU4S3tlPQFRZXExvQqZO').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // console.log(res.data);
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
