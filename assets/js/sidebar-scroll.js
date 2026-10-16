/**
 * Proportional Dynamic Sidebar Scroll
 * Automatically calculates scroll speed based on the ratio between sidebar height and content height.
 * - Short sidebar (e.g. collapsed details): glides slowly and smoothly.
 * - Long sidebar (e.g. expanded details): glides faster, matching page displacement.
 */

(function () {
  let ticking = false;

  function updateSidebar() {
    ticking = false;

    const layout = document.querySelector('.layout');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    if (!layout || !sidebar || !content) return;

    // Disable proportional scroll on mobile / tablet stacked layout
    if (window.innerWidth <= 960) {
      sidebar.style.transform = '';
      return;
    }

    const contentHeight = content.offsetHeight;
    const sidebarHeight = sidebar.offsetHeight;

    // If sidebar is equal or taller than content, no translation needed
    if (sidebarHeight >= contentHeight) {
      sidebar.style.transform = '';
      return;
    }

    const layoutRect = layout.getBoundingClientRect();
    const layoutTop = layoutRect.top + window.scrollY;
    const scrollY = window.scrollY;

    // Distance scrolled past the start of the layout
    const scrollOffset = scrollY - layoutTop;

    if (scrollOffset <= 0) {
      sidebar.style.transform = 'translateY(0px)';
      return;
    }

    // Proportional speed ratio:
    // If sidebar is short (e.g. 25% of content height), speed is 0.25 (moves slowly).
    // If sidebar is tall (e.g. 85% of content height), speed is 0.85 (moves faster).
    const rawRatio = sidebarHeight / contentHeight;
    const speedRatio = Math.min(Math.max(rawRatio, 0.20), 0.92);

    // In normal document flow, an element scrolls at speed 1.0 (relative to viewport).
    // Applying translateY((1 - speedRatio) * scrollOffset) reduces its scroll speed in the viewport to exactly speedRatio.
    let translateY = (1 - speedRatio) * scrollOffset;

    // Clamp so the sidebar never extends beyond the content container
    const maxTranslateY = contentHeight - sidebarHeight;
    if (translateY > maxTranslateY) {
      translateY = maxTranslateY;
    } else if (translateY < 0) {
      translateY = 0;
    }

    sidebar.style.transform = `translateY(${Math.round(translateY)}px)`;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateSidebar);
      ticking = true;
    }
  }

  // Listen for scroll and resize
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);

  // Listen for details toggle (e.g. "More about me" in index.md)
  document.addEventListener('DOMContentLoaded', () => {
    updateSidebar();

    document.querySelectorAll('details').forEach(el => {
      el.addEventListener('toggle', () => {
        // Allow DOM to finish layout change
        setTimeout(updateSidebar, 60);
      });
    });

    // Observer for dynamic content/image loads
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        requestTick();
      });
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.content');
      if (sidebar) resizeObserver.observe(sidebar);
      if (content) resizeObserver.observe(content);
    }
  });

  // Initial calculation
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(updateSidebar, 100);
  }
})();
