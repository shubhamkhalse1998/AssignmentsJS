class bank{
    name;acno;type;bal;widraw;
    i=()=>{
        this.name=prompt("Enter Your Name")
        this.acno=prompt("Enter Account NO")
        this.type=prompt("Enter Account Type")
        this.bal=prompt("Balance")
        this.widraw=prompt("Ammount To Widraw")
    }
    d=()=>{
        document.write("Name :: "+this.name+"<br>"+"<br>")
        document.write("Account NO :: "+this.acno+"<br>"+"<br>")
        document.write("Account Type :: "+this.type+"<br>"+"<br>")
        document.write("Balance :: "+this.bal+"<br>"+"<br>")
        document.write("Widraw  :: "+this.widraw+"<br>"+"<br>")
        document.write("Remaining Balance is :: "+this.rbal+"<br>"+"<br>")
    }
    c=()=>{
        this.rbal=(this.bal-this.widraw);
    }
}
let c1=new bank;
c1.i();
c1.c();
c1.d();