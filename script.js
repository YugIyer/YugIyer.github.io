console.log("javascript is working")
function adjustLayout() {
  const sechome = document.querySelector('.sechome');

  if (window.innerWidth <= 1024) {
    sechome.style.display = 'flex';
    sechome.style.flexDirection = 'column';
    sechome.style.alignItems = 'center';
    sechome.style.justifyContent = 'center';
    sechome.style.gap = '1.5rem';
    sechome.style.width = '100%';
    sechome.style.maxWidth = '100%';
  } else {
    sechome.style.display = 'grid';
    sechome.style.gridTemplateColumns = 'minmax(300px, 40%) 1fr';
    sechome.style.alignItems = 'center';
    sechome.style.gap = '2rem';
  }
}

window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);