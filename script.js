const media_sosial = document.getElementsByClassName('medsos');

for (let index = 0; index < media_sosial.length; index++) {
    media_sosial[index].addEventListener('click',function(){
        alert('buka Instagram');
    })
    
}

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click',function(){
    nav.classList.toggle('active');
})
