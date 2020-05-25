import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class GroceryListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      done : false
    };
  }

  onListItemClick(){
    this.setState({
      done : !this.state.done
    });
  }

  onListItemMouseOver(e){
    e.target.style.fontWeight = 'bold';
  }
  
  render(){
    const style = {
      textDecoration : this.state.done ? 'line-through' : 'none'
    }; 

    return (
      <li style = {style} onClick = {this.onListItemClick.bind(this)} onMouseOver = {this.onListItemMouseOver.bind(this)}>
        {this.props.todo}
      </li>
    )
  }
}

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo} />
    )}
  </ul>
);

const GroceryList = () => (
  <div>
  <h2>My Grocery List</h2>
  <TodoList
    todos={[
      'cucumbers',
      'kale',
      'tomato'
    ]}
  />
</div>
); 


ReactDOM.render(<GroceryList />, document.getElementById('root'));
