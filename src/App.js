import './App.css';
import Index from './components/ArrayLoop';
import Application from './components/Form/formSubmission';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Toggle from './components/ToggleSwitch/toggleSwitch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='componentWrapper1'>
          <h1>Simple Phone book App </h1>
          <Application/>
        </div>
        <div style={{'border':'1px solid white', 'width':'100%', 'margin':'20px'}}></div>
       <div className='componentWrapper2'>
          <h1>TicTacToe Game</h1>
         <TicTacToe/>
       </div>
       <div className='componentWrapper3'>
          <h1>Simple Btn Switch </h1>
         <Toggle/>
       </div>
       <div className='componentWrapper4'>
          <h1>Looping through Array and displaying values per Click </h1>
         <Index/>
       </div>
      </header>
    </div>
  );
}

export default App;
