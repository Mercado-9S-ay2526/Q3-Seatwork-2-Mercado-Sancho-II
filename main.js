function seeDiscount(){
  let budget = document.getElementById("budget").value;
  let discountedvalue = budget * .2;

document.getElementById("discountResult").innerHTML  = `
 <div class="container" id="discount">
        <div class="container p-5 mt-5 bg-dark text-light text-center rounded"> <p>Super Awesome Brands:<p>
        <button type="button" class="btn btn-outline-warning btn-sm">ACER</button>
        <button type="button" class="btn btn-outline-warning btn-sm">ASUS</button>
        <button type="button" class="btn btn-outline-warning btn-sm">Razer</button>
        <button type="button" class="btn btn-outline-warning btn-sm">Lenovo</button>
        <button type="button" class="btn btn-success" onclick="seeDiscount()">See discount</button>
        <p>Eligible Discount<p><span id=discountedvalue></span><p>
    </div>

`;
document.getElementById("discountedvalue").innerHTML = discountedvalue;
}
