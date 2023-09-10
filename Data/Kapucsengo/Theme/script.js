var lakasok=13;
var uniqueID=1;

function osszeir(){
    var betumeret=$("#betumeret").val()
    $(".kiir").append(`<div id="papir"></div>`);
    var tablazat=$("template").contents().clone();
    $("#papir").append(tablazat)
    for (var i=0; i<lakasok; i++){
        var lakok=$(`#${uniqueID}-lakas`).val();
        $("#tablazat").append(`<tr><td class="szamsor" style="font-size:${betumeret}px">${uniqueID}.</td><td id=${uniqueID}-lako class="nevek" style="font-size:${betumeret}px">${lakok}</td></tr>`);

        ++uniqueID
    }
    $(".keret").append(`<div class="szerelo"></div>`);
    $(".szerelo").append("<h5>Mokány Ferenc</h5>");
    $(".szerelo").append(`<p class="szerelo-elvalaszto">villany és kapuszerelő mester</p>`);
    $(".szerelo").append("<p>6600 Szentes, Klauzál u. 1.</p>");
    $(".szerelo").append("<p>Tel.: 06-63/315-601</p>");
    $(".szerelo").append("<p>Mobil: 06-20/3781-646</p>");
    $(".szerelo").append("<p>-kaputelefon szerelés</p>");
    $(".szerelo").append("<p>- elektromos ajtózárszerelés</p>");
    $(".szerelo").append("<p>- ajtóbehúzó szerelés</p>");

    uniqueID=1;
    $(".container").append(`<div class="nyomtatasos"></div>`);
    $(".nyomtatasos").append(`<button onclick="window.print()" id="print">Nyomtatás</button>`);
    }
$("#osszeir").click(osszeir);

function remove(){
    $("#papir").remove();
    $(".nyomtatasos").remove();
};

$("#remove").click(remove);
