var generateBtn = document.querySelector("#generate");

var specialCharacterschar = ['@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.',];
var numberschar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowerCasechar = ['a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z',]
var upperCasechar = ['A', 'B', 'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z',]


function writePassword() {
    var length = parseInt (prompt("Pick a number between 8 and 128"),10);
if (length < 8 ){
    alert("password lenth must be at least 8 characters");
    return null
}
if ( length > 128){
    alert("password length must be under 128");
    return null
}
  
    var upperCasechar = confirm("Would you like upper case charcters?");
    console.log (upperCasechar)
    
    var lowerCasechar = confirm("Would you like lowercase characters?");
    console.log (lowerCasechar)
    
    var specialCharacterschar = confirm("Would you like special characters?");
    console.log (specialCharacterschar)
    
    var numberschar = confirm("Would you like numbers");
    console.log (numberschar)
    

    var userInputObject = {
        length: length, 
        upperCasechar: upperCasechar,
        lowerCasechar: lowerCasechar,
       specialCharacterschar: specialCharacterschar,
        numberschar: numberschar, 
    }
    console.log (userInputObject)
    return userInputObject
    }


    function random(arr){
        var goose = Math.floor(Math.random()* arr.length) 
        var duck = arr[goose]; 
        return duck
    }
    function generatePassword (){



        var possibleCharacterArray = []
        var secondaryEmptyArray = []
        var boxOfStuff = writePassword()
        console.log ("possibleCharacterArray")
        var result = []
        
        if (boxOfStuff.upperCasechar) {
            console.log ("userselectedUppercsesCharacters")
            possibleCharacterArray = possibleCharacterArray.concat(upperCasechar)
            secondaryEmptyArray.push(random(upperCasechar))
        } 
        if (boxOfStuff.lowerCasechar){
            console.log ("userSelectedLowerCharacters")
            possibleCharacterArray = possibleCharacterArray.concat(lowerCasechar)
            console.log (possibleCharacterArray)
            secondaryEmptyArray.push(random(lowerCasechar))
         }
        if (boxOfStuff.specialCharacterschar) {
            console.log ("UserSelectedSpecialChar")
            possibleCharacterArray = possibleCharacterArray.concat(specialCharacterschar)
            secondaryEmptyArray.push(random(specialCharacterschar))
        }
        if (boxOfStuff.numberschar) {
            console.log ("userSelectedNumbers")
            possibleCharacterArray = possibleCharacterArray.concat(numberschar)
            secondaryEmptyArray.push(random(numberschar))
        }
        
        for(var i=0;i<boxOfStuff.length;i++) {
            var possibleCharacterArray = random(possibleCharacterArray)
            result.push(possibleCharacterArray)
            
        }
        for (let i = 0; i < secondaryEmptyArray.length; i++) {
          result[i]=secondaryEmptyArray[i]

        return result.join('')
        }
    }

        var generateBtn = document.querySelector('#generate');

        function passwordCreate(){
        
        
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        
           passwordText.value = password;
        
        }

        generateBtn.addEventListener("click", passwordCreate); 

// Transform the result into a string and pass into writePassword- look up how to use .join 
// Mix in at least one of each guaranteed character in the result- will need a for loop
// 



// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"


// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);
// // expected output: "012345678"
    


