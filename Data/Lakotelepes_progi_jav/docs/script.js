
//---------------------------Dátumbabráló---------------------

var date = $('#year').text();
date=parseFloat(date);


function hozzaad()
    {
        var dateGrow = ++date;
        $('#year').text(dateGrow);

    }
$('#kovetkezoEv').click(hozzaad);



$('#elozoEv').click( function()
    {
        var dateReduce = --date;

    
        if (dateReduce>=2024)
        {
        $('#elozoEv').removeAttr("disabled");
        $('#year').text(dateReduce);        
        }

        else
        {
        $('#elozoEv').attr("disabled");
        }
    }
);

$(":reset")
{
console.log("reset");
}


const honapok = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

//------------------------------------Összeíró-------------------------------
function osszeir()
{    
var uniqueID=1;
var szamlalo=1;
const lakok=[];
var datebox = $(`#year`);
var uniqueDate=datebox.text();

const alapido= new Date(2022,11,18);


const b = new Date(2022,11,18);

var hanySzor = ((uniqueDate-2023)+1);
var hanySzor55 = (hanySzor*55);
var ismetles = (hanySzor*5)
console.log(hanySzor55);
console.log(uniqueDate);
    $(".oldal").append(`<div id="papir">`);
    $("#papir").append(`<h2>Takarítási sorrend</h2>`);
    $("#papir").append('<table>');
    $("table").append(`<tr> <th>Lakás</th>  <th>Lakó</th>  <th>Időpont</th> </tr>`);
            

    
    for (let a=0; a<ismetles; a++)
    {
    
    for (let i=0; i<13; i++)
        {   
        if (szamlalo<=hanySzor55)
            {
            if (uniqueID<=13)
                {  
                     var lakas=$(`#${uniqueID}`); 
                     var lakasok = lakas.val();
                     lakok.push(lakasok);     
                }
                    if (alapido.getFullYear() == uniqueDate)
                    {
                    b.setDate(alapido.getDate()+1);
                    alapido.setDate(alapido.getDate()+7);
                    var mont2 =honapok[alapido.getMonth()];
                    var mont1 =honapok[b.getMonth()];
					
					console.log(`${i+1}. ${mont1}:`, b.getMonth(), b.getDate());
					console.log(`${i+1}. ${mont2}:`, alapido.getMonth(), alapido.getDate());
       
                    $("table").append(`<tr><td>${i+1}. lakás</td><td> <strong>${lakok[i]}</strong></td> <td>${b.getFullYear()}. <strong>${mont1} ${b.getDate()}.  - </strong> ${alapido.getFullYear()}. <strong>${mont2} ${alapido.getDate()}.</strong></td> </tr>`);
                    ++uniqueID;
                    ++szamlalo;
					// b VÁLTOZÓ NAPI ÉRTÉKÉT IS MEG KELL VÁLTOZTATNI, KÜLÖNBEN BIZONYOS ESETEKBEN UGRANI FOG EGY HÓNAPOT
					// MINT PL.: MOST IS, UGYANIS FEBRUÁR 30-A NEM LÉTEZIK, EZÉRT SKIPPELT EGYBŐL MÁRCIUSRA, UGYANIS b NAPI ÉRTÉKE 30 VOLT ÉS TE MEGVÁLTOZTATTAD A HAVI ÉRTÉKÉT FEBRUÁRRA
					b.setDate(alapido.getDate());
                    b.setMonth(alapido.getMonth());
                    b.setYear(alapido.getFullYear());
                     }            
                    else 
                    {
                    b.setDate(alapido.getDate()+1);
                    alapido.setDate(alapido.getDate()+7);
                    ++uniqueID;
                    ++szamlalo;
                    b.setMonth(alapido.getMonth());
                    b.setYear(alapido.getFullYear());
                    }
            }    
        }
    }
}



$("#lista").click(osszeir);