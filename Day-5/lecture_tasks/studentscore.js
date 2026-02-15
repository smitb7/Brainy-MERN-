//  check student's sccore 


let studentscore = 60;    // try with diff numbers that you can see 

if(studentscore >= 90){
    console.log("A Grade");   
}
else if (studentscore >= 80 && studentscore <= 89) {        // in that we can take like studentscore >= 70 , studentscore >= 80
    console.log("B Grade");                                 // but for safety we are taking likee this ... if the values behave in desc order then this is safe .
    
}
else if (studentscore >= 70 && studentscore <= 79) {
    console.log("C Grade");
}
else if (studentscore < 70){
    console.log("F grade");
    
}
