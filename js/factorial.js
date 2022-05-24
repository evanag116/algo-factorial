// exports.factorial = function(num) {
//     let res = 1
//     for(let i = num; i > 1; i--) {
//         res *= i
//     }
//     return res
// };
function factorial(num) {
    let res = 1
    for(let i = num; i > 1; i--) {
        res *= i
    }
    return res
};

console.log(factorial(45))