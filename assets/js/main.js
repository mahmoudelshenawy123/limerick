window.addEventListener('scroll' ,(e)=>{
  let homeSection =document.querySelector('#slider')
  let checkSection =document.querySelector('#check')
  let features =document.querySelector('#features')

  let homeAnchor =document.querySelector('.homeAnchor')
  let pagesAnchor =document.querySelector('.pagesAnchor')
  let featuresAnchor =document.querySelector('.featuresAnchor')

  // let homeSection =document.querySelector('#slider')
  let currentPosition =window.pageYOffset


  if(currentPosition >=homeSection.offsetTop && currentPosition <=checkSection.offsetTop ){
    homeAnchor.classList.add('activeAnchor');

    featuresAnchor.classList.remove('activeAnchor');

    pagesAnchor.classList.remove('activeAnchor');

  }
  if(currentPosition >=checkSection.offsetTop  && currentPosition<=features.offsetTop){
    homeAnchor.classList.remove('activeAnchor');

    featuresAnchor.classList.remove('activeAnchor');

    pagesAnchor.classList.add('activeAnchor');
  }
  if(currentPosition >=features.offsetTop  ){
    homeAnchor.classList.remove('activeAnchor');

    featuresAnchor.classList.add('activeAnchor');

    pagesAnchor.classList.remove('activeAnchor');
  }
  
  if(window.pageYOffset >=100){
    document.querySelector('header').classList.add('headerScrollStyle');
    document.querySelector('.scrollToTop').classList.add('showScrollIcon');
    
  }else{
    document.querySelector('header').classList.remove('headerScrollStyle')
    document.querySelector('.scrollToTop').classList.remove('showScrollIcon')

  }
})
let  scrollToTop =() => {
   window.scrollTo(0, 0);
}