import React from 'react';
import './App.css';
import { ITodoItem } from './App';

interface IAddItemComponentState {
  newItemTodo: string;
}

interface IAddItemComponentProps {
  addNewItem(item: ITodoItem): void;
}

class AddItemComponent extends React.Component<IAddItemComponentProps, IAddItemComponentState> {
  constructor(props: any) {
    super(props);

    this.state = {
      newItemTodo: ''
    };

    this.updateInputValueInState = this.updateInputValueInState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // alert("Du klickade på knappen: " + this.state.newItemTodo);

    this.props.addNewItem({ todo: this.state.newItemTodo, complete: false });
  }

  updateInputValueInState(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newItemTodo: e.target.value
    });
  }

  render() {    
    return (
      <div>
        <input type="text" onChange={this.updateInputValueInState} />
        <button type="button" onClick={this.handleClick}>Spara</button>
      </div>
    );
  }
}

export default AddItemComponent;