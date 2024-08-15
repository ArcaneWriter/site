function checkFoundryScreenPrerequisite(){
    const w = window.innerWidth;
    const h = window.innerHeight;

    //foundry vtt minimum
    const minimunH = 700; // px
    const minimunW = 1024; // px

    let letPass = true;
    if (h < minimunH) letPass = false;
    if (w < minimunW) letPass = false;

    return letPass
}

function handleLinkClick(event){

    if (!checkFoundryScreenPrerequisite()){
        event.preventDefault();
        alert("Foundry VTT doesn't support screens under 1024px x 700px");
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const link = document.getElementById('link-to-foundry');
    link.addEventListener('click', handleLinkClick);
});