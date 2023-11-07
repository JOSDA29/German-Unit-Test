/*Principal function*/
function sum(a,b) {
    return a+b;
}

/*Calculation functions*/
function average(a, b, c) {
    return (a + b + c) / 3;
}

function weighted(a, b, c, d) {
    a = a * 0.15;
    b = b * 0.25;
    c = c * 0.30;
    d = d * 0.30;
    return a + b + c + d;
}

/*Text validation functions*/
function trueWord(msg) {
    if (msg.includes("Heartstopper")) {
        return 'There is Heartstopper in the message';
    } else {
        return 'Heartstopper is NOT in the message';
    }
}

function shoppingList(array) {
    if (array.includes('milk')) {
        return 'Milk is on the list';
    } else {
        return 'Milk is NOT on the list';
    }
}

module.exports = {sum, average, weighted, trueWord, shoppingList};