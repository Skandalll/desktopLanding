const buttonPrev = document.querySelector('.button_prev')
const buttonNext = document.querySelector('.button_next')
const wrapper = document.querySelector('.wrapper')
const cards = document.querySelector('.slider_cards')
let currentTranslate = 0
let flag = false;
buttonNext.addEventListener("click",(e)=>{
    if(currentTranslate != -882){
        currentTranslate -= 294
        wrapper.style.transform = `translateX(${currentTranslate}px)`
        cards.style.bottom = `-300px`
    }else{
        console.log('ping')
    }
})
buttonPrev.addEventListener("click",(e)=>{
    if(currentTranslate != 0){
        currentTranslate += 294
        wrapper.style.transform = `translateX(${currentTranslate}px)`
        cards.style.bottom = `-300px`
    }else{
        console.log('ping')
    }
})