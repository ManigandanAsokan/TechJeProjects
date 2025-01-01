function G(i) { return document.getElementById(i) }
function Q(i) { return document.querySelector(i) }
function Qa(i) { return Array.from(document.querySelectorAll(i)) }
function q(a,i) { return a.querySelector(i) }
function qa(a, i) { return Array.from(a.querySelectorAll(i)) }
function ajax(u,f, e){
  let x = new XMLHttpRequest();
  x.open('GET',u,true);e = e ? e : function(){console.log('Error');};
  x.onreadystatechange = function(){
    (x.readyState == 4 &&  x.status == 200) ? f(x.response) : e();
  }
  x.send();
}

function country() {
  return {
    "canada": {
      "name": "Canada", "slide": "countryimag/canada1.jpg",
      "flag": "canada.svg", "thumb": "canada.jpg",
      "p": "Canada is a beautiful country occupying the northernmost region of the North American ..."
    },
    "uae": {
      "name": "UAE", "slide": "countryimag/uae.jpg",
      "flag": "uae.svg", "thumb": "uae.webp",
      "p": "The UAE education system is divided into three categories, i.e. public schools, private schools ..."
    },
    "singapore": {
      "name": "Singapore", "slide": "countryimag/singapure1.jpg",
      "flag": "singapore.svg", "thumb": "singapore.jpg",
      "p": "In Singapore, the system includes six years of primary school, followed by four to six ... "
    },
    "malaysia": {
      "name": "Malaysia", "slide": "countryimag/malasyia1.jpg",
      "flag": "malaysia.svg", "thumb": "malaysia.jpg",
      "p": "Malaysia is both a big sender and big receiver of international students, although inward ..."
    },
    "australia": {
      "name": "Australia", "slide": "countryimag/australia-1.jpg",
      "flag": "australia.svg", "thumb": "australia.jpg",
      "p": "The education system in Australia is three-tiered with primary, secondary and ..."
    },
    "new_zealand": {
      "name": "New Zealand", "slide": "countryimag/neuseland2.jpg",
      "flag": "New_z.svg", "thumb": "newzealand.webp",
      "p": "We welcome different abilities, religious beliefs, ethnic groups, income levels and ideas ..."
    },
    "uk": {
      "name": "United Kingdom", "slide": "countryimag/uk2.jpg",
      "flag": "uk.svg", "thumb": "uk.jpg",
      "p": "The education system in the UK is divided into four main parts, primary education, secondary ..."
    },
    "poland": {
      "name": "Poland", "slide": "countryimag/poland4.jpg",
      "flag": "poland.svg", "thumb": "poland.jpg",
      "p": "Poland has a long and proud tradition of keeping educational institutions available for..."
    },
    "hungary": {
      "name": "Hungary", "slide": "countryimag/hungryhd.jpg",
      "flag": "hungary.svg", "thumb": "hungary.jpg",
      "p": "Education in Hungary is compulsory between the ages of 6 and 16. The child may have had the ..."
    },
    "sweden": {
      "name": "Sweden", "slide": "countryimag/swedonhd",
      "flag": "sweden.svg", "thumb": "sweden.jpg",
      "p": "The Swedish state school system comprises compulsory school and various types of voluntary ..."
    },
    "germany": {
      "name": "Germany", "slide": "countryimag/jermanyhd.jpg",
      "flag": "germany.svg", "thumb": "germany.jpg",
      "p": "The state runs most German schools and they are free to attend. However, parents can also opt ..."
    },
    "slovakia": {
      "name": "Slovakia", "slide": "countryimag/slovakiahd.jpg",
      "flag": "slovakia.svg", "thumb": "slovakia.jpg",
      "p": "The education systems in the Czech Republic and Slovakia have a lot in commondue to the ..."
    },
    "malta": {
      "name": "Malta", "slide": "countryimag/maltahd5.png",
      "flag": "malta.svg", "thumb": "malta.jpg",
      "p": "Malta’s education system is regulated by the Ministry of Education and rated very highly ..."
    },
    "lithuania": {
      "name": "Lithuania", "slide": "countryimag/lindhuniahd1.jpg",
      "flag": "lithuania.svg", "thumb": "lithuania.webp",
      "p": "Evaluation of primary education and basic (lower) education programmes, with exception ..."
    },
    "portugal": {
      "name": "Portugal", "slide": "countryimag/potugalhd.jpg",
      "flag": "portugal.svg", "thumb": "portugal.jpg",
      "p": "The Ministry of Education (Direção-Geral da Educação – DGE) regulates the education ..."
    },
    "latvia": {
      "name": "Latvia", "slide": "countryimag/latvia2.jpeg",
      "flag": "latvia.svg", "thumb": "latvia.jpg",
      "p": "The Latvian education system consists of pre-school education, basic education,system knowledge of the country ..."
    },
    "croatia": {
      "name": "Croatia", "slide": "countryimag/croatia2.jpg",
      "flag": "croatia.svg", "thumb": "croatia.jpg",
      "p": "All children legally staying in Croatia have the right to enrol in kindergartens, preschool,technical skill of the knowledge ..."
    },
    "romania": {
      "name": "Romania", "slide": "countryimag/romaniahd.jpg",
      "flag": "romania.svg", "thumb": "romania1.webp",
      "p": "Romanian education continues to throw off the shackles of the past, although the because of the country in this important..."
    },
    "slovenia": {
      "name": "Slovenia", "slide": "countryimag/slovenia.jpg",
      "flag": "slovenia.svg", "thumb": "slovenia.jpg",
      "p": "There are three levels of education in Slovenia: primary, secondary and higher coversation..."
    },
    "ukraine": {
      "name": "Ukraine", "slide": "countryimag/ukrainhd.jpg",
      "flag": "ukraine.svg", "thumb": "ukraine.jpg",
      "p": "Education in the Ukraine is compulsory from age 6 to age 15. The first 4 years are at ..."
    },
    "albania": {
      "name": "Albania", "slide": "countryimag/albania.jpg",
      "flag": "albania.svg", "thumb": "albania.jpg",
      "p": "The Albanian Education System is organized in two main levels: Pre-University Education System..."
    },
    "oman": {
      "name": "Oman", "slide": "countryimag/oman.jpg",
      "flag": "omanflagimg.png", "thumb": "oman.jpg",
      "p": "The Oman Education System is very proud of knowledge Systems in proud of the country to most important country... "
    },
    "qatar": {
      "name": "Qatar", "slide": "countryimag/qatar.jpg",
      "flag": "qatarflagimg.png", "thumb": "qatar",
      "p": "The qatar country is most important country and programmes technical knowledge most important to the qatar country ...  "
    },
    "saudi_arabia": {
      "name": "saudi arabia", "slide": "countryimag/saudihd.jpg",
      "flag": "saflagimg.png", "thumb": "saudi.jpg",
      "p": "The Saudi Arabia Education System is compulsory most important learning programmes in this vacation moment of the cool.."
    },
    "kuwait": {
      "name": "Kuwait", "slide": "countryimag/kuwait.jpg",
      "flag": "kuwaitflag.img", "thumb": "kuwait.jpg",
      "p": "The Kuwait country is continues all most important works in working to in this country is weather of system is on the country..."
    },
    "bahrain": {
      "name": "Bahrain", "slide": "countryimag/bahrain.jpg",
      "flag": "bahrainflagimg.png", "thumb": "bahrain.jpg",
      "p": "The Bahrain Education System is organized of the technical primary Pre-University Education is vacation is like to much of coutry...."
    }
  
 }
}
window.onscroll = function(){
  let y = window.scrollY, distance = window.innerHeight / 2;
  Qa('.anime').map(i => {
    let t = i.offsetParent.nodeName === 'BODY' ? i.offsetTop : i.offsetParent.offsetTop + i.offsetTop, t1;
    t1 = t - distance - 300; if (t1 < y) { i.classList.add('active'); i.classList.remove('anime');}
  });
  Q('header').classList[y > distance ? 'add' : 'remove']('a');
}
function gcc(){
  return `<li><a href="./country.html?oman">Oman</a></li>
      <li><a href="./country.html?qatar">Qatar</a></li>
      <li><a href="./country.html?saudi_arabia">Saudi Arabia</a></li>
      <li><a href="./country.html?uae">UAE</a></li>
      <li><a href="./country.html?kuwait">Kuwait</a></li>
      <li><a href="./country.html?bahrain">Bahrain</a></li>`
}
function swe(){
  return `<li><a href="./country.html?poland">Poland</a></li>
      <li><a href="./country.html?malta">Malta</a></li>
      <li><a href="./country.html?hungary">Hungary</a></li>
      <li><a href="./country.html?lithuania">Lithuania</a></li>
      <li><a href="./country.html?sweden">Sweden</a></li>
      <li><a href="./country.html?portugal">Portugal</a></li>
      <li><a href="./country.html?germany">Germany</a></li>
      <li><a href="./country.html?latvia">Latvia</a></li>
      <li><a href="./country.html?slovakia">Slovakia</a></li>`
}
function ero(){
  return  ` <li><a href="./country.html?croatia">Croatia</a></li>
      <li><a href="./country.html?romania">Romania</a></li>
      <li><a href="./country.html?slovenia">Slovenia</a></li>
      <li><a href="./country.html?ukraine">Ukraine</a></li>
      <li><a href="./country.html?albania">Albania</a></li>`
}

function links(){
  return `<li><a href='./'>Home</a></li>
  <li><a href='./about.html'>About</a></li>
  <li><a href="./country.html?canada">Canada</a></li>
<li>
    <a href="#">GCC</a>
    <ul class="mega">
      
      ${gcc()}
    </ul>
  </li>
  <li><a href="./country.html?singapore">Singapore</a></li>
  <li><a href="./country.html?malaysia">Malaysia</a></li>
  <li><a href="./country.html?australia">Australia</a></li>
  <li><a href="./country.html?uk">UK</a></li>
  <li><a href="./country.html?new_zealand">New Zealand</a></li>
  
  <li>
    <a href="#">Schengen</a>
    <ul class="mega">
      ${swe()}
    </ul>
  </li>
  <li>
    <a href="#">Eurozone</a> 
    <ul>
     ${ero()}
    </ul>
  </li>
  <li><a href='./services.html'>Services</a></li>`;
}
Q('header').innerHTML = `<div class="container">
<div class="main-nav">
  <a href="./" class="logo">
    <img src="flying logo copy.png" style="width:120px;" alt="">
    <h3 class="ing" style="margin-top:-90px; margin-left:100px; color:black;">Flying World Migration</h3>
  </a>
  <button id="bor" class="fa fa-bars" ></button>
  <nav>
   <ul class="nav nav-bar" id="nav1">
      ${links()}<li><a href="./contact.html">Contact</a></li>
    </ul>
  </nav>
</div>
</div>`;
G("bor").onclick = function(){
  G("nav1").classList.toggle('active');
  G('bor').classList.toggle('fa-bars');
  G('bor').classList.toggle('fa-times');
}
document.body.insertAdjacentHTML('afterbegin',`<a href="https://api.whatsapp.com/send?phone=9790763669" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"></i></a>`)
Q('footer').innerHTML = ` <div class='row justify-content-between w-100 foot-top'>
<div class='col-md-4 col-12.f-pad1'>
  <div class='single-footer-widget w1' style="padding-right: 1em;">
    <div class='our-company-info'>
      <h4 class='footer-logo title'>About Us</h4>
      <div class='text'><p>We support immigration and make it smooth for the people who need it. The world becomes richer when people freely move from one culture to another to enrich each other!
        STAY CONNECTED</p></div> 
    </div>      
  </div>
</div>
<div class='col-md-4 col-12.f-pad2'>
  <div class='single-footer-widget w2'>
      <h4 class='title'>Useful Links</h4>
      <ul class='countries-links df fw p-0 nav-bar'>
        ${links()}
      </ul>
      <div class="df aic jcsb" style="border-top:1px solid #fff5;padding-top: 5px;">
        <h5 style="margin: 0;padding-right:1rem;">Follow Us</h5>
        <div id="footer_social">
<a target="_blank" href="https://www.facebook.com/FlyingWorldMigration" class="fab fa-facebook-f"></a>
      <a target="_blank" href="https://www.instagram.com/flyingworldmigration/" class="fab fa-instagram"></a>
      <a target="_blank" href="https://twitter.com/FlyingworldMigration" class="fab fa-twitter"></a>
      <a target="_blank" href="#" class="fab fa-linkedin"></a>
</div>
      </div>
  </div>
</div>
<div class='col-md-4 col-12.f-pad3'>
  <div class='single-footer-widget w3'>
    <h4 class='title'>Contact</h4>
    <ul class='footer-contact-info'>
      <li>
        <span class='ficon fa fa-globe'></span>
        <div class='text'>No.27, Wast Mada Street,Thirumullaivoyal, Chennai, Thiruvallur,
        Tamil Nadu, 600062.</div>
      </li>
      <li>
        <span class='ficon fa fa-envelope'></span>
        <a class='text' href='mailto:info@flyingworldmigration.com'>info@flyingworldmigration.com</a>
      </li>
      <li class='df jscb'>
        <div style='margin-right:10px;'>
    <span class='ficon fas fa-mobile-alt'></span>
    <a class='text' href='te:+919790763669'>+91 97907 63669</a>
  </div>
      </li>
    </ul>                  	  
  </div>
</div>
</div>
<hr>
<div class='copy tac'>
Flying World Migration © 2022 All Right Reserved <a href='https://exposureindia.co.in'>Exposure India</a>
</div>`;



function homeSlide(data){
  let ar =[],i=0;
  for(let id in data){
    let o =data[id];
    ar.push(
      ` <div class="carousel-item ${i===0?'active':''}">
        <img src="${o.slide}" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <p>WE ARE ALWAYS READY TO HERE YOU</p>
          <h1><strong>Easy</strong> Way To Get <strong>Visa</strong></h1>
          <div class="button-1">
            <a href="country.html?${id}" class="btn btn-primary">Book a Consultation!</a>
          </div>
        </div>
      </div>`
      );
    i++;
  }
  G('home_slide').innerHTML =ar.join('');
}



function renderSlide(data){
  let ar = [];
  for(let id in data){
    let o = data[id];
    ar.push(
      `<li class="splide__slide">
         <div class="coun-body">
          <div class="coun-card">
            <img class="coun-img" src="img/thumb/${o.thumb}" alt="">
            <img class="coun-icon" src="flag/${o.flag}" alt="">
          </div>
          <div class="coun-text">
              <h4>${o.name}</h4>
              <p>${o.p}</p>
              <a href="country.html?${id}">Read More</a>
          </div>
         </div>
          </li>`
    );
  }
  G('country_slide').innerHTML = `<div class="splide__track"><ul class="splide__list" >${ar.join('')}</ul></div>`;
  new Splide( '.splide1',{
      type : 'loop',perPage: 3,pagination:false,autoplay:true,
      rewind:true,rewindSpeed:4000,perMove:1,
      breakpoints:{
        900:{perPage:2},
        600:{perPage:1},
      
      }
    } ).mount();
}

function message(e) {
   e.preventDefault();
   let f = e.target, ip = qa(f, '[name]'), bt = q(f, 'button'),o = {};
   bt.disabled = true;
   o.type = f.dataset.type;
   ip.map(v => {o[v.name] = v.value;});
   ajax('mail.php', `o=${JSON.stringify(o)}`).then(function (res) {
     let r = JSON.parse(res);bt.disabled = false;
     if (r.c) {f.reset(); }
     alert(r.m);
   });
}


if (document.forms[0]) { document.forms[0].onsubmit = message }

if(document.body.id === 'country_page'){
  let e = document.querySelector(`.sidebar [href="./country.html${location.search}"]`);
  let k = e.classList.contains('se') ? e.parentElement : e.parentElement.parentElement.parentElement;console.log(k);
  k.classList.add('act');
}


document.addEventListener('DOMContentLoaded', function () {
  let loader = Q('.loader-wrap');
  loader.classList.add('anim');
  setTimeout(() => {
    loader.style.display = 'none';
    Qa('.init').map(i => { i.classList.add('active'); i.classList.remove('anime') });
  }, 500);
  let map = G('gmap');
  if (map) {
    map.onload = () => map.parentElement.classList.remove('lazy');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.406611107672!2d80.1293253141368!3d13.136732514789259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262ef7f7f373f%3A0x60e7d318fedbc8a!2s27%2C%20W%20Mada%20St%2C%20Tirumullaivayal%2C%20Subramanya%20Bharathi%20Nagar%2C%20Thirumullaivoyal%2C%20Chennai%2C%20Tamil%20Nadu%20600062!5e0!3m2!1sen!2sin!4v1652706328458!5m2!1sen!2sin';
  }
  let data = country();
  if(G('country_slide')){renderSlide(data)}
  if(G('CLIST')){renderCList(data)}
  if(G('country_page')){c_load(data)}
  if(G('home_slide'))homeSlide(data);
});