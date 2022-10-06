/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRender: 'form',
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value, 'target.ch:', e.target.checked)
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ currentRender: 'grid' })
  }
  handleBackToForm = (e) => {
    e.preventDefault();
    this.setState({ currentRender: 'form' })
  }
  render() {
    const { currentRender } = this.state;

    const renderForm = () => (
      <form onSubmit={this.handleSubmit} name="myForm">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input onChange={this.handleChange} value={this.state.email}
            type="email" name="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input onChange={this.handleChange} value={this.state.password}
            type="password" name="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea onChange={this.handleChange} value={this.state.address}
            type="text" className="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input onChange={this.handleChange} value={this.state.city}
            type="text" className="form-control" name="city" id="city" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select value={this.state.country} onChange={this.handleChange}
            id="country" name="country" className="form-control">
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input checked={this.state.acceptRules} onChange={this.handleChange}
                type="checkbox" id="rules" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )

    const renderGrid = () => {
      const properties = this.state;
      console.log('properties :accepted:', this.state.accepted, ':country:', properties.country)
      return (
        <div>
          <button onClick={this.handleBackToForm} type="button" className="btn btn-primary">Back</button>
          <table className="table">
            <tbody>
              <tr>
                <td>acceptRules</td>
                <td>{properties.acceptRules === true ? 'true':'false'}</td>
              </tr>
              <tr>
                <td>address</td>
                <td>{properties.address}</td>
              </tr>
              <tr>
                <td>city</td>
                <td>{properties.city}</td>
              </tr>
              <tr>
                <td>country</td>
                <td>{properties.country}</td>
              </tr>
              <tr>
                <td>email</td>
                <td>{properties.email}</td>
              </tr>
              <tr>
                <td>password</td>
                <td>{properties.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    return currentRender === 'form' ? renderForm() : renderGrid();
  }
}
// END
