// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  getInput = event => {
    const input = event.target.value
    this.setState({count: input.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="calculator-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="label-text">
            Enter the phrase
          </label>
          <input
            type="text"
            id="input"
            className="input-card"
            placeholder="Enter the phrase"
            onChange={this.getInput}
          />
          <div className="count-card">
            <p className="count-text">No.of letters: {`${count}`}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
