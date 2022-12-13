const before = document.querySelector('.before');
const after = document.querySelector('.after');
const pst = document.querySelector('.pst');
const nav = document.getElementById("nav");
const skills = document.getElementById("skills");
const skillDistance = window.innerHeight - skills.getBoundingClientRect().top;
const progress = document.getElementsByClassName("progress");

function showAndHide() {
    if(before.style.display==""||before.style.display=="none"){
        before.style.display="none";
        after.style.display="block";
    } else {
        after.style.display="none";
    }
}


// SHOW AND HIDE THE RESPONSIVE MENU
function showAndHideMenu() {
    if(nav.classList==""){
        nav.classList="responsive";
    }else{
        nav.classList="";
    }
}
// HIDE RESPONSIVE MENU WHEN SELECTING AN OPTION
function select() {
    showAndHideMenu();
}

// APPLY SKILLS ANIMATIONS
function skillsEffect() {
    if(skillDistance >= 300){
        progress[0].classList.add("javascript");
        progress[1].classList.add("htmlcss");
        progress[2].classList.add("python");
        progress[3].classList.add("nodejs");
        progress[4].classList.add("react");
        progress[5].classList.add("communication");
        progress[6].classList.add("teamwork");
        progress[7].classList.add("creativity");
        progress[8].classList.add("dedication");
        progress[9].classList.add("proyectm");
    }
}

window.onscroll = skillsEffect();