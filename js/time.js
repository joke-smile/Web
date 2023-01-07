var time = new Date().getTime();
var k = document.getElementById('time');

function Timer()
{
    day=new Date().getTime()
    clock_f=(Math.trunc((day-time) / 1000))
    document.form2.k_clock.value=clock_f
    id=setTimeout("Timer()",100)
}

function GetTime()
{
    var date = new Date();
    var date2 = new Date(2023, 0, 1, 0, 0, 0, 0);
    let count = 0;
    while(date < date2)
    {
        date.setHours(date.getHours() + 1);
        count++;
    }
    document.getElementById('TimeBeforeNewYear').textContent = "До нового года осталось часов: " + (count-1);
}



