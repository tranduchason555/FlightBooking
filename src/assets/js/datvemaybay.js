   /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-in4-after-dropdown");
    }
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-in4-after-dropdown')) {
          openDropdown.classList.remove('show-in4-after-dropdown');
        }
        }
    }
    }
    function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show-in4-after-dropdown");
    }
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-in4-after-dropdown')) {
          openDropdown.classList.remove('show-in4-after-dropdown');
        }
        }
    }
    }
    function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show-in4-after-dropdown");
    }
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-in4-after-dropdown')) {
          openDropdown.classList.remove('show-in4-after-dropdown');
        }
        }
    }
    }