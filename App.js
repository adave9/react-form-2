import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
      super(props);
      this.state={value:""};
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    alert("You have submitted information successfully "+this.state.value);
    event.preventDefault();
  }
    render(){
      return(
            <div className="App">
                <h1>FORM DEMO</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                   
                <input type="submit" value="Submit"/>
                </form>
            </div>
      );
    }
}

export default App;
