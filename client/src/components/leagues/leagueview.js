import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import LeagueSideNav from './leagueSideNav'
import MembersList from './members/membersList'
import SeasonContainer from './seasons/seasonContainer'
import {fetchLeague} from '../../actions/league/fetchLeague'


 class League extends Component {

  componentWillMount() {
    this.props.fetchLeague(this.props.match.params.id)
  }

    renderMembersList = () => {
      return this.props.loading === false ? <MembersList users={this.props.users}/> : null
    }

    renderSeasonView = () => {
      return this.props.loading === false ? <SeasonContainer currentSeason={this.props.currentSeason}/> : null
    }

  render() {
    return (
      <div>
      <PageHeader className="welcome">{this.props.name}</PageHeader>
      <div style={{width: "15%", display: 'inline-block'}}>
      <Panel>
      <Panel.Heading>Members {this.props.owner ? <Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1}>+</Button> : null }</Panel.Heading>
      {this.renderMembersList()}
      </Panel>
      </div>
      <div style={{width: "40%", display: 'inline-block', padding: '40px'}}>
      {this.renderSeasonView()}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    currentSeason: state.league.league.current_season,
    users: state.league.league.users,
    owner: state.league.league.owner,
    name: state.league.league.name,
    loading: state.league.loading
  }
}

export default connect(mapStateToProps,{fetchLeague})(League)
