
const dropdown = document.getElementById("colorSelect");

function remove(){
    // dropdown.innerHTML = "";
    for(let i=0; i<dropdown.clientHeight; i++){
        if(dropdown.value === dropdown[i].value){
            dropdown[i].remove();
            break;
        }
    }
}