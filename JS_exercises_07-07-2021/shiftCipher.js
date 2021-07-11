
const alphaNum  = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
'V', 'W', 'X', 'Y', 'Z'];

function shiftCipher(str, key, encript=true){

    let res = '';
    let temp = str.toUpperCase().split('');
    for(let letter of temp){
        //console.log(letter);
        if (encript) {
            var Y = (alphaNum.indexOf(letter) + key) % 26;
        }
        else{
            var Y = (alphaNum.indexOf(letter) - key) < 0 ? 26 + (alphaNum.indexOf(letter) - key) : (alphaNum.indexOf(letter) - key) % 26;
        }
        
        if (letter != ' '){res += alphaNum[Y];}
        else{res += ' ';}
        //console.log(Y);
        
    }
    return res;
}

console.log("Encoding: ", shiftCipher("ITS SHIFT CIPHER",9));

//console.log("Decoding: ", shiftCipher("RCB BQROC LRYQNA",9,false));
