import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:"ニンジャわんこ"}
  }
  render()
  {
    return (
    <div>
      <h1>こんにちは{this.state.name}さん！</h1>
      <button onClick={()=>{this.setState({name:"ひつじ仙人"})}}>ひつじ仙人</button>
      <button onClick={()=>{this.setState({name:"ニンジャわんこ"})}}>ニンジャわんこ</button>
    </div>

    );
  }
}

export default App;