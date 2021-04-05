import Button from "./Button";

function ButtonPanel(props) {

  const handleClick = (name) => {
    props.clickHandler(name);
  }

  return (
    <div className="mt-10">
      <div className="row flex-row">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" orange clickHandler={handleClick} />
      </div>
      <div className="row flex-row">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" orange clickHandler={handleClick} />
      </div>
      <div className="row flex-row">
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" orange clickHandler={handleClick} />
      </div>
      <div className="row flex-row">
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" orange clickHandler={handleClick} />
      </div>
      <div className="row flex-row">
        <Button name="0" clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" orange clickHandler={handleClick} />
      </div>
    </div>
  );
}

export default ButtonPanel;