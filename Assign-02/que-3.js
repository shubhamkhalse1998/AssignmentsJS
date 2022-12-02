class student{
    name;age;avg;m1;m2;m3;max;
    i=()=>{
        this.name=prompt("Enter Your Name")
        this.age=prompt("Enter Your Age")
        this.m1=prompt("Marks In m1")
        this.m2=prompt("Marks In m2")
        this.m3=prompt("Marks In m3")
    }
    d=()=>{
        // _proto_:this.c();
        document.write("Name :: "+this.name+"<br>")
        document.write("Age :: "+this.age+"<br>")
        document.write("M1 :: "+this.m1+"<br>")
        document.write("M2 :: "+this.m2+"<br>")
        document.write("M3 :: "+this.m3+"<br>")
        document.write("MAximum Marks is  :: "+this.max+"<br>")
        document.write("Average is  :: "+this.avg+"<br>")
    }
    c=()=>{
         this.max=Math.max(Math.max(this.m1,this.m2),this.m3);        
         this.avg=(Number(this.m1)+Number(this.m2)+Number(this.m3))/3;
    }
}
let s1= new student;
s1.i()
s1.c()
s1.d()
