(() => {
  'use strict';
  const {C,$,escape,photo,openImage,reduced}=window.SFIT;
  const page=document.body.dataset.page;
  const moduleIndex={organizacion:0,trabajo:1,compromiso:2}[page];
  const module=C.modules[moduleIndex];
  $('#institution-chapters').innerHTML=module.chapters.map(ch=>`<section class="page-chapter" id="${ch.id}"><div class="section-top reveal"><p class="eyebrow">${escape(ch.label)}</p></div><div class="section-heading reveal"><h2>${escape(ch.title)}</h2><p>${escape(ch.intro)}</p></div>${ch.tree?'<div id="interactive-org"></div>':''}<div class="module-card-grid">${ch.cards.map(card=>`<article class="module-card reveal"><h3>${escape(card.title)}</h3><p>${escape(card.text)}</p></article>`).join('')}</div>${ch.note?`<p class="module-note">${escape(ch.note)}</p>`:''}</section>`).join('');
  if(page==='organizacion'){
    renderOrganigram(module.chapters[0].tree);
    renderTeam();
  }
  function renderOrganigram(roots){
    const U=C.ui.organigram, nodes=[];
    function record(raw,parent=null,depth=0){const node={id:nodes.length,label:raw.label,parent,depth,children:[]};nodes.push(node);node.children=raw.children.map(child=>record(child,node,depth+1));return node;}
    const root=record(roots[0]);
    const kind=n=>n.depth===0?'rectoria':n.depth===1?'direccion':n.label.startsWith('Jefatura')?'jefatura':n.label.startsWith('Coord.')?'coordinacion':'apoyo';
    function markup(n){return `<li class="org-tree-node org-${kind(n)}" data-node-container="${n.id}"><div class="org-node-bar"><button type="button" class="org-node" data-node="${n.id}" aria-pressed="false"><small>${n.depth===0?'RECTORÍA':n.depth===1?'DIRECCIÓN':kind(n).toUpperCase().replace('COORDINACION','COORDINACIÓN') }</small><strong>${escape(n.label)}</strong></button>${n.children.length?`<button type="button" class="org-toggle" data-toggle="${n.id}" aria-expanded="true" aria-controls="org-children-${n.id}" aria-label="${escape(U.collapseLabel+' '+n.label)}">−</button>`:''}</div>${n.children.length?`<ul class="org-children" id="org-children-${n.id}">${n.children.map(markup).join('')}</ul>`:''}</li>`;}
    $('#interactive-org').innerHTML=`<div class="org-intro"><p class="eyebrow">${escape(U.eyebrow)}</p><h3>${escape(U.title)}</h3><p>${escape(U.intro)}</p></div><div class="org-toolbar"><div class="org-search"><label for="org-search">${escape(U.searchLabel)}</label><input type="search" id="org-search" placeholder="${escape(U.searchPlaceholder)}" autocomplete="off"><p id="org-search-status" aria-live="polite"></p></div><div class="org-view-buttons"><button type="button" id="org-expand">${escape(U.expand)} <span>+</span></button><button type="button" id="org-collapse">${escape(U.collapse)} <span>−</span></button></div></div><div class="org-tree-layout"><div class="org-network"><ul class="org-root">${markup(root)}</ul></div><aside class="org-inspector" aria-live="polite" id="org-inspector"></aside></div>`;
    function ancestors(n){const list=[];while(n){list.unshift(n);n=n.parent;}return list;}
    function select(id){const n=nodes[id],trail=ancestors(n);document.querySelectorAll('[data-node]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.node)===id)));document.querySelectorAll('[data-node-container]').forEach(el=>el.classList.toggle('in-path',trail.some(p=>p.id===Number(el.dataset.nodeContainer))));$('#org-inspector').innerHTML=`<span class="eyebrow">${escape(U.select)}</span><h3>${escape(n.label)}</h3><div class="org-detail-line"><small>${escape(n.parent?U.depends:U.root)}</small>${n.parent?`<button type="button" data-inspect-node="${n.parent.id}">${escape(n.parent.label)} ↑</button>`:''}</div><p class="eyebrow org-path-label">${escape(U.path)}</p><ol class="org-breadcrumb">${trail.map(p=>`<li>${escape(p.label)}</li>`).join('')}</ol><div class="org-children-summary"><small>${escape(U.children)}</small>${n.children.length?`<ul>${n.children.map(child=>`<li><button type="button" data-inspect-node="${child.id}">${escape(child.label)} →</button></li>`).join('')}</ul>`:`<p>${escape(U.leaf)}</p>`}</div>`;$('#org-inspector').querySelectorAll('[data-inspect-node]').forEach(b=>b.addEventListener('click',()=>{const next=nodes[Number(b.dataset.inspectNode)];ancestors(next).forEach(p=>setExpanded(p,true));select(next.id);}));}
    function setExpanded(n,expanded){if(!n.children.length)return;const list=$('#org-children-'+n.id),button=$(`[data-toggle="${n.id}"]`);list.hidden=!expanded;button.setAttribute('aria-expanded',String(expanded));button.setAttribute('aria-label',(expanded?U.collapseLabel:U.expandLabel)+' '+n.label);button.textContent=expanded?'−':'+';if(expanded&&!reduced)list.animate([{opacity:0,transform:'translateY(-5px)'},{opacity:1,transform:'translateY(0)'}],{duration:250,easing:'ease-out'});}
    document.querySelectorAll('[data-node]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.node))));
    document.querySelectorAll('[data-toggle]').forEach(b=>b.addEventListener('click',()=>setExpanded(nodes[Number(b.dataset.toggle)],b.getAttribute('aria-expanded')!=='true')));
    $('#org-expand').addEventListener('click',()=>nodes.forEach(n=>setExpanded(n,true)));
    $('#org-collapse').addEventListener('click',()=>nodes.forEach(n=>setExpanded(n,n.depth===0)));
    const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    $('#org-search').addEventListener('input',e=>{const term=normalize(e.target.value.trim()),matches=term?nodes.filter(n=>normalize(n.label).includes(term)):[];document.querySelectorAll('[data-node]').forEach(b=>b.classList.toggle('search-match',matches.some(n=>n.id===Number(b.dataset.node))));matches.forEach(n=>ancestors(n).forEach(p=>setExpanded(p,true)));$('#org-search-status').textContent=term?(matches.length?`${matches.length} ${U.matches}`:U.empty):'';});
    select(root.id);
  }
  function renderTeam(){
    $('#team-banner-image').src=C.assets.team;$('#team-prompt').textContent=C.ui.teamPrompt;
    $('#team').innerHTML=C.team.map((t,i)=>`<button class="member" type="button" style="--member:${t.color}" data-member="${i}" aria-pressed="${i===0}">${photo(t.image,t.name+' · '+t.area)}<span class="member-index">0${i+1} // SFIT</span><span class="member-caption"><strong>${t.name}</strong><small>${t.area}</small><span class="member-symbol" aria-hidden="true">${t.icon}</span></span></button>`).join('');
    const members=[...document.querySelectorAll('[data-member]')];
    function selectMember(i){const t=C.team[i];members.forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));$('#team-detail').innerHTML=`<div><span class="eyebrow">${escape(t.zone)}</span><h3>${escape(t.name)} <em>// ${escape(t.area)}</em></h3></div><p>${escape(t.description)}</p><button class="portrait-open" type="button">EXPLORAR RETRATO ↗</button>`;$('.portrait-open').addEventListener('click',()=>openImage(t.image,t.name+' / '+t.area));}
    members.forEach((b,i)=>{b.addEventListener('click',()=>selectMember(i));b.addEventListener('focus',()=>selectMember(i));});selectMember(0);
    $('.closing img').src=C.assets.logo;$('.closing img').classList.add('archive-emblem');
  }
})();
