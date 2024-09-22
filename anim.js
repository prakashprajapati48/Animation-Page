let sr = document.querySelectorAll('p')
console.log(sr)
setTimeout(() => {
    sr[1].style.animationName = "scrolling"
    sr[2].style.animationName = "scrolling"
    sr[3].style.animationName = "scrolling"
}, 2000);

let secp = document.getElementById('secondp')
let content1 = document.getElementById('content')

let i1 = 0;
const teadd = () =>{
    let content10 = `Build Website & Page
                    I have developed valuable skills such as relevant skills - HTML, wordpress, teamwork, problem - solving
                    that I
                    believe will be beneficial in the web design role.`
    let content11 = document.getElementById('content')

    if (i1 < content10.length) {
        content11.innerHTML += content10[i1];
        i1++;
        setTimeout(teadd, 500)
    }
}
let secondp = document.getElementById('secondp')
secondp.addEventListener('mousemove', teadd)