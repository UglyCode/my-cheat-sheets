var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var expect = 'begin';
var num_test_cases = 0;
var case_count = 0;
var N = 0;
var P = 0;

rl.on('line', function(line) {
    if (expect === 'begin') {
        num_test_cases = parseInt(line);
        case_count = 1;
        expect = 'initValues';
    } else if (expect === 'initValues') {
        var values = line.split(' ');
        N = parseInt(values[0]);
        P = parseInt(values[1]);
        expect = 'skils';
    } else if (expect === 'skils') {

        var inputValues = line.split(' ');
        var skillsMap = new Map();
        var skillsArr = new Array();
        var elem = 0;
        var skillsCount = 0;

        for (i=0;i<inputValues.length;i++){

            elem = parseInt(inputValues[i]);
            skillsArr.push(elem);

            if (skillsMap.has(elem)) {
                skillsCount = skillsMap.get(elem)+1;
                if (skillsCount === P) {
                    console.log('Case #' + case_count + ': 0');
                    (case_count === num_test_cases) ? rl.close() : case_count++;
                    expect = 'initValues';
                    return;
                } else{
                    skillsMap.set(elem, skillsCount);
                }
            } else{
                skillsMap.set(elem, 1);
            }
        }

        console.log('Case #' + case_count + ': ' + getMinimumHours(skillsArr, N, P));
        (case_count === num_test_cases) ? rl.close() : case_count++;
        expect = 'initValues';
    }
}).on('close',function(){
    process.exit(0);
});

function getMinimumHours(skillsArr, N, P) {
    var minH = null;
    var indexArr = null;
    var teamArr = null;

    if (N === P) {
        return countHours(skillsArr);
    } else if (P===1){
        return 0;
    } else {
        while (indexArr=getNextCombination(indexArr, N, P)){
            teamArr = indexArr.map(function (elem) {
               return skillsArr[elem];
            });
            minH = minH ? Math.min(minH, countHours(teamArr)) : countHours(teamArr);
        }
        return minH;
    }

}

function getNextCombination(combination, N, P) {

    if (combination){
        for (var i = P - 1; i >= 0; i--) {
            if (combination[i] < N - P + i) {
                combination[i]+=1;
                for (j = i + 1; j < P ; j++){
                    combination[j] = combination[j-1] + 1;
                }
                return combination;
            }
        }
        return null;
    } else {
        combination = new Array(P);
        for (i = 0; i < P; i++){
            combination[i] = i;
        }
        return combination;
    }
}

function countHours(team) {
    team.sort(function (a,b) {
        return b-a;
    });

    var maxSkill = team[0];
    return team.reduce(function (acc, elem) {
        return acc += maxSkill-elem;
    }, 0)
}