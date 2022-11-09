const utils = require('../js/rectangle')


test('should correctly output rectangle perimeter and area', () =>{
    const outputText = utils.getRectangleInfo(10,10);
    expect(outputText).toBe('The perimeter of a rectangle is 40 and the area is 100');
});

test('should correctly calculate rectangle perimeter', () =>{
    const outputText = utils.getRectanglePerimeter(10,10);
    expect(outputText).toBe(40);
});

test('should correctly calculate rectangle area', () =>{
    const outputText = utils.getRectangleArea(10,10);
    expect(outputText).toBe(100);
});