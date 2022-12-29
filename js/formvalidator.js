var count = 0;
var formSize = 6;
function CheckFIO(elem, btn)
{
    let reg = /^[a-zа-яё]+$/i;
    let value = reg.test(elem.value);
    if (!value) 
    {
        alert("Вводить можно только буквы");
        elem.value = "";
    }
    else 
    {
        alert("Успешно");
        document.getElementById(btn).style.display = "none";
        elem.disabled = 1;
        count++;
        CheckFilling();
    }
}

function CheckPhone(elem, btn)
{
    let result = "";
    let reg = /^\d+$/;
    let value = reg.test(elem.value);
    if (elem.value.length == 11 && value == true)
    {
        result += "Успешно\n";
        document.getElementById(btn).style.display = "none";
        elem.disabled = 1;
        count++;
        CheckFilling();
    }
    else if (elem.value.length != 11)
    {
        result += "Цифр должно быть 11\n";
        elem.value = "";
    }
    if (!value)
    {
        result += "Вводить можно только цифры\n";
        elem.value = "";
    }
    alert(result);
}

function CheckDate(elem, btn)
{
    let date = Date.now();
    let date2 = Date.parse(elem.value);
    let reg = /(\d+).(\d+).(\d+)/;
    let value = reg.test(elem.value);
    if (!value)
    {
        alert("Неправильный формат даты");
        elem.value = "";
    }
    else if (date2 > date)
    {
        alert("Дата превышает текущую");
        elem.value = "";
    }
    else
    {
        alert("Успешно");
        elem.disabled = 1;
        document.getElementById(btn).style.display = "none";
        count++;
        CheckFilling();
    }
}

function CheckEmail(elem, btn)
{
    let reg = /^.+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    let value = reg.test(elem.value);
    if (!value)
    {
        alert("Неправильный формат");
        elem.value = "";
    }
    else
    {
        alert("Успешно");
        elem.disabled = 1;
        document.getElementById(btn).style.display = "none";
        count++;
        CheckFilling();
    }
}

function CheckFilling()
{
    if (count == formSize)
    {
        alert("Форма заполнена");
    }
}