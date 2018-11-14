import React, { Component } from 'react';
import MatchupCard from './matchupCard'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handlePicks } from '../../../../../actions/seasons/weeks/handlePicks'
import { lockMatchups } from '../../../../../actions/seasons/weeks/matchups/lockMatchups'
import moment from 'moment';

class MatchupList extends Component {

  state = {
    userPicks: [],
    gameTimes: {}
  }

  componentDidMount(){
    let gameTimes = {}
    this.props.matchups.forEach(matchup => {
        return gameTimes[matchup.gameDateTime] === undefined && matchup.locked === false ? gameTimes[matchup.gameDateTime] = "Active" : null
    })
    this.setState({gameTimes: gameTimes})
  }

  handleClick = (matchupId, teamId) => {
    let userState = this.state.userPicks.find(userPick => userPick.matchup_id === matchupId)
    let userGlobal = this.props.userPicks.find(userPick => userPick.matchupId === matchupId)
    if (userState && userGlobal){
      if(userGlobal.teamId == teamId){
        this.setState({userPicks: this.state.userPicks.filter(el => el !== userState)})
      }
    } else if (userState && userState.team_id != teamId && !userGlobal){
        let index = this.state.userPicks.findIndex(userPick => userPick.matchup_id === matchupId)
        let newArray = this.state.userPicks
        newArray[index] = {...newArray[index], team_id: teamId}
        this.setState({userPicks: newArray})
    } else if (userGlobal && userGlobal.teamId != teamId && !userState){
          this.setState({userPicks:
            [...this.state.userPicks,
              {matchup_id: matchupId, team_id: teamId, week_id: this.props.weekId, user_id:
                this.props.userId, league_season_id: this.props.leagueSeasonId}]
          })
    } else if (userState === undefined && userGlobal === undefined){
        this.setState({userPicks:
        [...this.state.userPicks,
          {matchup_id: matchupId, team_id: teamId, week_id: this.props.weekId, user_id:
            this.props.userId, league_season_id: this.props.leagueSeasonId}]
      })
    }
  }


  handleSubmit = () => {
    if (this.state.userPicks.length > 0){
      this.props.handlePicks(this.state.userPicks)
      alert("Picks submitted.")
    }
  }


// passed down to MatchUp card in renderMatchupList which in turn passes it to the Timer Component
// this.state.gameTimes handles bulk dispatching of "locked" matchups based on a shared time
  handleExpiration = (gameTime) => {
    if (this.state.gameTimes[gameTime] === "Active"){
      this.setState({gameTimes: {...this.state.gameTimes, [gameTime]: "Expired"}})
      this.props.lockMatchups(gameTime)
    }
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => {
      let pick = this.props.userPicks.find(el => matchup.id === el.matchupId)
      if(pick){
        if(pick.teamId === matchup.homeTeam.id){
          pick = "home"
        } else{
          pick = "away"
        }
      }
      return <MatchupCard key={matchup.id} pick={pick} matchup={matchup} handleClick={this.handleClick} handleExpiration={this.handleExpiration}/>})
  }

  renderSubmit = () => {
    if (this.props.matchups.find(matchup => matchup.locked === false)){
      return <Button onClick={this.handleSubmit}>Submit Picks</Button>
    }
  }

  render(){
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
    matchups: state.season.season.season.currentWeek.matchups,
    userId: state.user.user.id,
    leagueSeasonId: state.season.season.id,
    userPicks: state.userPicks.weekly
  }
}

export default connect(mapStateToProps,{handlePicks, lockMatchups})(MatchupList)
