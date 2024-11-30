let navDailog = document.getElementById('nav-dailog')

function handleMenu(){
    navDailog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionObserver = new IntersectionObserver((entries) => {
        const isIntersecting = entries[0].isIntersecting;

        //console.log(isIntersecting);

        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
    })

    intersectionObserver.observe(element)

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed

        let totalTranslate = 0;

        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`
    }
}

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const line4 = document.getElementById('line4')

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,false,1.1);

const faqElements = document.querySelectorAll('dt')
faqElements.forEach(element => {
    element.addEventListener('click',() => {
        const ddId = element.getAttribute('aria-controls')
        const ddElement = document.getElementById(ddId);

        const arrow = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    })
})