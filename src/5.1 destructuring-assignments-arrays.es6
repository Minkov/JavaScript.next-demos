let [x, y] = [1, 2];
// x gets 1, y gets 2

[x, y] = [y, x]
//swaps the two values


let [first, second] = [1, 2, 3];
//first = 1, second = 2

let [a, b, ...rest] = [1, 2, 3, 4, 5]
//a = 1, b = 2, rest = [3, 4, 5]


let [start, , end] = [1, 2, 3];
//start = 1, end = 3


function minMax(numbers){
    return [Math.min.apply(null, numbers), Math.max.apply(null, numbers)]
}


let [min, max] = minMax([1, 2, 3, 4, -111, 5, 1, 2, 3, 1000, 3, 4])
//min = -111
//max = 100

console.log(min);
console.log(max);