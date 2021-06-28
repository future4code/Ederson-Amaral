import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Header = styled.h1`
  display: flex;
  text-transform: uppercase;
  text-shadow: whitesmoke;
  background-color: black;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 100%;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;  
  padding: 10px;
  color: white;
  background-image: url("https://www.telesat.com/wp-content/uploads/elementor/thumbs/Hero-Scene-Milky-Way-rotate-owbr34zo9dqr68enjtql6he91ryt08ixg4b32lumf4.jpg");
`;

class App extends React.Component {
  state = {
    missions: []
  }

  componentDidMount(){
    this.getMissions();
  }

  getMissions = () => {
    axios.get('https://api.spacexdata.com/v3/missions')
    .then((res) => {
      console.log(res.data)
      this.setState({missions: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  };

  render() {
    const missionsList = this.state.missions.map((mission) => {
      return (
        <div key={mission.mission_id}>
          <p>Nome: {mission.mission_name}</p>         
          <p>Fabricantes: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}</p>
          <button>
          <a href={mission.website} target='_blank'>Link para Web</a>
          </button>         
          <hr />
        </div>
      )
    })

    return (
      <div className='App'>
        <Header>
        <h1>Missões SpaceX</h1>
        </Header>
        <Container>
        {missionsList}
        </Container>
      </div>
    );
  }
  
}

export default App;
