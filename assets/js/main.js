/* Milena Targino Acessórios — personalize the settings below before launch. */
const WHATSAPP_NUMBER = ""; // Informe DDI + DDD + número, somente dígitos. Ex.: 5511999999999
const STORE_ADDRESS = ""; // Endereço completo da loja física, para mapa e retirada.
const STORE_HOURS = "Consulte nossos horários pelo WhatsApp.";
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add("show");window.clearTimeout(toastTimer);toastTimer=window.setTimeout(()=>toast.classList.remove("show"),3200);}
const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(menuButton&&nav){menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));}
const filterMaterial=document.getElementById("filter-material"),filterType=document.getElementById("filter-type"),filterStyle=document.getElementById("filter-style");
function applyFilters(){const cards=[...document.querySelectorAll(".product-card")];let visible=0;cards.forEach(card=>{const ok=(filterMaterial?.value==="todos"||card.dataset.material===filterMaterial?.value)&&(filterType?.value==="todos"||card.dataset.type===filterType?.value)&&(filterStyle?.value==="todos"||card.dataset.style===filterStyle?.value);card.hidden=!ok;if(ok)visible++;});const empty=document.getElementById("empty-state");if(empty)empty.hidden=visible!==0;}
[filterMaterial,filterType,filterStyle].filter(Boolean).forEach(el=>el.addEventListener("change",applyFilters));
document.getElementById("clear-filters")?.addEventListener("click",()=>{[filterMaterial,filterType,filterStyle].filter(Boolean).forEach(el=>el.value="todos");applyFilters();});
let bag=[];
function addToBag(name){bag.push(name);const count=document.getElementById("cart-count");if(count)count.textContent=String(bag.length);showToast(name+" — adicionado à sacola demonstrativa. Para comprar, fale com a loja.");}
document.querySelectorAll("[data-name]").forEach(button=>button.addEventListener("click",()=>addToBag(button.dataset.name)));
function contactWhatsApp(message){if(!WHATSAPP_NUMBER){showToast("Configure WHATSAPP_NUMBER em assets/js/main.js com o número oficial da loja antes de publicar.");return;}const url="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message);window.open(url,"_blank","noopener,noreferrer");}
document.querySelectorAll(".whatsapp-link").forEach(button=>button.addEventListener("click",()=>contactWhatsApp("Olá! Gostaria de conhecer a coleção da Milena Targino Acessórios.")));
document.getElementById("year")?.append(document.createTextNode(String(new Date().getFullYear())));
document.querySelectorAll("[data-whatsapp]").forEach(button=>button.addEventListener("click",()=>contactWhatsApp(button.dataset.whatsapp||"Olá! Gostaria de informações sobre a loja.")));
