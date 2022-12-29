var addSpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

function FindChild(element, space, text)
{
    var count = element.childNodes.length;

    // добавление элемента в дерево
    if (element.nodeName == "#text")
    {
        // проверка, чтобы не было пустой строки
        if (element.data.trim().replace("\n") != "") 
        {
            text = text + "<br>" + space + element.data;
        }
    }
    else
    {
        text = text + "<br>" + space + element.nodeName;
    }

    // если дочерних элементов не найдено, то вернуть текст
    // если же найдено, пройтись по всем
    if (count == 0)
    {
        return text;
    }
    else if (count > 0)
    {
        for (var i = 0; i < count; i++)
        {
            text = FindChild(element.childNodes[i], space+addSpace, text);
        }

        return text;
    }
}

function ShowPagesStruct()
{
    var tree = FindChild(document.body, "", "");
    document.getElementById("result").innerHTML += tree;
}