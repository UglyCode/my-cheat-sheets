var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

expect = 'begin';
rl.on('line', function(line) {
    if (expect === 'begin') {
        num_test_cases = parseInt(line);
        expect = 'wall_length';
        case_counter = 0;
    } else if (expect === 'wall_length') {
        wall_length = parseInt(line);
        expect = 'wall_representation';
    } else if (expect === 'wall_representation') {
        wall_representation = line.split('');
        expect = 'wall_length';
        windowSize = Math.ceil(wall_length/2);
        tests = wall_length-windowSize+1;
        maxBeauty =0;
        for (i = 0; i < tests; i++){
            maxBeauty = Math.max(maxBeauty, wall_representation.slice(i, i+windowSize).reduce((acc, elem)=>{
                return acc += Number(elem);
            },0));
        }
        console.log('Case #' + (++case_counter) + ': ' + maxBeauty);
        case_counter === num_test_cases ? rl.close() : 0;

    }
}).on('close',function(){
    process.exit(0);
});
