var myinput = document.getElementById('input');
myinput.onfocus = function() {
    this.setAttribute('placeholder', '');
}
myinput.onblur = function() {
    this.setAttribute('placeholder', 'focus to hide the place holder');
}