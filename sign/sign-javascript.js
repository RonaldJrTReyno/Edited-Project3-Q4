var fn = document.getElementById("fname");
var ln = document.getElementById("lname");

var ml = document.getElementById("male");
var fl = document.getElementById("female");
var pnts = document.getElementById("pnts");

var em = document.getElementById("email");
var re = document.getElementById("reason");

function signup(){
    localStorage.setItem("ls_fn", fn.value);
    localStorage.setItem("ls_ln", ln.value);
    
    if (ml.checked){
        localStorage.setItem("ls_gn", "Male");
    } else if (fl.checked) {
        localStorage.setItem("ls_gn", "Female");
    } else {
        localStorage.setItem("ls_gn", "Prefer not to say");
    }
    
    localStorage.setItem("ls_em", em.value);
    localStorage.setItem("ls_re", re.value);
    
    window.location.href = "profile-main.html";
    return false;
}