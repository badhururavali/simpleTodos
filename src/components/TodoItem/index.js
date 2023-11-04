// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodoItem} = props
  const {id, title} = todoItem

  const onClickEvent = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todoLists">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onClickEvent}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
