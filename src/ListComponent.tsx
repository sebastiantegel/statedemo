import React from 'react';
import './App.css';
import { ITodoItem } from './App';

interface IListComponentProps {
  someList: ITodoItem[];

  markAsComplete(i: number): void;
}

class ListComponent extends React.Component<IListComponentProps, {}> {
  constructor(props: any) {
    super(props);

  }

  handleChange(i: number) {
    // Verify that it works
    // alert("Du klickade på: " + i);

    // Do not change props, ever!
    // this.props.someList[i].complete = true;

    // Run function in App.tsx instead to change the state there and update with render.
    this.props.markAsComplete(i);
  }

  render() {
    let lis: JSX.Element[] = [];

    for(let i = 0; i < this.props.someList.length; i++) {
      lis.push((
          <li key={i} className={this.props.someList[i].complete ? 'done' : ''} onClick={this.handleChange.bind(this, i)}>
            {/* <input type="checkbox" checked={this.props.someList[i].complete}  /> */}
            {this.props.someList[i].todo}
          </li>));
    }
    
    return (
      <ul>
        {lis}
      </ul>
    );
  }
}

export default ListComponent;