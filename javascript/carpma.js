var cal = document.getElementById('calculation');

cal.addEventListener('click',()=>{
   try {
    let number1 = parseInt(document.getElementById("sayi1").value);
    var number2 = parseInt(document.getElementById("sayi2").value);

    var total = number1 * number2;
    var result = document.getElementById("result");
    result.classList.add("text-center");
    result.classList.add("alert");
    result.classList.add("bg-dark");
    result.classList.add("text-white");
    result.classList.add("w-25");
    
    result.innerText = total;
    if (isNaN(total)) {
      result.classList.remove("bg-dark");
      result.classList.add("bg-danger");
      result.innerText = "Lütfen sayisal değerler giriniz.";
    }
   } catch (error) {
        result.classList.remove("bg-dark");
        result.classList.add("bg-danger");
        result.innerText = "Lütfen sayisal değerler giriniz.";
   }

   
})