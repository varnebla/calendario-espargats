export function toggleSideBar() {
  const sideBar = document.querySelector('#default-sidebar');
  const sideBarBackground = document.querySelector('#side-bar-bg');
  if (sideBar?.classList.contains('translate-x-0')) {
    sideBar?.classList.remove('translate-x-0');
    sideBar?.classList.add('-translate-x-full');
    sideBarBackground?.classList.add('opacity-0')
    sideBarBackground?.classList.remove('opacity-50')
    return;
  }
  sideBar?.classList.add('translate-x-0');
  sideBar?.classList.remove('-translate-x-full');
  sideBarBackground?.classList.add('opacity-50')
  sideBarBackground?.classList.remove('opacity-0')
}