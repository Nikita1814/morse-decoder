const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morsefiedArr = [];
    let offset = 0
    for (i = 0; i < (expr.length / 10); i ++){
        let letter = expr.slice(offset, offset + 10).replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-')
        offset += 10
        morsefiedArr.push(letter)
    }  
    let deMorsefied = []
    for (i=0; i < morsefiedArr.length; i++ ){
        if(morsefiedArr[i] === '**********'){
        deMorsefied.push(' ')
        }
        deMorsefied.push(MORSE_TABLE[morsefiedArr[i]])
        
    }
    return deMorsefied.join('')
  

    }

module.exports = {
    decode
}


