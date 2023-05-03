window.addEventListener('scroll', function() {
    var fadeIns = document.querySelectorAll('.fade-in');
    for (var i = 0; i < fadeIns.length; i++) {
       var position = fadeIns[i].getBoundingClientRect().top;
       var windowHeight = window.innerHeight;
       if (position - windowHeight <= 0) {
          fadeIns[i].classList.add('visible');
       }
    }
 });