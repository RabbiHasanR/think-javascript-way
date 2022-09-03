// javascript higher order function

// higher order function amon akta function jeta onno function ar upor kaj kore.jete hote pare onno function k perameter hisebe niye ba return kore

// higher order function example:
 function hello () {
    return function () {
        console.log('Hello')
    }
 }

 hello()()


 // example 1 with out higher order function

 var numbers = [1,2,3,4]
 var results = []

 for(let i = 0; i<numbers.length; i++){
    results.push(numbers[i] * 2)
 }

 console.log(results)

 // example 1 with higher order function

 var nums = [1,2,3,4]
 var result = nums.map(num => num * 2)
 console.log(result)


 // example 2

 var players = [
    {
        name: 'Sakib',
        avg: 40.89
    },
    {
        name: 'Tamim',
        avg: 45.89
    },
    {
        name: 'Liton',
        avg: 50.89
    },
    {
        name: 'Mushfiq',
        avg: 30.89
    }
 ]

 // without higherorder function example

 var playerwithavgthrityseven = []

 for(let i = 0; i < players.length; i++) {
    if (players[i].avg >= 37) {
        playerwithavgthrityseven.push(players[i])
    } 
 }

 console.log(playerwithavgthrityseven)

 // with higherorder function

 var result = players.filter(player => player.avg >= 37)
 console.log(result)


 // example 3

 // custom higher order function method

 var languages = ['Java', 'Javascript', 'Python', 'PHP', 'Go', 'c']

 function mapRabbi(arr, fn) {
    let newArray = []

    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }

    return newArray
 }

 const myArray = mapRabbi(languages, function (language) {
    return language.length;
 });

 console.log(myArray)