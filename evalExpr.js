
function evalExpr(expr) {
  var spaceSeparated = expr.split(" ");
  var parens = [];
  var expression = [];
  var i = 0;
  
  while (spaceSeparated.length > i) {
    var currVal = spaceSeparated[i];
    
    if (currVal === "(") {
      parens.push(currVal);
    } else if (currVal === ")") {
      parens.pop();
      var len = expression.length;
      var toBeEvaluated = expression.splice(len-3, 3);
      var evaluated = evaluateSimpleExpr(toBeEvaluated);
      expression.push(evaluated);
    } else {
      expression.push(spaceSeparated[i]);
    }
    i++;
  }
  
  console.log("answer: ", expression[0]);
  return expression[0];
                       
  function evaluateSimpleExpr(expression) {
    if (expression[0] === "add") {
      return eval(expression[1]) + eval(expression[2]);
    } else if (expression[0] === "mult") {
      return eval(expression[1]) * eval(expression[2]);
    }
  }
  
}

evalExpr("( add ( mult 2 10 ) 5 )")
evalExpr("( add ( mult 2 3 ) 2 )")
evalExpr("( add ( mult 2 ( mult ( add 3 3 ) 2 ) ) 5 )")
