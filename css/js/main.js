document.addEventListener('click',function(e){
  if(e.target.closest('.burger')){var n=document.querySelector('nav.main');if(n)n.classList.toggle('open');}
});
function alsapaCalc(){
  var a=parseFloat((document.getElementById('cArea')||{}).value)||0;
  var t=parseFloat((document.getElementById('cTh')||{}).value)||200;
  var pal={100:96,150:64,200:48,240:40,300:32,400:24}[t]||48;
  var m3=a*(t/1000), bl=m3/(0.6*0.3*(t/1000)), pl=bl/pal;
  var set=function(id,v){var el=document.getElementById(id);if(el)el.textContent=v;};
  set('oM3',Math.round(m3*10)/10); set('oBl',Math.round(bl)); set('oPal',Math.ceil(pl));
  var b=document.getElementById('cBtn');
  if(b)b.href='https://wa.me/77009985819?text='+encodeURIComponent('Здравствуйте! Площадь стен '+a+' м², толщина '+t+' мм. Нужно ≈'+Math.round(bl)+' блоков ('+Math.ceil(pl)+' поддонов). Рассчитайте стоимость с доставкой.');
}
function alsapaLead(e){
  e.preventDefault();
  var f=e.target;
  var name=(f.querySelector('[name=name]')||{}).value||'';
  var phone=(f.querySelector('[name=phone]')||{}).value||'';
  var txt='Здравствуйте! Заявка с сайта.\nИмя: '+name+'\nТелефон: '+phone+'\nПрошу перезвонить и проконсультировать по газоблокам.';
  window.open('https://wa.me/77009985819?text='+encodeURIComponent(txt),'_blank');
  return false;
}
document.addEventListener('input',function(e){if(e.target.id==='cArea'||e.target.id==='cTh')alsapaCalc();});
document.addEventListener('DOMContentLoaded',function(){if(document.getElementById('cArea'))alsapaCalc();});

/* ===== v2 polish: reveal, counters, mobile bar ===== */
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',function(){
  var rev=[].slice.call(document.querySelectorAll('.blk, .fig'));
  rev.forEach(function(el){el.classList.add('reveal');});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    rev.forEach(function(el){io.observe(el);});
  } else { rev.forEach(function(el){el.classList.add('in');}); }
  function fmt(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ');}
  function run(el){var t=+el.getAttribute('data-count'),s=performance.now(),dur=1300;
    function step(now){var p=Math.min((now-s)/dur,1);el.textContent=fmt(Math.floor((1-Math.pow(1-p,3))*t));if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);}
  var cnts=[].slice.call(document.querySelectorAll('[data-count]'));
  if('IntersectionObserver' in window){
    var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io2.unobserve(e.target);}});},{threshold:.5});
    cnts.forEach(function(el){io2.observe(el);});
  } else { cnts.forEach(run); }
  if(!document.querySelector('.mbar')){
    var bar=document.createElement('div');bar.className='mbar';
    bar.innerHTML='<a href="tel:+77009985819"><i class="ti ti-phone"></i>Звонок</a>'+
      '<a class="wa" href="https://wa.me/77009985819?text='+encodeURIComponent('Здравствуйте! Нужна консультация по газоблокам.')+'"><i class="ti ti-brand-whatsapp"></i>WhatsApp</a>'+
      '<a href="#calc"><i class="ti ti-calculator"></i>Расчёт</a>';
    document.body.appendChild(bar);
  }
});
