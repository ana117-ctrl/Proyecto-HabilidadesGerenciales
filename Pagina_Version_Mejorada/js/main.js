gsap.registerPlugin(ScrollTrigger);
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, touch = matchMedia("(pointer: coarse)").matches;
// Intro (solo index, una vez por sesión)
const intro = $("#intro");
if (intro) {
  if (reduce || sessionStorage.getItem("sfitIntro")) intro.remove();
  else {
    sessionStorage.setItem("sfitIntro", "1");
    gsap.timeline({ onComplete: () => intro.remove() })
      .to(".intro-line", { scaleX: 1, duration: .65 })
      .fromTo(".emblem", { opacity: 0, scale: .75, rotation: -8 }, { opacity: 1, scale: 1, rotation: 0, duration: .7 })
      .from(".intro-copy", { opacity: 0, y: 10, duration: .5 })
      .to("#intro", { opacity: 0, duration: .7, delay: .35 });
  }
}
// Menú desplegable
const groups = $$(".nav-group"), closeAll = () => groups.forEach(g => { g.classList.remove("open"); g.querySelector(".nav-trigger").setAttribute("aria-expanded", "false") });
groups.forEach(g => g.querySelector(".nav-trigger").addEventListener("click", e => { e.stopPropagation(); const o = !g.classList.contains("open"); closeAll(); if (o) { g.classList.add("open"); e.currentTarget.setAttribute("aria-expanded", "true") } }));
document.addEventListener("click", closeAll);
// Menú móvil
const mm = $("#mobileMenu"), tog = o => { mm.classList.toggle("show", o); mm.setAttribute("aria-hidden", String(!o)); document.body.classList.toggle("menu-open", o) };
$("#menuToggle").addEventListener("click", () => tog(true)); $("#menuClose").addEventListener("click", () => tog(false));
$$(".mobile-menu a").forEach(a => a.addEventListener("click", () => tog(false)));
// Reveal
$$(".reveal").forEach((el, i) => { if (reduce) return; gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .9, delay: (i % 4) * .05, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%" } }) });
// Solo index
if (!reduce && $(".hero")) {
  gsap.to(".light-sweep", { opacity: 1, xPercent: 55, ease: "power2.inOut", scrollTrigger: { trigger: ".transition", start: "top 80%", end: "bottom 45%", scrub: 1 } });
  [[".building", -25], [".skyline", 35], [".bridge", 55], [".grid", 30]].forEach(([s, y]) => gsap.to(s, { y, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } }));
  gsap.to(".timeline-progress", { height: "100%", ease: "none", scrollTrigger: { trigger: "#station05 .timeline", start: "top 70%", end: "bottom 70%", scrub: true } });
  $$(".milestone").forEach(m => {
    gsap.from(m, { opacity: 0, x: 25, duration: .7, scrollTrigger: { trigger: m, start: "top 82%" } });
    ScrollTrigger.create({ trigger: m, start: "top 62%", end: "bottom 62%", onEnter: () => m.classList.add("active"), onEnterBack: () => m.classList.add("active"), onLeaveBack: () => m.classList.remove("active") })
  });
}
const pb = $$(".progress button");
pb.forEach(b => b.addEventListener("click", () => document.getElementById(b.dataset.target).scrollIntoView({ behavior: reduce ? "auto" : "smooth" })));
$$(".station").forEach((s, i) => ScrollTrigger.create({ trigger: s, start: "top 45%", end: "bottom 45%", onEnter: () => act(i), onEnterBack: () => act(i) }));
function act(i) { pb.forEach((b, j) => b.classList.toggle("active", i === j)) }
// Hotspots
const hp = $("#hotspotPanel");
if (hp) {
  $$(".hotspot").forEach(h => { const o = () => { $$(".hotspot").forEach(x => x.classList.remove("open")); h.classList.add("open"); $("#hotspotName").textContent = h.dataset.name; $("#hotspotText").textContent = h.dataset.text; hp.classList.add("show") }; h.addEventListener("mouseenter", o); h.addEventListener("click", o) });
  $("#map").addEventListener("mouseleave", () => { if (!touch) hp.classList.remove("show") })
}
const sb = $("#soundBtn"); sb && sb.addEventListener("click", () => sb.textContent = sb.textContent.includes("OFF") ? "SOUND // ON" : "SOUND // OFF");
// Cursor
if (!touch && !reduce) {
  const d = document.createElement("div"), r = document.createElement("div");
  [d, r].forEach(x => Object.assign(x.style, { position: "fixed", pointerEvents: "none", zIndex: 120, borderRadius: "50%", transform: "translate(-50%,-50%)" }));
  Object.assign(d.style, { width: "4px", height: "4px", background: "#22d9ff", boxShadow: "0 0 12px #22d9ff" }); Object.assign(r.style, { width: "25px", height: "25px", border: "1px solid rgba(34,217,255,.55)" });
  document.body.append(d, r);
  addEventListener("pointermove", e => { gsap.to(d, { x: e.clientX, y: e.clientY, duration: .08 }); gsap.to(r, { x: e.clientX, y: e.clientY, duration: .28 }) });
  $$("a,button,.hotspot,.card,.info-card").forEach(el => { el.addEventListener("mouseenter", () => gsap.to(r, { scale: 1.7, duration: .2 })); el.addEventListener("mouseleave", () => gsap.to(r, { scale: 1, duration: .2 })) })
}
addEventListener("load", () => ScrollTrigger.refresh());
