import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'



export default class LeagueForm extends Component {

  state = {}

  render() {
    return (
      <form>
      <strong>Name of League</strong><br/><br/>
      <input type="text" name="name"/><br/><br/>
      <input type="submit" value="Create League"/>
      </form>
    )
  }

}
