/**
 * Top Navbar & Off-Canvas Panels Controller
 * Julian Perez Krohn - Game Design Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnAbout = document.getElementById('btn-tab-about');
  const btnCareer = document.getElementById('btn-tab-career');
  const btnTtrpg = document.getElementById('btn-tab-ttrpg');

  const drawerAbout = document.getElementById('drawer-about');
  const drawerTtrpg = document.getElementById('drawer-ttrpg');
  const overlay = document.getElementById('panels-overlay');

  const closeAboutBtn = document.getElementById('close-about-btn');
  const closeTtrpgBtn = document.getElementById('close-ttrpg-btn');

  function isDrawerOpen(drawer) {
    return drawer && drawer.classList.contains('panel-open');
  }

  function closeAllDrawers() {
    if (drawerAbout) {
      drawerAbout.classList.remove('panel-open');
      drawerAbout.setAttribute('aria-hidden', 'true');
    }
    if (drawerTtrpg) {
      drawerTtrpg.classList.remove('panel-open');
      drawerTtrpg.setAttribute('aria-hidden', 'true');
    }
    if (btnAbout) {
      btnAbout.classList.remove('active');
      btnAbout.setAttribute('aria-expanded', 'false');
    }
    if (btnTtrpg) {
      btnTtrpg.classList.remove('active');
      btnTtrpg.setAttribute('aria-expanded', 'false');
    }
    if (overlay) {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  function openDrawer(drawerToOpen, btnToActivate) {
    // If opposite drawer is open, close it cleanly first
    if (drawerToOpen === drawerAbout && isDrawerOpen(drawerTtrpg)) {
      drawerTtrpg.classList.remove('panel-open');
      drawerTtrpg.setAttribute('aria-hidden', 'true');
      if (btnTtrpg) {
        btnTtrpg.classList.remove('active');
        btnTtrpg.setAttribute('aria-expanded', 'false');
      }
    } else if (drawerToOpen === drawerTtrpg && isDrawerOpen(drawerAbout)) {
      drawerAbout.classList.remove('panel-open');
      drawerAbout.setAttribute('aria-hidden', 'true');
      if (btnAbout) {
        btnAbout.classList.remove('active');
        btnAbout.setAttribute('aria-expanded', 'false');
      }
    }

    drawerToOpen.classList.add('panel-open');
    drawerToOpen.setAttribute('aria-hidden', 'false');

    if (btnToActivate) {
      btnToActivate.classList.add('active');
      btnToActivate.setAttribute('aria-expanded', 'true');
    }

    if (overlay) {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
    }

    // Lock page scroll behind drawer
    document.body.style.overflow = 'hidden';
  }

  // Tab 1: About Me
  if (btnAbout && drawerAbout) {
    btnAbout.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isDrawerOpen(drawerAbout)) {
        closeAllDrawers();
      } else {
        openDrawer(drawerAbout, btnAbout);
      }
    });
  }

  // Tab 2: Game Design (Closes side drawers and scrolls smoothly to showcase)
  if (btnCareer) {
    btnCareer.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDrawers();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Tab 3: DM & TTRPGS
  if (btnTtrpg && drawerTtrpg) {
    btnTtrpg.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isDrawerOpen(drawerTtrpg)) {
        closeAllDrawers();
      } else {
        openDrawer(drawerTtrpg, btnTtrpg);
      }
    });
  }

  // Close buttons inside drawers
  if (closeAboutBtn) {
    closeAboutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDrawers();
    });
  }

  if (closeTtrpgBtn) {
    closeTtrpgBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDrawers();
    });
  }

  // Backdrop overlay click
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeAllDrawers();
    });
  }

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
    }
  });
});
