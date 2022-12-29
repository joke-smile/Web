function GetRandom(min, max) 
{
    return Math.trunc(Math.random() * (max - min) + min);
}

function Average(array)
{
    var sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum / array.length;
}

function GetRandomArray(size)
{
    var arr = new Array(size);
    for (let i = 0; i < size; i++)
    {
        arr[i] = GetRandom(1, 100);
        document.getElementById(i).textContent = arr[i];
    }
    document.getElementById(5).textContent = Average(arr);
}

function ChangeImage(image)
{
    var k = document.getElementById('imag');
    k.src=image;
}

function Show(id, method)
{
    document.getElementById(id).style.display = method;
}

function ShowElement(flag)
{
    let task = "task";
    for (let i = 1; i < 5; i++)
    {
        task += String(i);
        document.getElementById(task).style.display = "none";
        document.getElementById('lab3_table').style.display = "none";
        document.getElementById('TimeBeforeNewYear').style.display = "none";
        document.getElementById('item' + i).style.color = "goldenrod";
        if (task == flag)
        {
            document.getElementById(task).style.display = "block";
            document.getElementById('item' + i).style.color = "white";
        }
        task = "task";
    }
}

