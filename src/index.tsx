import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>증가</button>
        <button onClick={this.onDecrement}>감소</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
