import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCapitalItem = countryAndCapitalsList.find(
      eachCapitalAndCountryItem =>
        eachCapitalAndCountryItem.id === activeCapitalId,
    )

    return activeCapitalItem.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading"> Countries And Capitals </h1>
          <div className="capital-selector-container">
            <select
              className="selector-card"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapitalItem => (
                <option
                  className="options-text"
                  value={eachCapitalItem.id}
                  key={eachCapitalItem.id}
                >
                  {eachCapitalItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-text"> is capital of which country? </p>
          </div>
          <p className="country-text">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
