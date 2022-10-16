import logo from './logo.svg';
import './App.css';

function login() {
  return (
    <div className="login">
      <header className="login-header">
      <h1 react form></h1>
    <div id="login"></div>
    <script src="https:unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src="https:unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https:unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
 <script type="text/babel">

 </script>

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

export default login;
