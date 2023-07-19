
document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.dropdown > a');
    var isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
  
    function toggleDropdown(dropdownToggle) {
      var dropdownMenu = dropdownToggle.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }
  
    function hideAllDropdowns() {
      var dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(function(dropdownMenu) {
        dropdownMenu.style.display = 'none';
      });
    }
  
    function handleDropdownToggle(event) {
      var dropdownToggle = event.target;
      var isHoverEnabled = !isSmallScreen && dropdownToggle.parentNode.classList.contains('dropdown');
      var isClickEnabled = isSmallScreen && dropdownToggle.parentNode.classList.contains('dropdown');
  
      if (isHoverEnabled) {
        toggleDropdown(dropdownToggle);
      }
  
      if (isClickEnabled) {
        hideAllDropdowns();
        toggleDropdown(dropdownToggle);
      }
    }
  
    dropdownToggles.forEach(function(dropdownToggle) {
      dropdownToggle.addEventListener('click', handleDropdownToggle);
    });
  
    window.addEventListener('resize', function() {
      isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
      hideAllDropdowns();
    });
  });
  