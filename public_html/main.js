$(document).ready(function () {

    var did = 'Bla';

    //$('#search').val('Test');
    //$('form [name="q"]').val('Test');
    //$('form [name="q"]').val('Test');

    //var t = $('.main-title').first();
    //var text = t.text() + 'Super!';
    //t += "Super!\"Этот мир не так уж плох, покуда в нем есть кофе.\"";

    //t.text(text);

    //var str = 'Text1';


    //var str2 = 'Test ' + str + ' uuuuu';

    var str3 = '10';
//    str3 = parseInt(str3); // Привести текст к числу
//    str3 += 1;



    $('form [type="submit"]').click(function (e) {
        e.preventDefault();

        var text = $('[name="q"]').val();

        if (text.length === 0) {
            //alert("Введиите текст");
            getJson();
            return;
        } else if (text.length <= 4) {
            alert("Введиите > 4");
            return;
        }
        $('.main-title').first().text(text);

        // alert("Handler for .click() called.");

    });


    //$('.title').text('Test');
    //$(".title").html("<span style='color:red'>Test</span>");
    $('.title').text('Test').css("color", "green");
});

function getJson() {
    $.ajax({
        url: "http://karinka.img2txt.com/test.php",
        dataType: 'json'
    }).done(function (data) {
        console.log(data);
        $('.title').text(data.name)
        //$(this).addClass("done");
    }).fail(function (data) {
        alert("error " + data.statusText);
    });
}