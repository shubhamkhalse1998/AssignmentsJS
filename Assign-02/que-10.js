class library{
    bookno;title;author;days;
    i=()=>{
        this.bookno=prompt("Enter Book Number")
        this.title=prompt("Enter Title Of book")
        this.author=prompt("Author Of Book")
        this.days=prompt("Enter No of Days")
    }
    d=()=>{
        document.write("Book No :: "+this.bookno+"<br>"+"<br>")
        document.write("Title :: "+this.title+"<br>"+"<br>")
        document.write("Author Name :: "+this.author+"<br>"+"<br>")
        document.write("Book No :: "+this.bookno+"<br>"+"<br>")
        document.write("No Of Days Taken :: "+this.days+"<br>"+"<br>")
        document.write("Late Fees Applied :: Rs - "+this.latef+"<br>"+"<br>")
    }
    c=()=>{
        if(this.days>3){
            this.latef=((this.days-3)*2)
        }
        else{
            this.latef="Enter No Of Days Again"
        }
    }
}
b1=new library;
b1.i();
b1.c();
b1.d();