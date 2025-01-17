//
// Place any custom JS here
//
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebarMenu');
    const sidebarContent = document.getElementById('sidebarContent');
    const mainContent = document.getElementById('mainContent');
    sidebar.classList.toggle('collapsed');
    sidebarContent.classList.toggle('opacity-0');
  
    if (sidebar.classList.contains('collapsed')) {
      mainContent.style.marginLeft = '0';
    } else {
      mainContent.style.marginLeft = '250px';
    }
  });
  
  window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const body = document.body;
    const scale = document.getElementById('scale');
    if (width >= 992 && width <= 1600) {
      body.style.transform = 'scale(0.9)';
    } else if (width >= 768 && width <= 991) {
      body.style.transform = 'scale(0.85)';
    } else if (width >= 700 && width <= 767) {
      body.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width <= 700) {
      body.style.transform = 'scale(0.75)';
    } else if (width <= 600) {
      body.style.transform = 'scale(0.5)';
    } else {
      body.style.transform = 'scale(1)';
    }
    scale.innerHTML = 'Scale: ' + (body.style.transform).replace('scale(', '').replace(')', '') * 100 + '%';
  });
  