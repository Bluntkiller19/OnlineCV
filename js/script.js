let into = document.querySelector('.intro');
let load = document.querySelector('.load-header');
let loadSpan = document.querySelectorAll('.load');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        loadSpan.forEach((span, idk)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idk + 1) * 400)
        });

        setTimeout(()=>{
            loadSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },5000)

        setTimeout(()=>{
            into.style.top = '-100vh'
        }, 5500)
    })
})
