// урок 241
// // задание 1
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3')
// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

// // задание 2

// let p1 = document.querySelector('#block p');
// console.log (p1)

// //  задание 3

// let p1 = document.querySelector('.block p')
// console.log(p1)

// // задание 4
// let www = document.querySelector('.www')
// console.log(www)

// урок 242
// // задание 1

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', function(){alert('1')});
// button2.addEventListener('click', function(){alert('2')});
// button3.addEventListener('click', function(){alert('3')})

// урок 243

// // задание 1

// function func1() {
// 	console.log(1);
// }
// function func2() {
// 	console.log(2);
// }
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// урок 244

// //задание 1

// function func() {
// 	console.log('message');
// }
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// урок 245

//задание 1

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// урок 246
//задание 1
// let button = document.querySelector('#button');
// button.addEventListener('dblclick', function(){
//     alert('ты лох')
// })

//задание 2
// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function(){
//     alert('ты лох')
// })

// задание 3
// let button = document.querySelector('#button');
// button.addEventListener('mouseout', function(){
//     alert('ты лох')
// })

// задание 4
// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function(){
//     console.log('ты лох')
// })
// button.addEventListener('mouseout', function(){
//     console.log('ты не лох')
// })

//урок 247
//задание 1
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function () {console.log(elem.textContent)});

//задание 2
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {elem.textContent = '!!!'});

//задание 3
//  let elem1 = document.querySelector('#elem1');
//  let elem2 = document.querySelector('#elem2');
//  let button = document.querySelector("#button");
//  button.addEventListener('click', function(){
// console.log(Number(elem1.textContent) + Number(elem2.textContent))
//  })

//задание 4
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let button = document.querySelector("#button");
// button.addEventListener('click', function(){
// elem4.textContent = (Number(elem1.textContent) + Number(elem2.textContent) + Number(elem3.textContent))
// })

//задание 5
//  let elem = document.querySelector('#elem');
//  let button = document.querySelector('#button');
//  button.addEventListener('click', function(){
//     elem.textContent = Number(elem.textContent) + 1;                   
//  })

//задание 6
//  let elem = document.querySelector('#elem');
//  let button = document.querySelector('#button');
// button.addEventListener('click', ()=>{
// elem.textContent = elem.textContent + '!'                   
// })

// урок 248
// задание 1
//  let elem = document.querySelector('#elem');
//  let button = document.querySelector('#button');
//  button.addEventListener('click', function(){
// console.log( elem.innerHTML )                
// })

// задание 2
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click',
// function(){
//     elem.innerHTML = '<b> meow </b>'
// }
// )

// урок 249


// задание 1
// let elem = document.querySelector("#elem");
// let button = document.querySelector('#button');
// button.addEventListener('click', () => alert(elem.type))

// задание 2
// let elem = document.querySelector("#elem");
// let button = document.querySelector('#button');
// button.addEventListener('click', () => elem.type = "submit")


// задание 3
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function () {
// elem.innerHTML = link.href
// });

// задание 4
// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
// link.innerHTML = link.innerHTML + "(" + link.href +")"
// })

// // задание 5
// let button = document.querySelector('#button');
// let img = document.querySelector("#img");
// let elem = document.querySelector('#elem');
// button.addEventListener('click',
// () => elem.textContent = img.src)

// задание 6
// let button = document.querySelector('#button');
// let img = document.querySelector("#img");
// button.addEventListener('click', () => img.width = 300
// )

// задание 7
// let button = document.querySelector('#button');
// let img = document.querySelector("#img");
// button.addEventListener('click', () => img.width = img.width * 2
// )

// УРОК 250
//  задание 1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => elem.value = ' лох')

//  задание 2
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let text = document.querySelector('#text')
// button.addEventListener('click', ()=> text.textContent = elem.value)

//  задание 3
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', ()=> elem2.value = Math.pow(elem1.value, 2))

//  задание 4
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     let a = elem1.value;
//     let b = elem2.value;
//     elem1.value =b;
//     elem2.value =a;
// })

//  задание 5
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let button = document.querySelector('#button');
// let text = document.querySelector('#text');
// button.addEventListener('click', function(){
//     text.textContent = ((Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) / 5)
// })

//  урок 251
//  задание 1
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', ()=> elem.value = 1);
// elem.addEventListener('blur', ()=> elem.value = 2)

//задание 2
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', ()=> elem.value = elem.value * elem.value)

//задание 3 
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', ()=> elem.value = "");

//  урок 252
//  задание 1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', ()=> alert(elem.className))

//задание 2
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', ()=> elem.className = meow)

//задание 3 
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     let a = elem.className;
//     let arr = a.split(' ');
//     console.log(arr)
// })

//  урок 253

//задание 1
// let image = document.querySelector('#image');
// console.log(image.src);

// console.log(document.querySelector('#image').src)
//задание 2
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);

// let image = document.querySelector('#image')
// console.log(image.src);
// console.log(image.width);
// console.log(image.height)

//  урок 254

//  задание 1
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function(){this.value = 1});
// elem.addEventListener('blur', function(){this.value = 2})
//зaдание 2
// let button = document.querySelector('#button')
// button.addEventListener('click', function(){
//     this.value = +this.value + 1
// })

//  урок 255
//  задание 1
// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let elem4 = document.querySelector('#elem4')
// let elem5 = document.querySelector('#elem5');

// function func(){
//    this.textContent = this.textContent + '!'
// }
// elem1.addEventListener('click', func )
// elem2.addEventListener('click', func )
// elem3.addEventListener('click', func )
// elem4.addEventListener('click', func )
// elem5.addEventListener('click', func )

//  задание 2
// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')

// function func(){
//     this.value = this.value * this.value
// }
// elem1.addEventListener('blur', func)
// elem2.addEventListener('blur', func)
// elem3.addEventListener('blur', func)

//  урок 256
//  задание 1
// let elems = document.querySelectorAll('.aaa')
// let button = document.querySelector('#button')
// button/addEventListener('click', function(){
//     for(let elem of elems){
//         elem.textContent = 'text'
//     }
// } )
//  задание 2