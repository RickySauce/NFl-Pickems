import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSeason from './newSeason'


 class SeasonContainer extends Component {

  renderCurrentSeason = () => {
    return this.props.currentSeason === undefined && this.props.loading !== true  ? <NewSeason/> : "bye"
  }

  render() {
    console.log(this.props.currentSeason)
    console.log(this.props.loading)
    return (
      <div>
      {this.renderCurrentSeason()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    currentSeason: state.league.league.currentSeason,
    loading: state.season.loading
  }
}

export default connect(mapStateToProps)(SeasonContainer)
