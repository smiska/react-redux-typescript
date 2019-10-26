import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   return <div></div>
// }
interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { counter: 0 }
  }

  onIncrement(): void {
    let cnt = this.state.counter
    this.setState({ counter: ++cnt })
  }

  onDecrement(): void {
    let cnt = this.state.counter
    this.setState({ counter: --cnt })
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement.bind(this)}>Increment</button>
        <button onClick={this.onDecrement.bind(this)}>Decrement</button>
        <p>{this.state.counter}</p>
      </div>)
  }
}

ReactDOM.render(<App color="red"></App>, document.querySelector('#root'))