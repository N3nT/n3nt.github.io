(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const y=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});document.querySelector(".swiper").swiper;y.slideNext();const c=document.querySelectorAll(".about__wrap-list-item"),n=document.querySelector(".about__wrap-img"),s=["./img/forest-6754057_1280.jpg","./img/mountains-100367_1280.jpg","/img/hintersee-3601004_1280.jpg"],u=document.querySelector(".gallery__wrap-asideleft"),g=document.querySelector(".gallery__wrap-asideright"),d=document.querySelector(".gallery__wrap-mid"),w=document.querySelector(".gallery__wrap-right"),_=document.querySelector(".gallery__wrap-left");let r=0,l=c[0];l.classList.add("about-li--active");c.forEach(o=>{o.addEventListener("click",i=>{l?l!==i.target&&(l.classList.remove("about-li--active"),i.target.classList.add("about-li--active"),l=i.target):(i.target.classList.add("about-li--active"),l=i.target),b(l)})});const b=o=>{o===c[0]?n.src="../img/mountains-3779403_640.jpg":o===c[1]?n.src="../img/animal-8510775_640.jpg":o===c[2]?n.src="../img/wolves-8372284_640.jpg":o===c[3]&&(n.src="../img/the-blue-lagoon-4980696_640.jpg")},f=()=>{r==1?(u.src=s[2],d.src=s[0],g.src=s[1]):r==2?(u.src=s[1],d.src=s[2],g.src=s[0]):r==3&&(u.src=s[0],d.src=s[1],g.src=s[2])},h=()=>{r++,r>3&&(r=1),f()},L=()=>{r--,r<0?r=2:r==0&&(r=3),f()};w.addEventListener("click",h);_.addEventListener("click",L);
