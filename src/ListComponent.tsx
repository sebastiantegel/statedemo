import React from 'react';
import './App.css';
import { ITodoItem } from './App';

interface IListComponentProps {
  someList: ITodoItem[];
}

class ListComponent extends React.Component<IListComponentProps, {}> {
  constructor(props: any) {
    super(props);

  }

  render() {
    let lis: JSX.Element[] = [];

    for(let i = 0; i < this.props.someList.length; i++) {
      lis.push((<li key={i}>{this.props.someList[i].todo}</li>));
    }
    
    return (
      <ul>
        {lis}
      </ul>
    );
  }
}

export default ListComponent;