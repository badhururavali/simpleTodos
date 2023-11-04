import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {simpleTodo: initialTodosList}

  deleteTodoItem = id => {
    const {simpleTodo} = this.state
    const filterTodos = simpleTodo.filter(eachItem => eachItem.id !== id)
    this.setState({simpleTodo: filterTodos})
  }

  render() {
    const {simpleTodo} = this.state

    return (
      <div className="bg_container">
        <div className="simple_container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {simpleTodo.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                deleteTodoItem={this.deleteTodoItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
