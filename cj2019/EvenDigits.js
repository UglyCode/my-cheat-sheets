var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var expect = 'begin';
var num_test_cases = 0;
var case_count = 0;

rl.on('line', function(line) {
    if (expect === 'begin') {
        num_test_cases = parseInt(line);
        case_count = 1;
        expect = 'newInput';
    } else if (expect === 'newInput') {
        console.log(getResult(line, case_count));
        (case_count === num_test_cases) ? rl.close() : case_count++;
}
}).on('close',function(){
    process.exit(0);
});

function getResult(inputStr, case_count) {
    var digits = inputStr.split('');

    var maxDigit = digits.length;
    for (i = 0; i < digits.length; i++) {
        if (digits[i]%2){
            var presses = calcButtonPresses(inputStr.slice(i), maxDigit-i, ((digits[i] == 9) && (i > 0)));
            return 'Case #' + case_count + ': ' + presses;
        }
    }

    return 'Case #' + case_count + ': 0';
}

function calcButtonPresses(strNumber, digit, nineCase) {

    if (parseInt(strNumber) < 10){
        return 1;
    } else {
        var number = (parseInt(strNumber.slice(1)));
    }

    var boundary = Number(new Array(digit).join('4'));

    if (nineCase || number < boundary){
        return (Math.pow(10, digit-1) + number - Number(new Array(digit).join('8')));
    } else {
        return Math.pow(10, digit-1) - number;
    }

}