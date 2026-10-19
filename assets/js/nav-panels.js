/**
 * Top Navbar & Off-Canvas Panels Controller
 * - About Me Drawer (Left, 35%+ width)
 * - TTRPG & Dungeon Master Drawer (Right, 35%+ width)
 * - Top Navbar with toggle actions & backdrop overlay
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnAbout = document.getElementById('btn-nav-about');
  const btnCareer = document.getElementById('btn-nav-career');
  const btnTtrpg = document.getElementById('btn-nav-ttrpg');

  const panelAbout = document.getElementById('panel-about');
  const panelTtrpg = document.getElementById('panel-ttrpg');
  const overlay = document.getElementById('panels-overlay');

  const closeAbout = document.getElementById('close-about-btn');
  const closeTtrpg = document.getElementById('close-ttrpg-btn');

  function isPanelOpen(panel) {
    return panel && panel.classList.contains('panel-open');
  }

  function closeAllPanels() {
    if (panelAbout) {
      panelAbout.classList.remove('panel-open');
      panelAbout.setAttribute('aria-hidden', 'true');
    }
    if (panelTtrpg) {
      panelTtrpg.classList.remove('panel-open');
      panelTtrpg.setAttribute('aria-hidden', 'true');
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

  function openPanel(panel, btn) {
    // If other panel is open, close it cleanly
    if (panel === panelAbout && isPanelOpen(panelTtrpg)) {
      panelTtrpg.classList.remove('panel-open');
      panelTtrpg.setAttribute('aria-hidden', 'true');
      if (btnTtrpg) {
        btnTtrpg.classList.remove('active');
        btnTtrpg.setAttribute('aria-expanded', 'false');
      }
    } else if (panel === panelTtrpg && isPanelOpen(panelAbout)) {
      panelAbout.classList.remove('panel-open');
      panelAbout.setAttribute('aria-hidden', 'true');
      if (btnAbout) {
        btnAbout.classList.remove('active');
        btnAbout.setAttribute('aria-expanded', 'false');
      }
    }

    panel.classList.add('panel-open');
    panel.setAttribute('aria-hidden', 'false');
    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
    if (overlay) {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  // Button 1: Toggle About & Contact Details (Left Drawer)
  if (btnAbout && panelAbout) {
    btnAbout.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPanelOpen(panelAbout)) {
        closeAllPanels();
      } else {
        openPanel(panelAbout, btnAbout);
      }
    });
  }

  // Button 2: Game Design Career (Hides panels if open, does nothing otherwise)
  if (btnCareer) {
    btnCareer.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = isPanelOpen(panelAbout) || isPanelOpen(panelTtrpg);
      if (wasOpen) {
        closeAllPanels();
      }
      // Smoothly scroll to the showcase header
      const showcaseHeader = document.querySelector('.showcase-header');
      if (showcaseHeader) {
        showcaseHeader.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Button 3: Toggle TTRPG & DM (Right Drawer)
  if (btnTtrpg && panelTtrpg) {
    btnTtrpg.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPanelOpen(panelTtrpg)) {
        closeAllPanels();
      } else {
        openPanel(panelTtrpg, btnTtrpg);
      }
    });
  }

  // Close buttons inside panels
  if (closeAbout) {
    closeAbout.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllPanels();
    });
  }

  if (closeTtrpg) {
    closeTtrpg.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllPanels();
    });
  }

  // Click outside on overlay to close
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeAllPanels();
    });
  }

  // Escape key closes panels
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPanels();
    }
  });
});
