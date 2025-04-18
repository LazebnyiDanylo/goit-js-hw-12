import{S as p,a as h,i as y}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href=${a}>
            <img
                class="gallery-image"
                src=${s} 
                alt="${e}"
            />
            <ul class="gallery-descr">
                <li>
                    <h2>Likes</h2><p>${t}</p>
                </li>
                <li>
                    <h2>Views</h2><p>${i}</p>
                </li>
                <li>
                    <h2>Comments</h2><p>${f}</p>
                </li>
                <li>
                    <h2>Downloads</h2><p>${m}</p>
                </li>
            </ul>
        </a>
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){u.innerHTML=""}function S(){d.classList.remove("hidden")}function n(){d.classList.add("hidden")}function q(o){return S(),h.get("https://pixabay.com/api/",{params:{key:"49740043-bed2939fa2e4edbb3e5f2f338",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".form"),c=document.querySelector('[name="search-text"]');document.querySelector(".gallery");l.addEventListener("submit",$);function $(o){if(o.preventDefault(),b(),!c.value.trim()){l.reset();return}q(c.value.trim()).then(r=>{if(r.data.hits.length===0)return n(),y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});L(r.data.hits),n()}).catch(r=>{console.log(r)}),l.reset()}
//# sourceMappingURL=index.js.map
