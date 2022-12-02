class fuel{
    flightno;destination;fuel;distance;
    i=()=>{
        this.flightno=prompt("Enter Flight Number")
        this.destination=prompt("Enter Destination")
        this.distance=prompt("Enter Distance")
    }
    d=()=>{
        document.write("Flight Number :: "+this.flightno+"<br>"+"<br>")
        document.write("Destination :: "+this.destination+"<br>"+"<br>")
        document.write("Total Distance :: "+this.distance+"<br>"+"<br>")
        document.write("Fuel Required :: "+this.fuel+"<br>"+"<br>")
    }
    c=()=>{
        if(this.distance<=1000){
            this.fuel="500 Litres"
        }
        else if(this.distance>1000 && this.distance<=2000){
            this.fuel="1100 Litres"
        }
        else{
            this.fuel="2200 Litres"
        }
    }
}
f1=new fuel;
f1.i();
f1.c();
f1.d();