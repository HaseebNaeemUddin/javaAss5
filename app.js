// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chapter21>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Q1
// var allLower = userInput.toLowerCase();

// Q2
// var x= "hello"
// x = x.toLowerCase();

// Q3
// var y = "Pakistan";
// y = y.toUpperCase();

// Q4

// var x = "Multan";
// var y= x.toLowerCase();

// Q5

// var word = ["Pakistan"];
// var input = word.tolowercase();

// Q6

// var input = "Karachi"
// input = input.toLocaleUpperCase();
// alert(input);

// Q7

// var checkWord = "karachi";
// var firstchar = checkWord.slice(0,1);
// var remainingChar = checkWord.slice(1);
// var firstchar = firstchar.toUpperCase();
// var remainingChar = remainingChar.toLowerCase();
// var fullWord = firstchar + remainingChar;
// alert(fullWord);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>chapter22-25>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q1

// var sameWords = "captain";
// var output = sameWords.slice(4,6);
// alert(output);

// Q2

// var word = "Pakistan";
// var count = word.length;
// alert(count);

// Q3

// var animal = "elephant";
// var seg = animal.slice(2,6)
// alert(seg);

// Q4

// var char = "Web and app development";
// var count = char.length;
// alert(count);

// Q5

// var word = "Australia";
// var count = word.length;
// var newWord = word.slice(1,6);
// alert(newWord);

// Q6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// The value of be in 3:

// Q7

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// alert(indx);
// The value of indx is 16:

// Q8

// var text = "hey! how are you? lets Go";
// var lastIndxOfGo = text.indexOf("Go");
// var indx = lastIndxOfGo;
// alert(indx);

// Q9

// var indexNum
// if(var indexNum >=0 && indexNum < yourString.lengt){
// } 

// Q10
 
// var Word = "abcde"
// var output = Word.charAt(2);
// alert(output);

// Q11

// var Text = "javascripts";
// var cha = Text.charAt(10);
// alert(cha);

// Q12

// var str = "pakistan"
// var x = str.charAt(str.length -1);
// alert(x);

// Q13

// var input = "spectecular";
// var cha = input.charAt(4);
// alert(cha);

// Q14
// if(myString.length >=3 && mystring.chartAT(2) === "Desired character");

// Q15

// var inputString = "Hello World";
// var charArray = [];
// for(var i=0; i < inputString.length; i++){
//     charArray.push(inputString.charAt(i));
// // }
// alert(charArray);

// Q16
//  var str = "I am 1 and only in this cruel world ";
//  var newStr = str.replace("1","one");
//  alert(newStr);

// Q17

// var y = x.replace(/a/g, "z");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chapter 26>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Q1
// var num = 10.4;
// var roundNumber = Math.round(num);
// alert(roundNumber);

// Q2

// var origNum = 10.6;
// var roundNum = Math.round(origNum);
// alert(roundNum);

// Q3

// var origNum = 10.4;
// var roundNum = Math.round(origNum);
// alert(roundNum);

// Q4

// var num = 11.8;
// var numRound = Math.round(num);

// Q5

// var num = 0.5;
// var output = Math.floor(num);
// alert(output);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chapter27>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q1

// var roundNumber = Math.floor(Math.random() * 50) + 1;

// Q2

// var num = Math.random();

// Q3

// var dice = Math.floor(Math.random()*6) +1;

// Q4

// var roundNumber = Math.random();
// var result = roundNumber < 0.5? "Head" : "Tail" ;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chapter 28-29>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q1
// var str = "42";

// Q2
// var str = "123";

// Q3
// var str = "3.142";
// var floatValue = parseFloat(str);

// Q4

// function isStringConvertibleToNumber(str) {
//     var intResult = parseInt(str, 10);
//     var floatResult = parseFloat(str);
  
//     if (!isNaN(intResult) && !isNaN(floatResult)) {
//       return true;
//     }
//     return false;
//   }  
//   console.log(isStringConvertibleToNumber("42"));        // true (can be converted to int and float)
//   console.log(isStringConvertibleToNumber("3.14159"));   // true (can be converted to int and float)
//   console.log(isStringConvertibleToNumber("Hello"));      // false (cannot be converted to int or float)
//   console.log(isStringConvertibleToNumber("12abc34"));    // false (cannot be converted to int or float)
  

// Q5

// var num = 10;
// var Output = num.toString();

// Q6

// var num = 42;
// var Output = num.toString();


// Q7

// var str = "3.14";
// var result = parseInt(str);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>chapter 30<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Q1

// var num = 10.452689;
// var output = num.toFixed(4);
// var newNum = num.toString();

// Q2

// var yourNumber = 3.14159265359;
// yourNumber = Number(yourNumber.toFixed(2));

// Q3
// if (num.toFixed(2).toString().length > 4) {
//   }
  
// Q4
// var originalNumber = 123.456789; 
// var roundedString = originalNumber.toFixed(2);
// alert(roundedString);

