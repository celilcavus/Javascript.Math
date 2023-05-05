const cal = document.getElementById('calculation');

cal.addEventListener('click',()=>{
    const number = parseInt(document.getElementById('sayi1').value);


    let result = document.getElementById('result');
    result.classList.add("text-center");
    result.classList.add("alert");
    result.classList.add("bg-dark");
    result.classList.add("text-white");
    result.classList.add("w-25");

    
    if (!isNaN(number)) {
        result.innerText = Math.abs(number);
    }
    else
    {
        result.classList.remove("bg-dark");
        result.classList.add("bg-danger");
        result.innerText = "Lütfen sayisal değer giriniz.";
    }
});