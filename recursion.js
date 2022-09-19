// javascript recursion explain

// function sum(n){
//     if (n == 0) {
//         return 0
//     } 
//     return sum(n-1) + n
// }


// without recursion using math
function sum(n) {
    return (n * (n + 1)) / 2
}

console.log(sum(1000000000000))