let test = [9, 8, 1, 2, 2, 3, 4, 2, 6, 7, 9, 8, 6];

console.log(sortArray(test));

function sortArray(array) {
    let seen = {};
    let out = [];
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        let item = array[i];
         if(!seen[item]) {
               seen[item] = item;
               out[j++] = item;
         }
    }
    return out;
}