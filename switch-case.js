var marks = prompt("Enter your marks: ")
var marksInt = Number(marks);

switch(marksInt){

    case marksInt>=80:
        document.write("Distinction");
        break;
     
     case marksInt >=70:
        document.write("First Division");
        break;
        
        case marksInt >= 50:
            document.write("Second Division");
            break;

            case marksInt >= 30:
                document.write("Judt Pass");
                break;

                default: 
                document.write("Fail");
                break;
}
