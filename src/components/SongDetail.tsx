import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }: any) => {
  console.log(song)
  if(!song) {
    return <div>Select a Song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  )
}

const getState = (state: any) => {
  return {
    song: state.selectedSong,
  };
}

export default connect(getState)(SongDetail);
