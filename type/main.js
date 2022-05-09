let mirror = document.querySelector('.mirror')
let text = document.querySelector('.h1')
let words = ['bird','dare','applied','courage','critic','fixture','fixture','wood','farewell','spare','elect','play','nonsense','domination','kit','kit','night','impress','crystal','radio','midnight','broccoli','passive','portrait','science','elapse','correspond','routine','tycoon','reign','sensitivity','sensitivity','reject','banish','graphic','reactor','pure','power','formation','cater','autonomy','waist','aware','interrupt','helpless','bleed','equal','formulate','liberal','feeling','hope','danger','heroin','qualify','reproduce','address','eliminate','figure','dump','sickness','plagiarize','hot','penny','refuse','broadcast','cooperation','foreigner','unit','frequency','clay','knowledge','panic','separate','theory','association','flood','glove','channel','achievement','bay','discreet','injury','nap','wreck']
let f = true
let random_harflar = setInterval(() => {
    if (f==true) {
        f = false
        let random = Math.floor(Math.random()*words.length)
        mirror.textContent = words[random]
    }
}, 100);

text.addEventListener('keyup',function (event) {
    switch (event.key) {
        case ' ':
            if(f==false&&text.value==mirror.textContent) {
                f = true
                text.value = ''
                mirror.style.backgroundColor = 'green'
             }
            if (f==false&&text.value!=mirror.textContent) {
                f = false
                mirror.style.backgroundColor = 'tomato'
            }
            break;
        case 'Enter':
                if(f==false&&text.value==mirror.textContent) {
                    f = true
                    text.value = ''
                    mirror.style.backgroundColor = 'green'
                 }
                if (f==false&&text.value!=mirror.textContent) {
                    f = false
                    mirror.style.backgroundColor = 'tomato'
                }
                break;
        
        default:
            break;
    }
            
})