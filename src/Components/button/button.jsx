import "./button.css"

const Button = (props) => {
  return <button onClick={props.click} className="btn">{props.children}</button>
}

export default Button;