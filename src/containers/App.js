import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import CurrentWeather from '../components/CurrentWeather';

class App extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Global Kinetics Web Test Weather App</Title>
        </Header>
        <Main>
          <CurrentWeather />
        </Main>
        <Footer />
      </AppContainer>
    );
  }
}

//Component Styling
const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(to bottom, #a5cdfc 0%, #c9c9c9 100%);
  display: grid;
  grid-template-rows: 150px auto 20px;
  min-height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  color: #e3e3bc;
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
`;
const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
`;

const Main = styled.main`
  font-size: 18px;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  height: 60px;
  animation: spin infinite 20s linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
`;

export default App;
