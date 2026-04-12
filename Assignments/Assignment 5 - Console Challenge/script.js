// A helpful message to let you know the file loaded properly
console.log("Calculator is ready! Try typing: calculator.add(5, 5)");

// The calculator object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return "Error: Cannot divide by zero!";
        }
        return a / b;
    }
};