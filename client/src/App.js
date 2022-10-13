import logo from './logo.svg';
import './App';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 react form></h1>
    <div id="app"></div>
    

   <div className="form">
     <form>
          <div className="input-container">
            <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;

