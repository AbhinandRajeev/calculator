//1. To display number

function displayNumber(num){
    result.value += num
}

// AC

function clearText(){
    result.value =""
}

// Back

function lastDigit(){
    result.value = result.value.slice(0,-1)
}

//calculations

function calculation(){
    result.value = eval(result.value)
}