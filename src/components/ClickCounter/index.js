// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  inCrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>
          The Button has been Clicked <span>{count}</span> Times
        </h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.inCrement} type="button">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
