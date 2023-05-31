// Write your code here
import {component} from 'react'

import './index.css'

class ClickCounter extends component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked<span>{count}</span>Times
        </h1>
        <p className="description">click the button to increase the count!</p>
        <button onClick={this.increment} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
