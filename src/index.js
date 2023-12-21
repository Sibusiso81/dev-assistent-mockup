const boxes =document.querySelectorAll('.box');
anime({
  targets:boxes,
  scale:[
    {value:.1,easing:'linear',duration:500},
    {value:1,easing:'linear',duration:1000}
  ],
  delay:anime.stagger(100,{grid:[14,4],from:'last'}),
  loop:true
})