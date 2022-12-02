class book{
    bName;price;discount;tamt;
    i=()=>{
        this.bName=prompt("Enter Book Name")
        this.price=prompt("Enter Book Price")
    }
    d=()=>{
        document.write("Book NAme :: "+this.bName+"<br>"+"<br>")
        document.write("Book Price :: "+this.price+"<br>"+"<br>")
        document.write("Discount Applied :: "+this.dis+"<br>"+"<br>")
        document.write("Discounted Price :: "+this.tamt+"<br>"+"<br>")
    }
    c=()=>{
        if(this.price<=1000){
        this.dis="2%"    
        this.discount=2
        }
        else if(this.price>1000 && this.price<=3000){
            this.dis="10%"
            this.discount=10
        }
        else{
            this.dis="15%"
            this.discount=15
        }
        this.dis1=(this.discount/100)*this.price
        this.tamt=(Number(this.dis1)+Number(this.price))
    }
}
b1=new book;
b1.i();
b1.c();
b1.d();