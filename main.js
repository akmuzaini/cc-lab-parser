let validInput = 'abc$'
let invalidInput = 'c'
console.log(`parsing the input "${validInput}"`);
parse(validInput)
console.log('----------');
console.log(`parsing the input "${invalidInput}"`);
parse(invalidInput)

function parse(input){
    return parseTprime(input)
}

function parseTprime(input){
    console.log(`T': ${input}`);
    let next = input[0]
    if(next == 'a' || next == 'b' || next == '$'){
        console.log(`T' => T`);
        parseT(input)
        match('$',"T'")
    }else{
        reportError()
    }
}
function parseT(input){
    console.log(`T: ${input}`);
    let next = input[0]
    if (next == 'a'){
        console.log(`T => aTc`);
        match('a','T')
        parseT(input.substring(1))
        match('c','T')
    }else if (next == 'b' || next == 'c' || next == '$'){
        console.log(`T => R`);
        parseR(input)
    }else{
        reportError()
    }
}
function parseR(input){
    console.log(`R: ${input}`);
    let next = input[0]
    if (next == 'b') {
        console.log(`R => bR`);
        match('b','R')
        parseR(input.substring(1))
    }else if (next == 'c' || next == '$') {
        console.log(`R => ε`);
        console.log('R: empty string');
    } else {
        reportError()
    }
}
function match(input,nt){
    console.log(`${nt}: matched: ${input}`);
}
function reportError(){
    console.log('error');
}