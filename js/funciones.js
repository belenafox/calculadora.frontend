let result = $("#result");

function insert(num) {
  result.val(result.val() + num);
}

function clearInput() {
  result.val("");
}

function calculate() {
  let expression = result.val();
  if (expression.indexOf('/0') !== -1) { // Verificar si hay una división entre cero
    result.val('Error: División entre cero');
    return;
  }
  result.val(eval(expression));
}