

let doOperations = true;
let results = []; // store valid results

document.write("<h1>Simple Calculator</h1>");
//create main table
document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (doOperations) {//user inputs
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter operator(+, -, *, /, %):");
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result;

    if(isNaN(num1) || isNaN(num2)) {
        result = "Invalid input";
    }
    else{
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            case "%":
                result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operator";
        }
    }
    document.write("<tr><td>" + num1 + "</td><td>" + operator + "</td><td>" + num2 + "</td><td>" + result + "</td></tr>");

    if (typeof result === "number" && !isNaN(result)) {
        results.push(result);
    }//ask user to continue or not
    doOperations = confirm("Keep Going?");
}
document.write("</table>");

if(results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((sum, num) => sum + num, 0);
    let avg = total / results.length;
//display summary table
    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}

    document.write("<a href=\"index.html\">Go back to index</a>");//link to go back
