function bitto(){
  
  const firstNumber = prompt(" please give me the first number..");
  
  const secondNumber = prompt(" yeah give me the first number..");
  var operator = prompt(" please choose an operator.. \n'*' for multiplication,\n '-' for substraction,\n'+' for addition,\n'/' for division..");
  
  var first = parseInt(firstNumber);
  var last = parseInt(secondNumber);
  
  
  
  switch (operator) {
    case "+":
      var result = first + last;
      alert("your result is "+result+" .");
      break;
    case "-":
      
      var result = first - last;
      alert("your result is " + result + " .");
      
      
      break;
      
      case "*":
      var result = first * last;
      alert("your result is " + result + " .");
      break;
      
      case "/":
      var result = first / last;
      alert("your result is " + result + " .");
      break;
    default:
    alert(" please give me a valid operator..I can't calculate with your personal operator.. sorry");
  }
  
  
  
  
  
  
  
  
  

  
  }