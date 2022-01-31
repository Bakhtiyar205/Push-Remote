let myArray = new Array(1,2,3,4,5,9);

////////////////////////Push
function pushMethod(object) {
    myArray.length++;
    myArray[myArray.length-1]=object;
}
pushMethod({student: 'Hello',
private:'no'});

console.log(myArray);


////////////////////////Find
// function findMethod(object) {
//     for (let i = 0; i < myArray.length; i++) {
//         if(object === myArray[i]) {
//             return (object);
//         }
//     }
// }

// console.log(findMethod(2));
