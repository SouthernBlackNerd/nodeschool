//console.log("HELLO ES6");

//let name = process.argv[2];
//console.log(`Hello, ${name}!
//Your name lowercased is "${name.toLowerCase()}".`);

//var inputs = process.argv.slice(2);
//var results = inputs.map( x => x.charAt(0))
//                    .reduce( (x, y) => x + y);
//console.log(`[${inputs}] becomes "${results}"`);

//var foot = {
//    kick: function () {
//        this.yelp = "Ouch!";
//        setImmediate(() => console.log(this.yelp));
//    }
//};
//foot.kick();

//let userArray = process.argv.slice(2);
//let result = {};
//[, result.username, result.email] = userArray;
//console.log(result);

let args = process.argv.slice(2);
let min = Math.min(...args);
console.log(`The minimum of [${args}] is ${min}`);
