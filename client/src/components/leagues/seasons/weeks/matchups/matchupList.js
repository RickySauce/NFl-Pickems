import React, { Component } from 'react';
import MatchupCard from './matchupCard'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handlePicks } from '../../../../../actions/seasons/weeks/handlePicks'

class MatchupList extends Component {

  state = {
    userPicks: []
  }

  handleClick = (matchupId, teamId) => {
    if (this.state.userPicks.find(userPick => userPick.matchup_id === matchupId)){
      let index = this.state.userPicks.findIndex(userPick => userPick.matchup_id === matchupId)
      let newArray = this.state.userPicks
      newArray[index] = {...newArray[index], team_id: teamId}
      this.setState({userPicks: newArray})
    } else {
      this.setState({userPicks:
        [...this.state.userPicks,
          {matchup_id: matchupId, team_id: teamId, week_id: this.props.weekId, user_id:
            this.props.userId, league_season_id: this.props.leagueSeasonId}]
      })
    }
  }

  handleSubmit = () => {
    this.props.handlePicks(this.state.userPicks, this.props.userPicks)
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => <MatchupCard key={matchup.id} handelClick={this.handleClick} matchup={matchup}/>)
  }

  renderSubmit = () => {
    return <Button onClick={this.handleSubmit}>Submit Picks</Button>
  }

  render(){
    console.log(this.props.userPicks)
    return(
      <div>
      {this.renderMatchupList()}
      {this.renderSubmit()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    userId: state.user.user.id,
    leagueSeasonId: state.season.season.id,
    userPicks: state.userPicks
  }
}

export default connect(mapStateToProps,{handlePicks})(MatchupList)
