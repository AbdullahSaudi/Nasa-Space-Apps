/*Stars Function*/
function stars (){
    let count = 500;
    let scene = document.querySelector('.scene');
    let i = 0;

    while(i < count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight );
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 5+duration+'s';
        star.style.animationDelay = duration+'s';

        scene.appendChild(star);
        i++
    }
}

stars();

/*Typing Text Function*/
let i = 0;
let text = `Let's Go On A Journey Around the Sun`

function typing() {
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60)
    } 
}
typing();

/*Clouds Motion*/

let cloud1 = document.getElementById('cloud1')
let cloud2 = document.getElementById('cloud2')

window.onscroll = function(){
    let valuey = scrollY
    cloud1.style.left = -valuey*1.7 + 'px'
    cloud2.style.right = -valuey + 'px'
}


/*Text Motion*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

