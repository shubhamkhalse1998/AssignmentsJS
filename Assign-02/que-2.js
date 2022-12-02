class salary{
    name;
    address;
    subspe;
    mSal;
    it;
    phone;
    input(){
        this.name=prompt("Enter your Name")
        this.address=prompt("Enter Yoyr Address")
        this.subspe=prompt("Enter Subject specialization")
        this.mSal=prompt("Enter Monthly Salary")
        this.phone=prompt("Enter Your Phone Number ")
    }
    display(){
        document.write("Name :: "+this.name+"<br>")
        document.write("Address :: "+this.address+"<br>")
        document.write("Subject Specialization  :: "+this.subspe+"<br>")
        document.write("Monthly Salary :: "+this.mSal+"<br>")
        document.write("Phone :: "+this.phone+"<br>")
    }
    calc(){
        let aSal;
        aSal=12*this.mSal;
        if(aSal>175000){
            this.it=(5/100)*(aSal-175000)
            document.write("Annual Tax Is :: "+this.it+"<br>")
        }
        else{
            this.it=0
            document.write("Annual Tax Is :: "+this.it+"<br>")
        }
    }
}
let s1=new salary;
s1.input()
s1.display()
s1.calc()
let s2=new salary;
s2.input()
s2.display()
s2.calc()
