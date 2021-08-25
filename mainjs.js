/*JS код на слайдер.
ВНИМАТЕЛЬНО ПРОВЕРЬ ЗНАКИ ";"*/
/*привязываем константы к DOM элементам*/

const prev=document.getElementById('btn-prev'),
      next=document.getElementById('btn-next'),
      slides=document.querySelectorAll('.slide'),
      dots=document.querySelectorAll('.dot');

let index=0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');        
    }
    slides[n].classList.add('active');
}

const preperedSlids = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index==slides.length-1) {
        index=0;
        preperedSlids(index);
        
    } else {
        index++;
        preperedSlids(index);
    }
}

const prevSlide = () => {
    if (index==0) {
        index=slides.length-1;
        preperedSlids(index);
    } else {
        index--;
        preperedSlids(index);
    }
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');        
    }
    dots[n].classList.add('active');
}

dots.forEach((item,indexDot)=> {
    item.addEventListener('click',()=>{
        index=indexDot;
        preperedSlids(index);
    })
})

let timeslids = setInterval(nextSlide, 2000);


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const tabs=document.getElementById('tabs'),
    content=document.querySelectorAll('.content');

const ChangeClass = el => {
    for(let i=0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab=e.target.dataset.btn;
    ChangeClass(e.target);
    for (let i=0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

/*JS для табов*/
const intab=document.getElementById('intab'),
    incont=document.querySelectorAll('.incontent');

const ChangeTab = el => {
    for(let i=0; i<intab.children.length; i++) {
        intab.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

intab.addEventListener('click', e=> {
    const currIntab = e.target.dataset.inbtn;
    ChangeTab(e.target);
    for (let i = 0; i < incont.length; i++) {
        incont[i].classList.remove('active');
        if(incont[i].dataset.incont === currIntab){
            incont[i].classList.add('active');
        }
    }
})

