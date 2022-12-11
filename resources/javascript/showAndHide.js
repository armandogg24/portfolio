const click = document.querySelector('.click');
const object1 = document.querySelector('.before');
const object2 = document.querySelector('.after');

function showAndHide() {
    object1.style.display = "none";
    object2.style.display = "flex";
    click.style.display = "none";
}