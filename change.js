function change(){
    var name = prompt("What is your name: ");
    var age = prompt("Enter Your Age: ");
    var clg = prompt("Enter Your college name: ");
    document.getElementById("name").innerHTML += " "+name;
    document.getElementById("age").innerHTML += " "+age;
    document.getElementById("clg").innerHTML += " "+clg;
}