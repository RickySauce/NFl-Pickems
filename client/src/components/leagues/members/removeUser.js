import React from 'react';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { deleteUser }  from '../../../actions/league/deleteUser'




 const RemoveUser = (props) => {

   const removeUser = () => {
      fetch(`/api/leagues/${props.leagueId}/users/remove/${props.id}`, {
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
      },
        method: "DELETE"
      })
      .then(res => props.deleteUser(props.id)
      )
     }

   const renderButton = () => {
     if (props.owner){
       return <Button onClick={removeUser} className="pull-right" bsStyle="danger" bsSize="xsmall" value={props.id}>x</Button>
     }else{
       return null
     }
   }

   return(
     renderButton()
   )
  }








const mapStateToProps = (state) => {
  return  {
    owner: state.league.league.owner,
    leagueId: state.league.league.id
  }
}

export default connect(mapStateToProps , { deleteUser })(RemoveUser)
