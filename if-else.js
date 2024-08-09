var result = prompt("Enter your marks: ");
var resultInt = Number(result)

if (resultInt >= 80) {
    document.write("Distinction");
}

else if (resultInt >= 70) {
    document.write("First Division");
}

else if (resultInt >= 50) {
    document.write("Second Division");
}
else {
    document.write("Fail");
}