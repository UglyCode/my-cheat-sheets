//1
function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}

let spy = function(foo){
    let bar = function func(...args) {
        func.calls.push(args);
        return foo.apply(this, args);
    };
    bar.calls = [];
    return bar;
};

work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//2
function f(x) {
    console.log(x);
}

function delay(foo,ms){

    return function(...args) {
        let context = this;
        setTimeout(function () {
            foo.apply(context,args)
        },ms,...arguments);
    };

}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

// f1000("test1000"); // shows "test" after 1000ms
// f1500("test1500"); // shows "test" after 1500ms

//3-4 added last run
// let foo = debounce(console.log, 1000);

function throttle(foo,ms){
    let run = true;
    let lastRunArgs = undefined;
    let context = undefined;

    return function func() {
        if (run){
            run = false;
            setTimeout(()=> {
                run = true;
                if(lastRunArgs){
                    func.apply(context, lastRunArgs);
                    lastRunArgs = undefined;
                    context = undefined;
                }
            }, ms);
            foo.apply(this, arguments);
        } else{
           lastRunArgs = arguments;
        }
    }

}

let ft1000 = throttle(f, 1000);

ft1000(1); // shows 1
ft1000(2); // (throttling, 1000ms not out yet)
ft1000(3); // (throttling, 1000ms not out yet)

// foo(1); // runs immediately
// foo(2); // ignored
//
// setTimeout( () => foo(3), 100); // ignored ( only 100 ms passed )
// setTimeout( () => foo(4), 1100); // runs
// setTimeout( () => foo(5), 1500); // ignored (less than 1000 ms from the last run)


