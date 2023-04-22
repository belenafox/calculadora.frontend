let result = $("#result");

function insert(num) {
  result.val(result.val() + num);
}

function clearInput() {
  result.val("");
}

function calculate() {
  result.val(eval(result.val()));
}