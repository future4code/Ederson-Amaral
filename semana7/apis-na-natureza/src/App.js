import React from 'react';
import axios from 'axios';

class App extends React.Component {
  componentDidMount(){
    this.getMissions();
  }

  getMissions = () => {
    axios.get('https://api.spacexdata.com/v3/missions')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  render() {
    return (
      <div className='App'>
        <h1>Missões SpaceX</h1>
      </div>
    );
  }
  
}

export default App;
