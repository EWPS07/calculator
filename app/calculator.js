var calculator = new Object();

calculator.timesSymbol = '\u00D7';
calculator.timesValue = '*';
calculator.divideSymbol = '\u00F7';
calculator.divideValue = '/';
calculator.plusSymbol = '+';
calculator.plusValue = '+';
calculator.minusSymbol = '\u2212';
calculator.minusValue = '-';
calculator.equalsSymbol = ' = ';
calculator.sqrRootSymbol = '\u221A' + '(';
calculator.powerSymbol = '^';
calculator.numSquaredSymbol = '\u00B2';
calculator.factorialSymbol = '!';
calculator.piSymbol = '\u03C0';
calculator.piValue = '3.141592653589793';
calculator.decimalSymbol = '.';
calculator.oneSymbol = '1';
calculator.twoSymbol = '2';
calculator.threeSymbol = '3';
calculator.fourSymbol = '4';
calculator.fiveSymbol = '5';
calculator.sixSymbol = '6';
calculator.sevenSymbol = '7';
calculator.eightSymbol = '8';
calculator.nineSymbol = '9';
calculator.zeroSymbol = '0';

// Mathematical calculations function-------------------------------
calculator.doMath = function(str) {
  console.log(str);
  str = eval(str);
  return str;
}

// Factorialize number function-------------------------------------
calculator.factorial = function(num) {
    var result = 1;
    for (var f = 1; f < num + 1; f++) {
      result *= f;
    }
    return result;
  }
  // Convert Decimal function ----------------------------------------
  // calculator.convertDecimal = function(num) {
  //   var convRate = '1';
  //   var decPlaces;
  //   num = num.toString();
  //   console.log(num);
  //   decPlaces = num.slice(num.indexOf('.')+1).length;
  //   console.log(decPlaces);
  //   for(var r=1;r<decPlaces+1;r++) {
  //    convRate+='0';
  //   }
  //   return convRate;
  // }
  //---------------- Calculator Operations ---------------------------
$(document).ready(function() {
  var problemString = '';
  var problem = undefined;
  var powered;
  var forBack;
  var backString;
  var currentNum;

  // Multiplication-------------------------------------------------
  $('#timesBtn').click(function() {
    problemString += calculator.timesSymbol;

    if (problem !== undefined) {
      problem += calculator.timesValue;
    } else {
      problem = calculator.timesValue;
    }
    $('#problem').text(problemString);
  })

  // Division-------------------------------------------------------
  $('#divideBtn').click(function() {
    problemString += calculator.divideSymbol;

    if (problem !== undefined) {
      problem += calculator.divideValue;
    } else {
      problem = calculator.divideValue;
    }
    $('#problem').text(problemString);
  })

  // Addition-------------------------------------------------------
  $('#plusBtn').click(function() {
    problemString += calculator.plusSymbol;

    if (problem !== undefined) {
      problem += calculator.plusValue;
    } else {
      problem = calculator.plusValue;
    }
    $('#problem').text(problemString);
  })

  // Subtraction----------------------------------------------------
  $('#minusBtn').click(function() {
    problemString += calculator.minusSymbol;

    if (problem !== undefined) {
      problem += calculator.minusValue;
    } else {
      problem = calculator.minusValue;
    }
    $('#problem').text(problemString);
  })

  // SquareRoot-----------------------------------------------------
  $('#sqrRootBtn').click(function() {

    if (problem === undefined) {
      problemString = 'Invalid';
      $('#problem').text(problemString);
      problemString = '';
    } else {
      forBack = problem;
      backString = problemString;
      problemString = calculator.sqrRootSymbol + problem + ')';
      $('#problem').text(problemString);
      problem = eval(problem);
      problem = Math.sqrt(problem);
    }
  })

  // NumberOne------------------------------------------------------
  $('#oneBtn').click(function() {
    problemString += calculator.oneSymbol;

    if (problem !== undefined) {
      problem += calculator.oneSymbol;
    } else {
      problem = calculator.oneSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberTwo------------------------------------------------------
  $('#twoBtn').click(function() {
    problemString += calculator.twoSymbol;

    if (problem !== undefined) {
      problem += calculator.twoSymbol;
    } else {
      problem = calculator.twoSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberThree----------------------------------------------------
  $('#threeBtn').click(function() {
    problemString += calculator.threeSymbol;

    if (problem !== undefined) {
      problem += calculator.threeSymbol;
    } else {
      problem = calculator.threeSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberFour-----------------------------------------------------
  $('#fourBtn').click(function() {
    problemString += calculator.fourSymbol;

    if (problem !== undefined) {
      problem += calculator.fourSymbol;
    } else {
      problem = calculator.fourSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberFive-----------------------------------------------------
  $('#fiveBtn').click(function() {
    problemString += calculator.fiveSymbol;

    if (problem !== undefined) {
      problem += calculator.fiveSymbol;
    } else {
      problem = calculator.fiveSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberSix------------------------------------------------------
  $('#sixBtn').click(function() {
    problemString += calculator.sixSymbol;

    if (problem !== undefined) {
      problem += calculator.sixSymbol;
    } else {
      problem = calculator.sixSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberSeven----------------------------------------------------
  $('#sevenBtn').click(function() {
    problemString += calculator.sevenSymbol;

    if (problem !== undefined) {
      problem += calculator.sevenSymbol;
    } else {
      problem = calculator.sevenSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberEight----------------------------------------------------
  $('#eightBtn').click(function() {
    problemString += calculator.eightSymbol;

    if (problem !== undefined) {
      problem += calculator.eightSymbol;
    } else {
      problem = calculator.eightSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberNine-----------------------------------------------------
  $('#nineBtn').click(function() {
    problemString += calculator.nineSymbol;

    if (problem !== undefined) {
      problem += calculator.nineSymbol;
    } else {
      problem = calculator.nineSymbol;
    }
    $('#problem').text(problemString);
  })

  // NumberZero-----------------------------------------------------
  $('#zeroBtn').click(function() {
    problemString += calculator.zeroSymbol;

    if (problem !== undefined) {
      problem += calculator.zeroSymbol;
    } else {
      problem = calculator.zeroSymbol;
    }
    $('#problem').text(problemString);
  })

  // Decimal--------------------------------------------------------
  $('#decimalBtn').click(function() {
    if (problemString.charAt(problemString.length - 1) !== calculator.decimalSymbol) {
      if (problem === undefined) {
        problem = '0' + calculator.decimalSymbol;
        problemString = '0' + calculator.decimalSymbol;
      } else {
        problem += calculator.decimalSymbol;
        problemString += calculator.decimalSymbol;
      }
    }
    $('#problem').text(problemString);
  })

  // PARENTHESIS----------------------------------------------------
  $('#parenthesisBtn').click(function() {

    //paren count
    function parenCount(str) {
      var leftParen = 0;
      var rightParen = 0;
      for (var p = 0; p < str.length; p++) {
        if (str[p] === '(') {
          leftParen += 1;
        }
        if (str[p] === ')') {
          rightParen += 1;
        }
      }
      if (rightParen === leftParen) {
        return true;
      } else {
        return false;
      }
    }
    if (problem === undefined) {
      problemString = '(';
      problem = '(';
      $('#problem').text(problemString);
    } else {
      if (parenCount(problem) === true) {
        problemString = problem + '(';
        problem += '(';
      } else if (parenCount(problem) === false) {
        problemString += ')';
        problem += ')';
      }
      $('#problem').text(problemString);
    }

  })

  // NumSquared-----------------------------------------------------
  $('#numSquaredBtn').click(function() {

    if (problem === undefined) {
      problemString = 'Invalid';
      $('#problem').text(problemString);
      problemString = '';
    } else {
      forBack = problem;
      backString = problemString;
      problemString = '(' + problem + ')' + calculator.numSquaredSymbol;

      problem = '(' + problem + ')(' + problem + ')';
      $('#problem').text(problemString);

    }
    return problem;
  })

  //POWER ----------------------------------------------------------

  $('#powerBtn').click(function() {
    if (problem === undefined) {
      problemString = 'Invalid';
      $('#problem').text(problemString);
      problemString = '';
    } else {
      var base;
      var exponent;
      forBack = problem;
      backString = problemString;
      base = problem;
      problem = undefined;
      problemString = '(' + base + ')' + calculator.powerSymbol;
      $('#problem').text(problemString);
      $('.notEq').click(function() {
        exponent = problem;
        base = calculator.doMath(base);
        exponent = calculator.doMath(exponent);
        powered = Math.pow(base, exponent);
        base = undefined;
        exponent = undefined;
      })
    }
    powered = powered;
  })

  // Factorial------------------------------------------------------
  $('#factorialBtn').click(function() {
    var oldProblem = problem;
    if (problem === undefined) {
      problemString = 'Invalid';
      $('#problem').text(problemString);
      problemString = '';
    } else {
      forBack = problem;
      backString = problemString;
      if (typeof(problem) === 'string') {
        problem = problem;
      } else if (typeof(problem) === 'number') {
        problem = problem.toString();
      }
      if (problem.split('').includes('.') || problem.split('')[0] === '-') {
        var oldString = problemString;
        problemString = "Sorry, factorializing decimal and negative numbers includes implementing a gamma function, which I haven't wrapped my head around yet....coming soon!";
        $('#problem').text(problemString);
        problemString = oldString;
        problem = oldProblem;
        oldProblem = undefined;
        oldString = undefined;
      } else {
        problemString = calculator.factorialSymbol + problem;
        problem = problem.toString();
        problem = calculator.doMath(problem);
        problem = calculator.factorial(problem);
        $('#problem').text(problemString);
      }
    }
  })

  // Pi-------------------------------------------------------------
  $('#piBtn').click(function() {
    forBack = problem;
    backString = problemString;
    problemString += calculator.piSymbol;
    if (problem !== undefined) {
      problem += calculator.piValue;
    } else {
      problem = calculator.piValue;
    }
    $('#problem').text(problemString);
  })

  // Back-----------------------------------------------------------
  $('#backBtn').click(function() {
    if (forBack !== undefined) {
      problem = forBack;
      problemString = backString;
      forBack = undefined;
      backString = undefined;
      $('#problem').text(problemString);
    } else {
      problemString = problemString.split('');
      problem = problem.split('');
      problemString.pop();
      problem.pop();
      problemString = problemString.join('');
      problem = problem.join('');
      $('#problem').text(problemString);
    }
  })

  // EQUALS---------------------------------------------------------
  $('#equalsBtn').click(function() {
    function fixMult(prob) {
      prob = prob.split('');
      for (var m = 0; m < prob.length - 1; m++) {
        if ((prob[m] === ')' && prob[m + 1] === '(') || (prob[m] === ')' && Number(prob[m + 1]) >= 0) || (prob[m] === ')' && Number(prob[m + 1]) <= 0) || (Number(prob[m]) <= 0 && prob[m + 1] === '(') || (Number(prob[m]) >= 0 && prob[m + 1] === '(')) {
          prob.splice([m + 1], 0, '*');
        } else {
          prob = prob;
        }
      }
      prob = prob.join('');
      return prob;
    }
    if (typeof(problem) === 'number') {
      problem = problem;
    } else if (powered) {
      if (problemString.split('').includes('^')) {
        problem = powered;
        powered = undefined;
      } else {
        problem = problem;
        powered = undefined;

      }
    } else {
      problem = problem;
      problem = fixMult(problem);
    }
    base = undefined;
    exponent = undefined;
    problemString += calculator.equalsSymbol;
    $('#problem').text(problemString);
    console.log(problem);
    // if(problem.split('').includes('.')) {}
    //console.log(workingProblem);
    problem = calculator.doMath(problem);
    $('#history').text(problemString + problem);
    problemString = '';
    $('#problem').text(problem);
  });

  // CLEAR----------------------------------------------------------
  $('#clearBtn').click(function() {
    problemString = '';
    problem = undefined;
    $('#problem').text(problemString);
    $('#history').text(problemString);
  })
})