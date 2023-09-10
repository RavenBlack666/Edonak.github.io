
var uniqueId=0;
function megrajzol(){
    let element = document.getElementById('papir')

                //Automata szövegméretezés
                const isOverflownW = ({ clientWidth, scrollWidth }) => scrollWidth > clientWidth

               // const isOverflownH = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight

                const resizeText = ({ element, parent }) => {
                    let i = 12 // let's start with 12px
                    let overflow = false
                    const maxSize = 130 // very huge text size
                
                    while (!overflow && i < maxSize) {
                    element.style.fontSize = `${i}px`
                    overflow = isOverflownW(parent)
                    if (!overflow) i++
                    }
                
                    // revert to last state where no overflow happened:
                    element.style.fontSize = `${i - 3}px`
                }

    if (element == null) {
        var lako=$("#nev").val();
        if (lako==""){
            alert("Nem írtál be nevet")
        }
    else{
        var magassag=$("#magassag").val();
        var szelesseg=$("#szelesseg").val();
        var gomb=Number(szelesseg)+10;
            let kulcstarto="kulcs"+uniqueId;
            let egyedilako ="lako"+uniqueId;
            let nevjegyazonosito="kartya"+uniqueId;
        $(".container").css("height","100%");
        $(".container").append('<div id="papir"></div>');
        $("#papir").append(`<div class="nevjegy-container" id="${nevjegyazonosito}"></div>`);
        $(`#${nevjegyazonosito}`).append(`<div id=${kulcstarto} class="lako-nevjegy"><p class="text" id=${egyedilako}>${lako}</p></div>`);
        $(`#${nevjegyazonosito}`).css("height", `${magassag}mm`);
        $(`#${nevjegyazonosito}`).css("width", `${gomb}mm`);
        $(`#${nevjegyazonosito}`).append(`<div class="trash"></div>`)
        $(`#kulcs${uniqueId}`).css("height", `${magassag}mm`);
        $(`#kulcs${uniqueId}`).css("width", `${szelesseg}mm`);
        
        
        $(".gombok").append(`<div class="gomb" onclick="window.print()"><h4>Nyomtatás</h4></div>`);
        
    //szövegméretezés meghívása
        resizeText({
            element: document.getElementById(`${egyedilako}`),
            parent: document.getElementById(`${kulcstarto}`)
          })
        ++uniqueId
        $("#nev").val("");

        }
    }
    else if (element != null){
        
        var lako=$("#nev").val();
        if (lako==""){
            alert("Nem írtál be nevet")
        }
    else{
        var magassag=$("#magassag").val();
        var szelesseg=$("#szelesseg").val();
        var gomb=Number(szelesseg)+10;;
        let kulcstarto="kulcs"+uniqueId;
        let egyedilako ="lako"+uniqueId
        let nevjegyazonosito="kartya"+uniqueId;
        $("#papir").append(`<div class="nevjegy-container" id="${nevjegyazonosito}"></div>`);
        $(`#${nevjegyazonosito}`).append(`<div id=${kulcstarto} class="lako-nevjegy"><p class="text" id=${egyedilako}>${lako}</p></div>`);
        $(`#${nevjegyazonosito}`).css("height", `${magassag}mm`);
        $(`#${nevjegyazonosito}`).css("width", `${gomb}mm`);
        $(`#${nevjegyazonosito}`).append(`<div class="trash"></div>`)
        $(`#kulcs${uniqueId}`).css("height", `${magassag}mm`);
        $(`#kulcs${uniqueId}`).css("width", `${szelesseg}mm`);
        
    //szövegméretezés meghívása   
        resizeText({
            element: document.getElementById(`${egyedilako}`),
            parent: document.getElementById(`${kulcstarto}`)
          })
    
        ++uniqueId
        $("#nev").val("");
        }
    }
}


$("div").on("click",".trash", function(){
    $(this).parent(".nevjegy-container").remove();
    
});



