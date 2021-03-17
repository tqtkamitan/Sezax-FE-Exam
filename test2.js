let test = [1, 2, 2, 3, 4, 6, 7, 8, 6];

console.log(uniq(test));

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}