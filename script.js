'use strict';
let currentInput = '';
let isResultCalculated = false;

function appendValue(value) {
  if (isResultCalculated) {
    currentInput = '';
    isResultCalculated = false;
  }

  currentInput += value;
  updateResult();
}

function clearResult() {
  currentInput = '';
  updateResult();
}

function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  updateResult();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  isResultCalculated = true;
  updateResult();
}

function updateResult() {
  const resultElement = document.getElementById('result');
  resultElement.value = currentInput;
}
