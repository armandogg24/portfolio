const before = document.querySelector('.before');
const after = document.querySelector('.after');
const pst = document.querySelector('.pst')

console.log(before);
console.log(after);
console.log(pst);

function showAndHide() {
    if(before.style.display==""||before.style.display=="none"){
        before.style.display="none";
        after.style.display="block";
    } else {
        after.style.display="none";
    }
}