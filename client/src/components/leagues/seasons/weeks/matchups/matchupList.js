import React, { Component } from 'react';
import GameTimeContainer from './gameTimeContainer'
import MatchupCard from './matchupCard'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handlePicks } from '../../../../../actions/seasons/weeks/handlePicks'
import { lockMatchups } from '../../../../../actions/seasons/weeks/matchups/lockMatchups'
import moment from 'moment';

class MatchupList extends Component {

  state = {
    userPicks: []
  }

  // componentDidMount(){
  //   //every minute check to see if enough time has surpassed for there to be results for games with expired clocks
  //   //matchups without a winningId and that aren't locked will be set to expired on mount
  //   //each matchup without a winningId that is expired and past a certain time: check for results on mount ?
  //   this.interval = setInterval(this.checkResults, 60000)
  //   this.initializeGameTimes()
  // }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderGameTimes = () => {
    let gameTimes = {}
    this.props.matchups.forEach(matchup => {
      gameTimes[matchup.gameDateTime] ? gameTimes[matchup.gameDateTime].push(matchup) : gameTimes[matchup.gameDateTime] = [matchup]
    })
    return Object.keys(gameTimes).map( (gameTime , index) => <GameTimeContainer key={index} gameTime={gameTime} matchups={gameTimes[gameTime]}/>)
  }

  // initializeGameTimes = () => {
  //   let timeNow = moment(new Date)
  //   let gameTimes = {}
  //   let checkResults = {}
  //   this.props.matchups.forEach(matchup => {
  //     if (matchup.locked === false){
  //       gameTimes[matchup.gameDateTime] = "Active"
  //     }else if (matchup.winningId === null) {
  //       let gameTime = moment(matchup.gameDateTime)
  //       console.log(timeNow.diff(gameTime, 'hours'), matchup.gameDateTime)
  //       gameTimes[matchup.gameDateTime] = "Expired"
  //     }
  //   })
  //   for (var gameTime in gameTimes){
  //     if (gameTimes[gameTime] === "Expired"){
  //       this.checkResults()
  //     }
  //   }
  //   this.setState({gameTimes: gameTimes})
  // }

  checkResults = (gameTimes) => {
    console.log("suh")
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
    } else {
      alert("Must make additional picks or change original ones")
    }
  }


// passed down to MatchUp card in renderMatchupList which in turn passes it to the Timer Component
// this.state.gameTimes handles bulk dispatching of "locked" matchups based on a shared time
  // handleExpiration = (gameTime) => {
  //   if (this.state.gameTimes[gameTime] === "Active"){
  //     this.setState({gameTimes: {...this.state.gameTimes, [gameTime]: "Expired"}})
  //     //lockMatchups needs weekId as a reference to update all of the matchups with the same game time for the same week - rails
  //     this.props.lockMatchups(gameTime, this.props.weekId)
  //   }
  // }

  // renderMatchupList = () => {
  //   return this.props.matchups.map(matchup => {
  //     let pick = this.props.userPicks.find(el => matchup.id === el.matchupId)
  //     if(pick){
  //       if(pick.teamId === matchup.homeTeam.id){
  //         pick = "home"
  //       } else{
  //         pick = "away"
  //       }
  //     }
  //     return <MatchupCard key={matchup.id} pick={pick} matchup={matchup} handleClick={this.handleClick}/>})
  // }

  renderSubmit = () => {
    if (this.props.matchups.find(matchup => matchup.locked === false)){
      return <Button onClick={this.handleSubmit}>Submit Picks</Button>
    }
  }

  render(){
    return(
      <div>
      {this.renderGameTimes()}
      {this.renderSubmit()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    weekId: state.season.season.season.currentWeek.id,
    matchups: state.season.season.season.currentWeek.matchups,
    userId: state.user.user.id,
    leagueSeasonId: state.season.season.id,
    userPicks: state.userPicks.weekly
  }
}

export default connect(mapStateToProps,{handlePicks, lockMatchups})(MatchupList)
