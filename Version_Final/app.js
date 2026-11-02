(() => {
  'use strict';
  const C=window.SFIT_CONTENT;
  const $=selector=>document.querySelector(selector);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine=matchMedia('(pointer: fine)').matches;
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const photo=(src,alt,eager=false)=>`<img src="${escape(src)}" alt="${escape(alt)}" loading="${eager?'eager':'lazy'}" decoding="async">`;
  const dialog=$('#lightbox');let returnFocus=null;
  function openImage(src,caption){returnFocus=document.activeElement;$('#lightbox-art').innerHTML=photo(src,caption,true);$('#lightbox-caption').textContent=caption;dialog.showModal();}
  function bindGallery(){document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{const g=C.gallery[Number(b.dataset.gallery)];openImage(g.image,g.title);}));}
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus();});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  function count(el){if(el.dataset.counted)return;el.dataset.counted='true';const target=Number(el.dataset.count);if(reduced){el.textContent=target.toLocaleString('es-MX');return;}const start=performance.now();function tick(now){const p=Math.min((now-start)/1400,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3))).toLocaleString('es-MX');if(p<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);}
  window.SFIT={C,$,reduced,fine,escape,photo,openImage,bindGallery};
  document.addEventListener('DOMContentLoaded',()=>{
    if('IntersectionObserver' in window){if(!reduced)document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.matches('[data-count]'))count(e.target);observer.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.reveal,[data-count]').forEach(el=>observer.observe(el));}else document.querySelectorAll('[data-count]').forEach(count);
    const menu=$('.menu-toggle'),nav=$('#site-navigation');
    const closeMenu=()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('menu-open');};
    menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('menu-open',!expanded);});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
    if(fine&&!reduced&&innerWidth>700){
      document.querySelectorAll('.gallery-item,.member').forEach(card=>{let frame=0;card.addEventListener('pointermove',e=>{if(frame)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;frame=requestAnimationFrame(()=>{card.style.setProperty('--px',`${x*12}px`);card.style.setProperty('--py',`${y*10}px`);card.style.setProperty('--rx',`${-y*3}deg`);card.style.setProperty('--ry',`${x*3}deg`);frame=0;});});card.addEventListener('pointerleave',()=>{if(frame)cancelAnimationFrame(frame);frame=0;['--px','--py','--rx','--ry'].forEach(p=>card.style.removeProperty(p));});});
      const hero=$('.hero');if(hero){let frame=0;hero.addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{$('#hero-art').style.transform=`translate(${(e.clientX/innerWidth-.5)*14}px,${(e.clientY/innerHeight-.5)*10}px)`;frame=0;});});hero.addEventListener('pointerleave',()=>$('#hero-art').style.transform='');}
      const cursor=$('.cursor');let frame=0;addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{cursor.style.transform=`translate(${e.clientX-cursor.offsetWidth/2}px,${e.clientY-cursor.offsetHeight/2}px)`;cursor.style.opacity='1';frame=0;});});document.addEventListener('pointerover',e=>cursor.classList.toggle('hover',!!e.target.closest('a,button,summary')));document.addEventListener('pointerout',e=>{if(!e.relatedTarget)cursor.style.opacity='0';});
    }
    const intro=$('.intro');if(intro){try{if(sessionStorage.getItem('sfit-visited')||reduced){intro.remove();document.body.classList.add('intro-done');}else{sessionStorage.setItem('sfit-visited','1');setTimeout(()=>{document.body.classList.add('intro-done');intro.remove();},3000);}}catch{setTimeout(()=>intro.remove(),3000);}}
  },{once:true});
})();
