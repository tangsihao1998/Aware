import React from 'react';


class App extends React.Component{
  state={
    name:'hao',
    age: 20
  }
  handleClick = (e) =>{
    // console.log(e.target);
    this.setState({
      name:'HelloWorld',
      time: '10'
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
  }
  handleChange =(e) =>{
    this.setState({
      name: e.target.value
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleClick}>Click Me</button>
          <p>My name is {this.state.name} and i am {this.state.age}</p>
          <form onSubmit ={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
