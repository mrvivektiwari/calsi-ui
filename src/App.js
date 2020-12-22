/* eslint-disable no-eval */
import React, { useState } from 'react';
import './App.css';
import lightTheme from './config/light-theme';
import darkTheme from './config/dark-theme';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import NormalCalsi from './components/NormalCalsi';
import ScientificCalsi from './components/ScientificCalsi';

const Vivew = styled.div`
  width: 100%;
  height: 50px;
  color: ${props => props.theme.font_color};
  background: ${props => props.theme.background_color};
  text-align: right;
  padding-top: 10px;
  padding-right: 10px;
`;

const BodyPart = styled.div`
  color: ${props => props.theme.font_color};
  background: ${props => props.theme.background_color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {

  const [theme, setTheme] = useState(lightTheme);
  const [mode, setMode] = useState(false);
  const [data, setData] = useState('');

  const changeTheme = (theme) => {
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;
    setTheme(selectedTheme);
  }

  const changeMode = () => {
    setMode(!mode);
  }

  const handleClick = event => {
    const value = event.target.name;
    switch (value) {
      case '=':
        if (data !== '') {
          let ans = '';
          try {
            ans = eval(data);
          }
          catch (err) {
            setData("Math Error");
          }
          if (ans === undefined)
            setData("Math Error");
          else
            setData(ans);
          break;
        }
        break;
      case 'Sign':
        let expression = data;
        if (Math.sign(expression) === 1) {
          expression = '-' + data;
        } else {
          expression = Math.abs(expression);
        }
        setData(expression);
        break;
      case 'Square':
        setData(Math.pow(data, 2));
        break;
      case 'Square Root':
        setData(Math.sqrt(data));
        break;
      case 'Clear':
        setData('');
        break;
      default: {
        let expression = data + value;
        if (expression.indexOf('0') === 0) {
          expression = expression.substring(1, expression.length);
        }
        setData(expression);
        break;
      }
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header
          changeTheme={changeTheme}
          mode={mode}
          changeMode={changeMode}
        >
        </Header>
        <BodyPart>
          <table className="table-bordered">
            <thead>
              <tr>
                <td colSpan="4">
                  <Vivew>{data ? data : '0'}</Vivew>
                </td>
              </tr>
            </thead>
            <tbody>
              <NormalCalsi handleClick={handleClick} />
              {mode && <ScientificCalsi handleClick={handleClick} />}
            </tbody>
          </table>
        </BodyPart>
      </ThemeProvider>
    </div>
  );
}

export default App;
