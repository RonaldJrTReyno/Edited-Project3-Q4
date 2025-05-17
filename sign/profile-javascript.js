var disp_fn = document.getElementById("disp_fn");
var disp_ln = document.getElementById("disp_ln");

var disp_gn = document.getElementById("disp_gn");

var disp_em = document.getElementById("disp_em");
var disp_re = document.getElementById("disp_re");

function docload(){
    disp_fn.innerHTML += " " + window.localStorage.getItem("ls_fn");
    disp_ln.innerHTML += " " + window.localStorage.getItem("ls_ln");
    
    disp_gn.innerHTML += " " + window.localStorage.getItem("ls_gn");
    
    disp_em.innerHTML += " " + window.localStorage.getItem("ls_em");
    disp_re.innerHTML += " " + window.localStorage.getItem("ls_re");
}