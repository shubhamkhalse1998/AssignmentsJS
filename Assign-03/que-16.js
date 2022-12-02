class Movie{
    mName;year;rating;
    i=()=>{
        this.mName=prompt("Enter Movie Name")
        this.year=prompt("Year Of Release")
        this.rating=prompt("Give Rating")
    }
    d=()=>{
        document.write("Movie NAme :: "+this.mName+"<br>"+"<br>")
        document.write("Year OF Release :: "+this.year+"<br>"+"<br>")
        document.write("Ratings :: "+this.rating+"<br>"+"<br>")
        document.write("Result :: "+this.hit+"<br>"+"<br>")
    }
    c=()=>{
        if(this.rating>0.0 && this.rating<=2.0){
            this.hit="Flop"
        }
        else if(this.rating>=2.1 && this.rating<=3.4){
            this.hit="Semi-Hit"
        }
        else if(this.rating>=3.5 && this.rating<=4.5){
            this.hit="Hit"
        }
        else{
            this.hit="Super-Hit"
        }
    }
}
m1=new Movie;
m1.i();
m1.c();
m1.d();