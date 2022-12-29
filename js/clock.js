function Clock_form()
{
    day=new Date()
    clock_f=day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()
    document.form.f_clock.value=clock_f
    id=setTimeout("Clock_form()",100)
}

