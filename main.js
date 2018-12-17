//get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modal');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modelBtn.addEventListener('click', openModal);
//listen for open click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal() {
    modal.style.display = 'block';
}
//function to close modal
function closeModal() {
    modal.style.display = 'none';
  }
//function to close modal when outside box clicked
function clickOutside(e){
    if (e.target == modal) {
    modal.style.display = 'none';
}
}
