var readline = require('readline');
var params = {
    cases: NaN,
    min: NaN,
    max: NaN,
    guesses: NaN,
    currValue: NaN
};

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    if (isNaN(params.cases)) {
        params.cases = Number(input);
        return;
    } //first step

    if (isNaN(params.min)){
        var arrMinMax = input.split(' ');
        params.min = Number(arrMinMax[0]);
        params.max = Number(arrMinMax[1]);
        return;
    } //second step

    if (isNaN(params.guesses)){
        params.guesses = Number(input);
        makeGuess();
        return;
    } //third step

    // evaluate the judge
    switch (input) {
        case 'TOO_SMALL':
            params.min = params.currValue;
            makeGuess();
            break;
        case 'TOO_BIG':
            params.max = params.currValue;
            makeGuess();
            break;
        case 'CORRECT':
            prepareToNextCase();
            if (params.cases > 0) break;
        default:
            exit();
    }
});

function makeGuess() {
    if (!params.guesses) exit();

    params.currValue = Math.ceil((params.max - params.min)/2 + params.min);
    console.log(params.currValue);
    // rl.setPrompt(""+params.currValue);
    // rl.prompt();
    params.guesses -= 1;
}

function prepareToNextCase() {
    params.cases -= 1;
    params.min = NaN;
    params.max = NaN;
    params.guesses = NaN;
    params.currValue = NaN;
}

function exit() {
    rl.close();
    process.exit(0);
}