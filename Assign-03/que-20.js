class train{
    name;mno;coach;
    i=()=>{
        this.name=prompt("Enter Name")
        this.mno=prompt("Enter Mobile Number")
        this.coach=prompt("Enter Coach Name You Want To Travel 1) 1st AC 2) 2nd AC 3) 3rd AC 4) Sleeper")

    }
    d=()=>{
        document.write("Name :: "+this.name+"<br>"+"<br>")
        document.write("Mobile Number :: "+this.mno+"<br>"+"<br>")
        document.write("Coach You Selected :: "+this.coach+"<br>"+"<br>")
        document.write("Ticket Rate  :: "+this.rate+"<br>"+"<br>")
    }
    c=()=>{
        if(this.coach=="1st Ac" || this.coach=="1st AC"){
            this.rate=700
        }
        else if(this.coach=="2nd Ac" || this.coach=="2nd AC"){
            this.rate=500
        }
        else if(this.coach=="3rd Ac" || this.coach=="3rd AC"){
            this.rate=250
        }
        else if (this.coach=="sleeper" || this.coach=="Sleeper"){
            this.rate="100"
        }
    }
}
t1=new train;
t1.i();
t1.c();
t1.d();