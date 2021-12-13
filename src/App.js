import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       Dictionary App
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer">
        <a href="https://github.com/torn6810/dictionary-project"> Open Source Code{" "}</a> 
      by Edith Tornel</footer>
      </div>
    </div>
  );
}

export default App;
