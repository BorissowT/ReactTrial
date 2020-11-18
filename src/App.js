import React, { Component } from 'react';
import './App.css';

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        teamNameList: [
          {"title":'House of Lannister – “Hear Me Roar"', "picture":'/logos/lannister_sigil_by_varvara64-d5ukyr3.png', 
        "realTitle":"Lannister"},
          {"title":'House Baratheon of Drangonstone – “Ours is the Fury”', "picture":'/logos/baratheon_of_dragonstone_sigil_by_varvara64-d5vl7k7.png', 
          "realTitle":"Baratheon of Drangonstone"},
          {"title":'House Targaryen – “Fire and Blood”', "picture":'/logos/targ.png', 
          "realTitle":"Targaryen"},
          {"title":'House of Stark – “Winter is Coming”', "picture":'/logos/stark.png', 
          "realTitle":"Stark"},
          {"title":'House Tyrell – “Growing Strong”', "picture":'/logos/tyrell.png', 
          "realTitle":"Tyrell"},
          {"title":'House of Arryn – “As High As Honor”', "picture":'/logos/arryn.png', 
          "realTitle":"Arryn"},

      ],
        teamName: "",
        teamPicture: "",
        currentTeam: "",
        text: ""
      };

      // This binding is necessary to make `this` work in the callback
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      var teamName = event.target.value;
      var teamPicture = "";
      var text = "? Never heard of them?";
      this.setState((state)=>{
        if(event.target.value.length>3){
          state.teamNameList.forEach(element => {
            if(element.title.match(teamName)){
              teamName = element.title;
              teamPicture = element.picture;
              text = "";
            }
        });
      }
        return {teamName: teamName, teamPicture: teamPicture, text: text}
        });


    }
    render(){
      return (
        <div className="App">
          <input 
              type="text" 
              placeholder="new flag" 
              onChange={this.handleChange}
            />
          <h3>{this.state.teamName}{this.state.text}</h3>
          <img src={this.state.teamPicture} />
        </div>
      );  
      }
}


export default App;
