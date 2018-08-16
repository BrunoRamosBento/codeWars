function solution(number){

    function reverse(str){
        let reversed = "";    
        for (var i = str.length - 1; i >= 0; i--){        
          reversed += str[i];
        }    
        return reversed;
      }
    var result = "";
    var numbers2 = number.toString();
    var numbers= reverse(numbers2);
    function numb(numbe,one,four,five,six,seven,eigth, nine){
        console.log(numbe,one,four,five,six,seven,eigth, nine);
        console.log(numbe);
            switch(numbe){
                case 0:
                  break;
                case 3:
                    result+=one;
                case 2:
                    result+=one;
                case 1:
                console.log("trow here");
                    result+=one;
                    break;
                case 4:
                    result+=four;
                    break;
                case 5:
                console.log("trow here");
                    result+=five;
                    break;
                case 6:
                    result+=six;
                    break;
                case 7:
                    result+=seven;
                    break;
                case 8:
                    result+=eigth;
                    break;
                case 9:
                    result+=nine;
                    break;
                default:
                break;
            }
            console.log(" .  " + result);
        }

//for (var i = numbers.length-1; i >= 0; i--) {
  
  //  console.log("i i" +i +"number "+ numbers[i]);
  //falta meter aqui os numeros nos locais corretos em baixo
    console.log(numbers[0]);
    console.log(numbers[1]);

    switch(numbers.length){
        case 4:
            numb(parseInt(numbers[3]),"M","MV","V","VM","VMM","VMMM","Mx");
        case 3:
            numb(parseInt(numbers[2]),"C","CD","D","DC","DCC","DCCC","CM");
        case 2:
            numb(parseInt(numbers[1]),"X","XL","L","LX","LXX","LXXX","XC");
        case 1:
            numb(parseInt(numbers[0]),"I","IV","V","VI","VII","VIII","IX");
        break;
    }

console.log(result);
return result;
}
solution(15);

