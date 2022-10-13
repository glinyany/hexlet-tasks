import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      countries: [],
    }
  }

  generateUl = () => {
    const { value, countries } = this.state;
    console.log('Generating UL:', value, ':', countries)

    if (countries.length === 0) return null;

    return (
      <ul>
        {countries.map((country) => <li key={country}>{country}</li>)}
      </ul>
    );
  }

  handleInput = async (e) => {
    e.preventDefault();
    const res = await axios.get('/countries', { params: { term: e.target.value }})
    console.log('value:', e.target.value, '\n result data:', res.data);
    this.setState({
      value: e.target.value,
      countries: [...res.data],
    });
  }

  render() {
    
    return (
      <div>
        <form>
          <input onChange={this.handleInput} type="text" className="form-control" placeholder="Enter Country"/>
        </form>
        {this.generateUl()}
      </div>
    );
  };
};
// END
