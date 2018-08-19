//not finished need to fix the blank spaces
decodeMorse = function(morseCode){
    let result= "";
    var rest = morseCode.split(/[\s]/);
    
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
        
    }
   
    
    for(let i=0;i< rest.length;i++){
        if(rest[i] == "" && rest[i+1]== ""){
            rest[i]= " ";
        }
    }

    for (let i = 0; i < rest.length; i++) {
        switch(rest[i]){
            
            case ".-":
            result+= "A";
            break;

            case "-...":
            result+= "B";
            break;

            case "-.-.":
            result+= "C";
            break;

            case "-..":
            result+= "D";
            break;

            case ".":
            result+= "E";
            break;

            case "..-.":
            result+= "F";
            break;

            case "--.":
            result+= "G";
            break;

            case "....":
            result+= "H";
            break;

            case "..":
            result+= "I";
            break;

            case ".---":
            result+= "J";
            break;

            case "-.-":
            result+= "K";
            break;

            case ".-..":
            result+= "L";
            break;

            case "--":
            result+= "M";
            break;

            case "-.":
            result+= "N";
            break;

            case "---":
            result+= "O";
            break;

            case ".--.":
            result+= "P";
            break;

            case "--.-":
            result+= "Q";
            break;

            case ".-.":
            result+= "R";
            break;

            case "...":
            result+= "S";
            break;

            case "-":
            result+= "T";
            break;

            case "..-":
            result+= "U";
            break;

            case "...-":
            result+= "V";
            break;

            case ".--":
            result+= "W";
            break;

            case "-..-":
            result+= "X";
            break;

            case "-.--":
            result+= "Y";
            break;

            case "--..":
            result+= "Z";
            break;

            case "":
            result+= " ";
            break;

            case "...---...":
            result += 'SOS';
            break;
        }
    }
    console.log(result);
    return result;
    
      }
  decodeMorse(".... . -.--   .--- ..- -.. .");