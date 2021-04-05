import isNumber from "./isNumber";
import operate from "./operate";

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      next: null,
      total: null,
      calculation: null,
    }
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {
        total: obj.total,
        calculation: obj.operation,
      };
    }

    if (obj.operation) {
      if (obj.next) {
        return {
          next: obj.next + buttonName,
          operation: obj.operation,
          total: obj.total,
        };
      }
      return {
        next: buttonName,
        operation: obj.operation,
        total: obj.total,
      };
    }
    console.log(obj)
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      return {
        next,
        total: obj.total,
        operation: obj.operation
      };
    }

    return {
      operation: obj.operation,
      next: buttonName,
      total: obj.total,
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: result / 100,
      };
    }

    if (obj.total) {
      return {
        total: obj.total / 100,
      }
    }

    if (obj.next) {
      return {
        total: obj.next / 100,
      }
    }
  }

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {
          operation: obj.operation,
          total: obj.total,
        };
      }
      return {
        next: obj.next + ".",
        operation: obj.operation,
        total: obj.total,
      };
    }
    return {
      next: "0.",
      operation: obj.operation,
      total: obj.total,
    };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {
        next: obj.next,
        operation: null,
        total: obj.total,
      };
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return {
        next: null,
        operation: obj.operation,
        total: (-(obj.next)).toString(),
      };
    }

    if (obj.total) {
      return {
        next: null,
        operation: obj.operation,
        total: (-obj.total).toString(),
      }
    }
  }

  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return {
      next: obj.next,
      operation: buttonName,
      total: obj.total,
    };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}