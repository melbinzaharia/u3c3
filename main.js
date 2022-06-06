let productArray = JSON.parse(localStorage.getItem("user")) || [];

function myUser(name,email,address,amount) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.amount = amount;
};

function storeUser() {
    event.preventDefault();
    let form = document.getElementById("userin");

    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    

    let p1 = new myUser(name,email,address,amount);
    console.log(p1);

    productArray.push(p1);
    console.log(productArray);
    localStorage.setItem("user",JSON.stringify(productArray));

    form.name.value = "";
    form.email.value = "";
    form.address.value = "";
    form.amount.value = "";
}