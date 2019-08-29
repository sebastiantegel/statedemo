import React from 'react';
import './App.css';
import ListComponent from './ListComponent';
import { thisTypeAnnotation } from '@babel/types';
import AddItemComponent from './AddItemComponent';

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
      title: 'Hej hej',
      myList: [
        { todo: 'Gå ut med hunden', complete: false },
        { todo: 'Handla mat', complete: false },
        { todo: 'Kasta soporna', complete: false }
      ],
      reverseList: false
    };

    // Bindings, to prevent call back errors to this
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleClick() {
    this.setState({
      title: "Du klickade på knappen"
    });
  }

  toggle(i: number) {
    let list = this.state.myList;

    // Toggle the complete between true/false
    list[i].complete = !list[i].complete;

    // Remove the item from the list
    // list.splice(i, 1);

    this.setState({
      myList: list
    });
  }

  addItem(newItem: ITodoItem) {
    this.setState({
      myList: [...this.state.myList, newItem]
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

          <AddItemComponent addNewItem={this.addItem} />

          <ListComponent someList={this.state.myList} markAsComplete={this.toggle} />
        </header>
      </div>
    );
  }
}

export default App;