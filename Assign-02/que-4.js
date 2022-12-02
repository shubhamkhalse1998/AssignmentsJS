class Employee{
    pan;
    name;
    income;
    input(){
        this.name=prompt("Enter Your Name")
        this.pan=prompt("Enter Your Pan Number")
        this.income=prompt("Enter Your Annual income")
    }
    display(){
        document.write("Name :: "+this.name+"<br>")
        document.write("Pan :: "+this.pan+"<br>")
        document.write("Income :: "+this.income+"<br>")
        document.write("Tax is  :: "+this.tax+"<br>")
    }
    c=()=>{
        if(this.income<=100000){
            this.tax="No Tax Applied"
        }
        else if(this.income>100000 && this.income<=150000){
            let discount=((10/100)*(this.income-100000))
            this.tax=discount
        }
        else if(this.income>150000 && this.income<=250000){
            let discount=((20/100)*(this.income-150000)+5000)
            this.tax=discount
        }
        else{
            let discount=((30/100)*(this.income-250000)+25000)
            this.tax=discount
        }
    }
}
let E1=new Employee;
E1.input()
E1.c()
E1.display()