function marks(){
    let marks=document.getElementById("marks").value
    if(marks<=100 && marks>=90){
        document.write(" Grade A ")
    }
    else if(marks<90 && marks>=70){
        document.write(" Grade B ")
    }
    else if(marks<70 && marks>=50){
        document.write(" Grade C ")
    }
    else{
        document.write(" Grade D ")
    }
}
