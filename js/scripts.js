var checkboxLink = document.querySelector('.checkbox-link');
var checkboxInput = document.querySelector('.checkbox-input');

checkboxLink.addEventListener('click', function () {
  if(checkboxInput.checked == false) {
    checkboxInput.checked = true;
  }
  else {
    if(checkboxInput.checked == true) {
        checkboxInput.checked = false;
     }
  }
});