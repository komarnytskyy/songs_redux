import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends React.Component<any, any> {
  renderList() {
    return this.props.songs.map((song: any) => {
      return (
        <div className='item' key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSong(song)
              }}
              className="ui button primary">select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    )
  }
}

const getState = (state: any) => {
  return { songs: state.songs };
}

export default connect(getState, { selectSong: selectSong })(SongList);
