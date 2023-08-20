import { text } from 'express';
import './less/index.less'

// Your code goes here!

// 1.) "LOAD" Event**********

window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1');
    heading.textContent ="READY to go!"
    // console.log(heading);

// 2.) "COPY" Event**********

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
           heading.textContent += text
             console.log(text)
        })
    })

    // 3.) "CLICK" Event***************//
   document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
   })
 
   // 4.) "DOUBLE CLICK" Event**********
  document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
  })

  //5.) "keydown" Event*************
  window.addEventListener('keydown', evt => {
    if(evt.key == 6) {
        document.body.innerHTML = '<h1>YOU PRESSED 6</h1>'
    }
  })

  //6.) "mousemove" Event************
  document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt

  })

//   7.)  "mouseenter" Event *********
//   8.)  "mouseleave" Event *********
  const destinations = document.querySelectorAll('.destination')
  for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500)
     })
  }
}




