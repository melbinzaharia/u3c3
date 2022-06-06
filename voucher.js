


let voucherData=JSON.parse(localStorage.getItem("purchase"))  ||[];
                                                                   
async function vouchers(){
  
  let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";
  let res=await fetch(url);
  let data= await res.json();
  console.log(data[0].vouchers);
  print(data[0].vouchers);
}

function print(data){
    data.forEach((elem) => {
        let div=document.createElement("div");
        div.setAttribute("class", "voucher");
        let n=document.createElement("h2");
        n.innerText=elem.name;
        let i=document.createElement("img");
        i.src=elem.image;
        let p=document.createElement("h2");
        p.innertext=elem.price;

    let button = document.createElement('button');
    button.innerText = "buy";
    button.setAttribute("class", "buy_voucher");
    button.addEventListener("click", function () {
      buyVouch(elem);
     
    });
div.append(n,i,p,button);
document.getElementById("voucher_list").append(div);
});
}
function buyVouch(el){
    voucherData.push(el)

    let wallet=document.getElementById("wallet_balance");
    let price=el.price;
 if(wallet.innerText>price){
     alert("Hurray! purchase successful");
     wallet=(+wallet.innertext)-(+el.price);
     document.getElementById("wallet_balance").innerText=wallet;
     localStorage.setItem("balance",(wallet));
 }else{
    alert("sorry! insufficient balance");
 }
 localStorage.setItem("purchase",JSON.stringify(voucherData))
}

