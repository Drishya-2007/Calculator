const display = document.getElementById("display");

// ADD VALUE TO DISPLAY
function appendValue(value){
  display.value += value;
}

// CLEAR DISPLAY
function clearDisplay(){
  display.value = "";
}

// DELETE LAST CHARACTER
function deleteLast(){
  display.value = display.value.slice(0, -1);
}

// CALCULATE RESULT
function calculateResult(){
  try{
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}