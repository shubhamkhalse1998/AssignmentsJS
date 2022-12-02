class Room{
    roomNo;charges;days;
    in=()=>{
        this.roomNo=prompt("Enter Room Number")
        this.days=prompt("Total Days")
        this.charges=prompt("Rent Per Day")
    }
    out=()=>{
        document.write("Room No :: "+this.roomNo+"<br>"+"<br>")
        document.write("Total Days :: "+this.days+"<br>"+"<br>")
        document.write("Rent Per Day :: "+this.charges+"<br>"+"<br>")
        document.write("Total Amount To Be Paid :: "+this.tAmt+"<br>"+"<br>")
    }
    c=()=>{
        this.tAmt=this.days*this.charges
        if(this.tAmt>10000){
            this.tAmt=1.05*this.days*this.charges
        }
    }
}
r1=new Room;
r1.in();
r1.c();
r1.out();