class bill{
    name;unit;amt;
    i=()=>{
        this.name=prompt("Enter Consumer Name")
        this.unit=prompt("Unit Consumed")
    }
    d=()=>{
        document.write("NAme :: "+this.name+"<br>"+"<br>")
        document.write("Units Consumed :: "+this.unit+"<br>"+"<br>")
        document.write("Bill To BE PAid :: "+this.amt+"<br>"+"<br>")
    }
    c=()=>{
        if(this.unit<=100){
            this.amt=2*100
        }
        else if(this.unit>100 && this.unit<=200){
            this.amt=Number(2*100)+Number((this.unit-100)*3)
        }
        else{
            this.amt=Number(2*100)+Number(3*100)+Number((this.unit-200)*5)
        }
    }
}
b1=new bill;
b1.i();
b1.c();
b1.d();