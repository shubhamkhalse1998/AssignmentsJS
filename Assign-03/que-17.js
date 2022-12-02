class Parking{
    name;vno;hours;bill;
    i=()=>{
        this.name=prompt("Enter Your Name")
        this.vno=prompt("Enter Vehicle Number")
        this.hours=prompt("Parked Hours")
    }
    d=()=>{
        document.write("Name :: "+this.name+"<br>"+"<br>")
        document.write("Vehicle Number :: "+this.vno+"<br>"+"<br>")
        document.write("Total Hours Parked :: "+this.hours+"<br>"+"<br>")
        document.write("Bill To Be Paid :: "+this.bill+"<br>"+"<br>")
    }
    c=()=>{
        if(this.hours<=1){
            this.bill=3*this.hours
        }
        else{
            this.bill=Number(3)+Number(this.hours-1)*1.50
        }
    }
}
p1=new Parking;
p1.i();
p1.c();
p1.d();