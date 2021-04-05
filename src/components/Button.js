function Button(props) {

  const handleClick = () => {
    props.clickHandler(props.name);
  }

  const className = () => {
    if (props.name === "0") {
      return "zero-number"
    };

    if (props.orange) {
      return "orange"
    }
  }

  return (
    <div className={className()}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
}

export default Button;