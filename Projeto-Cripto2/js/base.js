function codar() {
    let msgnova = document.getElementById('msg').value
    let c = btoa(msgnova)
    DM.innerText = `${c}`
    
};
function descodar() {
    let des = document.getElementById('msg').value
    let d = atob(des)
    DM.innerText = `${d}`
    
};
