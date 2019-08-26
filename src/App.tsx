import React from 'react';
import './App.css';
import ListComponent from './ListComponent';

export interface ITodoItem {
  todo: string;
  complete: boolean;
}

interface IAppState {
  title: string;
  reverseList: boolean;

  myList: ITodoItem[];
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    // Default values for state
    this.state = {
      title: "Hej hej",
      myList: [
        { todo: 'Gå ut med hunden', complete: false },
        { todo: 'Handla mat', complete: false },
        { todo: 'Kasta soporna', complete: false }
      ],
      reverseList: false
    };

    // Bindings, to prevent call back errors to this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      title: "Du klickade på knappen",
      reverseList: !this.state.reverseList,
      myList: [...this.state.myList, { todo: "New item", complete: true }]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
            {this.state.title}
          </span>
          <p>
            <button type="button" onClick={this.handleClick}>Ändra texten</button>
          </p>

          <ListComponent someList={this.state.myList} />
        </header>
      </div>
    );
  }
}

export default App;