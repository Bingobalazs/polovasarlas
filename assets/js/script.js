function Szinvalt(){
    var szin=document.getElementById("szinvalaszto").value
    var kep = document.getElementById("kep")
    const szinek = ["zold", "kek", "narancs", "piros"];
    if(szin<=3){
    kep.src="./assets/images/polo-"+szinek[szin]+".png"
    console.log(kep.src);
    }else
    if(szin==4){
        console.log("szurke");
        
        kep.style="filter: grayscale(100%);"
    }
    
}