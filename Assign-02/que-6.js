class student{
    name;hindi;english;math;science;avg;grade;total;
    input(){
        this.name=prompt("Enter Your Name")
        this.hindi=prompt("Enter Marks Of Hindi")
        this.english=prompt("Enter MArks of English")
        this.math=prompt("Enter MArks of Math")
        this.science=prompt("Enter MArks of Science")
    }
    display(){
        document.write("NAme ::"+this.name+"<br>")
        document.write("MArks OF Hindi ::"+this.hindi+"<br>")
        document.write("MArks OF English ::"+this.english+"<br>")
        document.write("MArks OF Math ::"+this.math+"<br>")
        document.write("MArks OF Science ::"+this.science+"<br>")
        document.write("Your Total is ::"+this.total+"<br>")
        document.write("Average ::"+this.avg+"<br>")
        document.write("Your Grade is ::"+this.grade+"<br>")
    }
    c=()=>{
        this.avg=(Number(this.english)+Number(this.hindi)+Number(this.science)+Number(this.math))/4
        this.total=Number(this.english)+Number(this.hindi)+Number(this.science)+Number(this.math)
        if(this.total>=90){
            this.grade="A++"
        }
        else if(this.total<90 && this.total>=75){
            this.grade="A"
        }
    }
}
let s1=new student;
s1.input()
s1.c()
s1.display()
