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
    let symbol_count = expr.length/10;
    let decoded_str = '';

    function fromNumToMorse(symbol){
        let symbol_str = symbol + '';
        let symbol_count = symbol_str.length/2;
        let code_morse = '';
        console.log('symbol_str '+symbol_str);
    
        for (let i = 0; i < symbol_count; i += 1){
            let symbol_length = 2;
            let begin = i * symbol_length;
            let end = (i+1)*symbol_length;
            let symbol = symbol_str.slice(begin, end); //[begin, end)
    
            if(symbol === '10') code_morse += '.';
            else code_morse += '-'
        }
        return code_morse;
    }

    for (let i = 0; i < symbol_count; i += 1){
        let symbol_length = 10;
        let begin = i * symbol_length;
        let end = (i+1)*symbol_length;
        let symbol_str = expr.slice(begin, end);

        let symbol_number = 0;

        if(symbol_str === '**********') {
            decoded_str += ' ';
        } else {
            symbol_number = Number(symbol_str);
            let morse_code = fromNumToMorse(symbol_number);
            console.log('morse_code ' + morse_code);
            let decoded_symbol = MORSE_TABLE[morse_code];
            decoded_str += decoded_symbol;
            }
    }
    return decoded_str;
}

module.exports = {
    decode
}
