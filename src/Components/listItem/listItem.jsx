// ! Component
import Button from "../button/button"

// ! Styles

import "./listItem.css"

const ListItem = (props) => {
  return (
<li>
          <span>{props.task}</span>
        <Button click={props.remove}>Delete Task</Button>
        </li>
  )
}

export default ListItem