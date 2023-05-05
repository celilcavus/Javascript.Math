const cal = document.getElementById('calculation');

cal.addEventListener('click',()=>{
    const number = parseInt(document.getElementById('sayi1').value);
    const number2 = parseInt(document.getElementById('sayi2').value);
   


    let result = document.getElementById('result');
    result.classList.add("text-center");
    result.classList.add("alert");
    result.classList.add("bg-dark");
    result.classList.add("text-white");
    result.classList.add("w-25");

    let x = Math.min(number,number2);
    if (!isNaN(number) && !isNaN(x)) {
        result.innerText = x;
    }
    else
    {
        result.classList.remove("bg-dark");
        result.classList.add("bg-danger");
        result.innerText = "Lütfen Pozitif Sayilar giriniz.";
    }
});