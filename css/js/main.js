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
