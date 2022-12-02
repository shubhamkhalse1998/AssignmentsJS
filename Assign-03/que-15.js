class Mobile{
    preR;prvR;cName;call;amt;
    input=()=>{
        this.cName=prompt("Enter Customer Name ")
        this.prvR=prompt("Enter Previous Reading ")
        this.preR=prompt("Enter Current Reading ")
    }
    display=()=>{
        document.write("NAme :: "+this.cName+"<br>"+"<br>")
        document.write("Previous Reading :: "+this.prvR+"<br>"+"<br>")
        document.write("Current Reading :: "+this.preR+"<br>"+"<br>")
        document.write("Total Bill :: "+this.amt+"<br>"+"<br>")
    }
    c=()=>{
        this.cMade=this.prvR-this.preR
        if(this.cMade<=100){
            this.amt="No Charges"
        }
        else if(this.cMade>100 && this.cMade<=200){
            this.amt=((this.cMade-100)*0.90)
        }
        else if(this.cMade>200 && this.cMade<=400){
            this.amt=(Number(100*0.90)+Number(this.cMade-200)*0.80)
        }
        else{
            this.amt=Number(100*0.90)+Number(200*0.80)+Number(this.cMade-300)*0.70
        }
    }
}
m1=new Mobile;
m1.input();
m1.c();
m1.display();