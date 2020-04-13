import React from 'react';
import './App.css';
import DisplayQuotes from './components/DisplayQuotes';
import axios from 'axios';

const sampleQuote = {
  quote: 'By chilling my loins I increase the chances of impregnating my wife.',
  character: 'Apu Nahasapeemapetilon',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629'
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      oneQuote: sampleQuote
    }; this.getQuote = this.getQuote.bind(this);
  }

  getQuote () {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=20')
      .then(response => response.data)
      .then(data => {
        this.setState({
          oneQuote: data[0],
        });
      });
  }

  render () {
    return (
      <div className='App'>
        <DisplayQuotes oneQuote={this.state.oneQuote} />
        <button type='button' onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
