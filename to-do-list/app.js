var girilen,secilen;
var eklenen,btnTamamla,btnSil,sonuc;

function listeyeEkle()
{
    girilen=document.getElementById("txtYapilacaklar").value;

    if(girilen!="")
    {
        eklenen=document.createElement("li");
        document.getElementById("listeYapilacaklar").appendChild(eklenen);
        eklenen.innerHTML=girilen;

        btnTamamla=document.createElement("img");
        eklenen.appendChild(btnTamamla);
        btnTamamla.setAttribute("src","assets/ticmark.png");
        btnTamamla.setAttribute("id","resimTamamla");
        //btnTamamla.setAttribute("onclick","tamamla();");
        btnTamamla.addEventListener("click",tamamla);


        btnSil=document.createElement("img");
        eklenen.appendChild(btnSil);
        btnSil.setAttribute("src","assets/deletecross.png");
        btnSil.setAttribute("id","resimSil");
        //btnSil.setAttribute("onclick","sil();");
        btnSil.addEventListener("click",sil);
        console.log(btnSil);
        


    }
    else alert("Boş bırakalamaz!");
   
}
function sil(){
 secilen=event.currentTarget.parentNode;
 secilen.remove()
 document.getElementById("sonuc").innerHTML="Seçiminiz Silindi"
}
function tamamla(){
    eklenen=document.createElement("li");
    document.getElementById("listeTamamlananlar").appendChild(eklenen);
    secilen=event.currentTarget.parentNode;
    secilen.childNodes[1].style.display="none";
    secilen.childNodes[2].setAttribute("onclick","sil()")
    eklenen.innerHTML=secilen.innerHTML;

    sil();
    document.getElementById("sonuc").innerHTML="seçiminiz tamamlandı"
}