import{S,a as M,i as h}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:r,views:s,comments:q,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href=${n}>
            <img
                class="gallery-image"
                src=${i} 
                alt="${e}"
            />
            <ul class="gallery-descr">
                <li>
                    <h2>Likes</h2><p>${r}</p>
                </li>
                <li>
                    <h2>Views</h2><p>${s}</p>
                </li>
                <li>
                    <h2>Comments</h2><p>${q}</p>
                </li>
                <li>
                    <h2>Downloads</h2><p>${v}</p>
                </li>
            </ul>
        </a>
    </li>`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){f.innerHTML=""}function g(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}function L(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}async function b(o,t){return g(),await M.get("https://pixabay.com/api/",{params:{key:"49740043-bed2939fa2e4edbb3e5f2f338",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}const l=document.querySelector(".form"),O=document.querySelector('[name="search-text"]');let a=1,w,c;l.addEventListener("submit",P);m.addEventListener("click",x);async function P(o){if(o.preventDefault(),B(),c=O.value.trim(),a=1,!c){l.reset();return}try{const t=await b(c,a);if(w=Math.ceil(t.data.totalHits/t.data.hits.length),t.data.hits.length===0)return d(),u(),l.reset(),h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});y(t.data.hits),u(),L()}catch(t){return console.log(t.message)}l.reset()}async function x(){d(),g(),a+=1;try{const o=await b(c,a);y(o.data.hits),u(),L();const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"}),a>=w&&(d(),h.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){return console.log(o.message)}}
//# sourceMappingURL=index.js.map
