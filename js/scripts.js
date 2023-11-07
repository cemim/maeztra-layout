function scrollCarousel(idElement, elementNumber, orientation){
    var scrollSize = document.getElementById(idElement).scrollWidth/elementNumber;
    var numElement = 1;

    for(let i = 1; i <= elementNumber; i++){        
        if(document.getElementById('destaque-opt-'+i).classList.contains('destaque-opt-checked')){
            numElement = i;
        }
    }   

    if (orientation == "prev"){
        document.getElementById(idElement).scrollLeft -= scrollSize;
        
        if((numElement - 1) > 0){
            document.getElementById('destaque-opt-'+numElement).classList.remove('destaque-opt-checked');
            document.getElementById('destaque-opt-'+ (numElement - 1)).classList.add('destaque-opt-checked');
        }        

    } else if(orientation == "next"){
        document.getElementById(idElement).scrollLeft += scrollSize;

        if((numElement + 1) <= elementNumber){
            document.getElementById('destaque-opt-'+numElement).classList.remove('destaque-opt-checked');
            document.getElementById('destaque-opt-'+(numElement + 1)).classList.add('destaque-opt-checked');
        }
    }
}

function scrollCarouselMult(idElement, elementNumber, orientation){
    var scrollSize = document.getElementById(idElement).scrollWidth/elementNumber;  

    if (orientation == "prev"){
        document.getElementById(idElement).scrollLeft -= scrollSize;
    } else if(orientation == "next"){
        document.getElementById(idElement).scrollLeft += scrollSize;
    }
}

function alterarBar(x) {
    x.classList.toggle("change");

    if(x.classList.contains('change')){
        document.getElementById('header-menu-principal-mob').style.marginLeft = "0px";
    } else {
        document.getElementById('header-menu-principal-mob').style.marginLeft = "-300px";
    }
}

function showInfo(eName){

    for(let i=1;i<=3;i++){
        let temp = document.getElementsByClassName('li-sub-'+i);
        for(let j=0; j<temp.length;j++){
            temp[j].style.visibility = "hidden";
            temp[j].style.height = "0px";
            temp[j].style.marginTop = "0px";
        }
    }


    var element = document.getElementsByClassName(eName);
    
    for(let i=0; i<element.length;i++){
        element[i].style.visibility = "visible";
        element[i].style.height = "auto";
        element[i].style.marginTop = "25px";
    }

}