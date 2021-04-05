function operate(numberOne, numberTwo, operation) {
  const one = (numberOne || 0);
  const two = (numberTwo || 0);

  if (operation === "÷") {
    return (one / two).toString();
  }

  if (operation === "x") {
    return (one * two).toString();
  }

  if (operation === "-") {
    return (one - two).toString();
  }

  if (operation === "+") {
    return (Number(one) + Number(two)).toString();
  }
}

export default operate;