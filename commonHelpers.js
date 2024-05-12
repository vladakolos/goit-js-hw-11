import{S as p,i as l}from"./assets/vendor-3fe00192.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u="43840799-e71ea23b4db8ae9f9c01a8841",f="https://pixabay.com/api/",d=r=>{const t=new URLSearchParams({key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(f+"?"+t.toString())},h=r=>`
    <a href="${r.largeImageURL}" class="item">
      <img src="${r.webformatURL}" alt="" alt="${r.tags}"/>
      <div class="data">
        <p><b>Likes</b> <span>${r.likes}</span></p>
        <p><b>Views</b> <span>${r.views}</span></p>
        <p><b>Comments</b> <span>${r.comments}</span></p>
        <p><b>Downloads</b> <span>${r.downloads}</span></p>
      </div>
    </a>
  `,n=document.querySelector("form.form-search"),a=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=new p(".gallery a",{});n&&n.addEventListener("submit",r=>{r.preventDefault();const t=n.elements.search.value;t?(a.innerHTML="",a.classList.add("is-load"),m.classList.remove("is-hidden"),d(t).catch(o=>{console.log(o)}).then(o=>o.json()).then(o=>{a.classList.remove("is-load");const i=[];o.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"error",color:"white"}):(o.hits.forEach(e=>{i.push(h(e))}),a.innerHTML=i.join(""),g.refresh())}).finally(()=>{m.classList.add("is-hidden")}),n.reset()):l.error({message:"Please enter a search term",position:"topRight",class:"error",color:"white"})});
//# sourceMappingURL=commonHelpers.js.map
