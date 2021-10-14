
const cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats.length);

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    let newArray = ([...cats, name]);
    return newArray
}
function prependCat(name) {
    let newArray = ([name, ...cats]);
    return newArray;
}
const bac = ['Milo', 'Otis', 'Garfield'];
function removeLastCat() {
   let dar =  bac.slice(0, bac.length - 1);
    return dar 
}
const abc = ['Milo', 'Otis', 'Garfield'];
function removeFirstCat() {
   let ddd =  abc.slice(1);
    return ddd 
}