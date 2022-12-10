function s() {
    let N = document.getElementById("num1").value
    let A = document.getElementById("num2").value
    let Amt = document.getElementById("num3").value
    let choice = document.getElementById("num4").value
    let L = "Laptop";
    let D = "Desktop";
    if (choice == "L" || choice == "l") {
        if (Amt <= 2500) {
            let discount = (0 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + L + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (0%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
        else if (Amt > 25000 && Amt <= 57000) {
            let discount = (5 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + L + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (5%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
        else if (Amt > 57000 && Amt <= 100000) {
            let discount = (7.5 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + L + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (7.5%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
        else {
            let discount = (10 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + L + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (10%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
    }
    else if (choice == "D" || choice == "d") {
        if (Amt <= 2500) {
            let discount = (5 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + D + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (5%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
        else if (Amt > 25000 && Amt <= 57000) {
            let discount = (7.5 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + D + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (7.5%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
        else if (Amt > 57000 && Amt <= 100000) {
            let discount = (10 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + D + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (10%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
        else {
            let discount = (15 / 100) * Amt
            let pa = Amt - discount
            document.write("Name :: " + N + "<br>" + "Address is :: " + A + "<br>" + "Your Selected Product is :: " + D + "<br>" + "Entered Amount is :: " + Amt + "<br>" + "Discount Applied (15%) :: Rs-" + discount + "<br>" + "Your Payble Amount is :: Rs - " + pa)
        }
    }
}
