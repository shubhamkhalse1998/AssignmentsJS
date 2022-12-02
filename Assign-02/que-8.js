class bill{
    name;cno;unit;
    i=()=>{
        this.name=prompt("Enter Your Name")
        this.cno=prompt("Enter Consumer Number")
        this.unit=prompt("Units Consumed")
    }
    d=()=>{
        document.write("Name :: "+this.name+"<br>"+"<br>")
        document.write("Consumer NO :: "+this.cno+"<br>"+"<br>")
        document.write("Units Consumed :: "+this.unit+"<br>"+"<br>")
        document.write("Bill Amount TO Be Paid :: "+this.amt+"<br>"+"<br>")
    }
    c=()=>{
        if(this.unit<=100){
            this.amt=(this.unit*1.20)
        }
        else if(this.unit>100 && this.unit<=200){
            this.amt=(this.unit*2.20)
        }
        else if(this.unit>200 && this.unit<=300){
            this.amt=(this.unit*3.20)
        }
        else{
            this.amt=(this.unit*4)
        }
    }
}
let c1=new bill;
c1.i();
c1.c();
c1.d();