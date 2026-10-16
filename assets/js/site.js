document.addEventListener('DOMContentLoaded', ()=> {
  // Make links with .btn keyboard-activatable if they are used as buttons
  document.querySelectorAll('a.btn').forEach(a=>{
    a.setAttribute('tabindex','0');
    // ensure Enter/Space activate
    a.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        a.click();
      }
    });
  });

  // Basic image lightbox: click any .project-card a (that links to image) to open modal
  function openLightbox(src, alt='Image'){
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `<img src="${src}" alt="${alt}"><button aria-label="Close" style="position:absolute;top:18px;right:18px;background:transparent;border:0;color:white;font-size:20px;cursor:pointer">✕</button>`;
    overlay.addEventListener('click', (ev)=>{
      if(ev.target === overlay) document.body.removeChild(overlay);
    });
    overlay.querySelector('button').addEventListener('click', ()=> document.body.removeChild(overlay));
    document.body.appendChild(overlay);
    overlay.querySelector('img').focus?.();
  }

  document.querySelectorAll('.project-card img').forEach(img=>{
    // only enable if large image or external link – safe to use for all to improve UX
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e)=> {
      e.preventDefault();
      const src = img.getAttribute('src');
      openLightbox(src, img.getAttribute('alt') || '');
    });
  });
});
