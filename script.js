function myFunction() {
    document.getElementById("mybox").classList.toggle("show");
    document.getElementById("mybox2").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.botao')) {
    var myDropdown = document.getElementById("mybox");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }   
  }
    
  if (!e.target.matches('.botao2')) {
    var myDropdown = document.getElementById("mybox2");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }   
  }
}

