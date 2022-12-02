class Bike{
    bNo;
    name;
    phoneNo;
    days;
    charge;
    input(){
        this.name=prompt("Enter YOur Name")
        this.phoneNo=prompt("Enter YOur Phone Number ")
        this.bNo=prompt("Enter Bike NO")
        this.days=prompt("Enter Days Of Rent")
    }
    display(){
        document.write("Name :: "+this.name+"<br>")
        document.write("Mobile NO :: "+this.phoneNo+"<br>")
        document.write("Bike No :: "+this.bNo+"<br>")
        document.write("NO Of Days :: "+this.days+"<br>")
        document.write("Charge Is  :: "+this.charge+"<br>")
    }
    c=()=>{
        if(this.days<=5){
            this.charge=(this.days*500)
        }
        else if(this.days<=10){
            this.charge=5*500+(this.days-5)*400
        }
        else{
            this.charge=5*500+5*400+(this.days-10)*200
        }
    }
}
let b1=new Bike;
b1.input()
b1.c()
b1.display()