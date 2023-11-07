const {sum, average, weighted, trueWord, shoppingList} = require('./functions');

/*Principal function*/
test('Check sum function', () => {
    expect(sum(1,2)).toBe(3)
})


/*Calculation functions*/
test('Check average function', () => {
    expect(average(5,5,5)).toBe(5)
})

test('Check weighted function', () => { 
    expect(weighted(5,4,3,5)).toBe(4.15)
})


/*Text validation functions*/
test('Check trueWord function when "Heartstopper" is in the message', () => {
    const message = 'I love Heartstopper!';
    expect(trueWord(message)).toBe('There is Heartstopper in the message');
});

test('Check trueWord function when "Heartstopper" is NOT in the message', () => {
    const message = 'I enjoy reading other books.';
    expect(trueWord(message)).toBe('Heartstopper is NOT in the message');
});


/*Array function*/
test('Check shoppingList function when "milk" is on the list', () =>{ 
    const myList = ['bread','eggs','butter','milk']
    expect(shoppingList(myList)).toBe('Milk is on the list')
})

test('Check shoppingList function when "milk" is NOT the list', () =>{ 
    const myList = ['bread','eggs','butter']
    expect(shoppingList(myList)).toBe('Milk is NOT on the list')
}) 




