import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileView from './profileView'

class ProfileContainer extends Component {

  renderView = () => {
    if (this.props.loading === false && this.props.user !== ''){
      return <ProfileView user={this.props.user}/>
    }
  }

  render(){
    return(
      <div>
      {this.renderView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    user: state.user.user,
    loading: state.user.loading
  }
}

export default connect(mapStateToProps)(ProfileContainer)
