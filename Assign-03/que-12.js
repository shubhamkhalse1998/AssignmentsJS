class book{
    bookno;title;cost;n;tcost;
    i=()=>{
        this.bookno=prompt("Enter Book Number")
        this.title=prompt("Enter Title Of Book")
        this.cost=prompt("Enter The Price Of Book")
        this.n=prompt(" NO Of Copies Purchased")
    }
    d=()=>{
        document.write("Book Number :: "+this.bookno+"<br>"+"<br>")
        document.write("Title of Book :: "+this.title+"<br>"+"<br>")
        document.write("Price Of One Book :: "+this.cost+"<br>"+"<br>")
        document.write("No Of Copies Purchsed :: "+this.n+"<br>"+"<br>")
        document.write("Total Amount To Be Paid :: "+this.tcost+"<br>"+"<br>")
    }
    c=()=>{
        this.tcost=(this.n*this.cost)
    }
}
b1=new book;
b1.i();
b1.c();
b1.d();