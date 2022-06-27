// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-container">
            <div className="name-container">
              <button
                type="button"
                className="name-button"
                onClick={this.onShowFirstName}
              >
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="name">Joe</p>}
            </div>
            <div className="name-container">
              <button
                type="button"
                className="name-button"
                onClick={this.onShowLastName}
              >
                Show/Hide Lastname
              </button>
              {showLastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
