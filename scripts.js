//null

// let retiremwnt;

// console.log(retiremwnt);

// operators +, -, *, /, %

//increment
// let num= 3
// num--;
// console.log(num)

// let x= 10;
// let y = 6;
// console.log(x -= y);

// // comparisom
// let x= 10;
// let y = 10;
// // console.log(x >= y);
// console.log(y === x);

// logical operator &&, ||, !

// let country = 'Nigera';
// let age = 10;

// if (country == 'Nigeria' || age >=18 ){
//     console.log('you can vote')
// }else{
//     console.log('you cannot vote');
// }

// tanery operator

// let score=49;

// console.log(score != 50 ? 'Nice' :'Nt Nice' )


// condition

// if (condition){
//     expression
// }else if(condition){
//     expression
// }else{

// } 
// let tunde = new_score.toUpperCase()
// console.log(tunde)

// if (tunde == 'A'){
//     console.log('Excellent')

// }else if(tunde =='B'){
//     console.log('Gade B')

// }else if (tunde == 'C'){
//      console.log('Grade C')
// }else{
//     console.log('You fail')
// }


// let score=parseInt(prompt('Enter Score'))


// if (score <=90 && score >=100){
//     console.log('Grade A')
// }else if (score <=80  && score >=89){
//     console.log('Grade B')
// }else if (score <=60 && score >=79){
//     console.log('Grade C')
// }else if (score <=40 && score >=59){
//     console.log('Grade D')
// }else if (score <= 25 && score >=39){
//     console.log('You fail')
// }else{
//     console.log('Unknown Result')
// }


// let num1 =30;
// let num2 =50;
// let num3=60;

// if (num1 > num2 && num1 > num3){
//     console.log('Num1 is greater');

// }else if (num2 > num1 && num2 > num3){
//     console.log('Num2 is greater');
// }else {
//     console.log('Num3 is greater')
// }
// let grade = 'u'
// grade= grade.toUpperCase()

// // switch case


// switch(grade) {
//     case 'A':
//         console.log('Excellent')
//     break;
//     case 'B':
//         console.log('Good');
//         break;
//     case 'C':
//         console.log('You try');

//     case 'D':
//         console.log('Pass');
    
//     case 'E':
//         console.log('Fail');
//     default:
//         console.log('Unlnown Result')
        
// }


// let score = parseInt(prompt('Enter your score'))


// if (score >= 90 && score <= 100){
//     console.log('Execellent');
// }else if (score >=70 && score <=89){
//     console.log('Good Results');
// }else if (score >=59 && score <=69){
//     console.log('Keep it up');

// }else if (score >= 35 && score <= 58){
//     console.log('Bad Results');
// }else{
//     console.log('Not found');
// }


// switch (true){
//     case score>= 90 && score <= 100:
//         console.log('Excellent');
//         break;
//     case score >= 70 && score <= 89:
//         console.log('Good Results');
//         break;
//     case score >= 50 && score <=69:
//         console.log('Pass')
//         break;
//     case score >= 30 && score <=49:
//         console.log('fail')
//         default:
//             console.log('Unknown');
// }

// lopps

// while loop
// let digit = 15;
// product=10

// while (digit <=29){
//     digit = digit + 1
//     if (digit % 2 == 0){
//         console.log('buzz');
//     }else if (digit % 3 == 0) {
//         console.log('fizz');
//     }else if (digit % 5 == 0) {
//         console.log('pizz')
//     }
//     console.log(digit);
 // console.log(`${product} x ${digit} ${product * digit}`);

// }



// for(i = 15 ; i <= 30 ; i++){
//     // console.log(`${product} x ${i} ${product * i}`)
//     if (i % 2 == 0){
//         console.log('buzz');
//     }else if (i % 3 == 0) {
//         console.log('fizz');
//     }else if (i % 5 == 0) {
//         console.log('pizz')
//     }
//     console.log(i);
// }

// let  record = ["this" , "is",  "the",  "time", 'to', 'attend', 'python', "training"]
// // bring out the words that start from 't'

// for (let i of record) {
//     if (i[0]== 't'){
//         console.log(i);
//     }
    
// }

// function greet(){
//     console.log('good morning')
// }
// greet()
// greet()
// greet()

// greet()
// greet()
// greet()
// greet()
// greet()


// function read(x, y){
//     console.log(x + y)
// }
// read(10, 30);
// read(50);
// function tunde(a, b){
//     return a + b
// }
// console.log(tunde(200, 900));

// let first_name='Tunde';
// let last_name= 'Adegoke';

// function fullname(){
//      console.log(`Mr/miss/mr ${first_name} ${last_name} welcome to tech 365`)
// }
// fullname()


// function naming(frist_name, last_name){
//     return ` Mr/miss/mrs ${frist_name} ${last_name} welcome to tech 365`
// }
// console.log(naming('tunde', 'Adegoke'))


// function greet(){
//     console.log('good afternoon')
// }
// setTimeout(()=>{
//    greet() 
// },9000)

// setInterval(() => {
//    greet() 
// }, 4000);

// let num=Math.floor(Math.random() * 5);
// console.log(num)


// let num = Math.floor(Math.random() * 5);
// let guess = 3;

// if (guess > num) {
//     console.log('Out of Range')
// }else if (guess < num) {
//     console.log('Below Range')
// }else{
//     console.log('correct')
// }

// let money = 50
// console.log(money.toPrecision(4))


// let name =prompt('Enter name')
// let salary=parseInt(prompt('Enter salary'))
// let tax= (salary / 100)*7
// console.log(`My name is ${name} and my curent salary is ${salary} which made my tax to be ${tax}`)


// const students = [
//      { name: "Wale", grade: 10 }, 
//   { name: "Mary", grade: 15 },  
// { name: "John", grade: 19 },
//     { name: "Audu", grade: 9 },
//  ];

//  for (let i of students) {
//     if (i.grade >= 10){
//         console.log(i);
//     }
   
//  }

// from the above, get all the names of the students whose is >= 10

// higher

// arrow function

// let tunde = x => x * x;
// console.log(tunde(10));
// map function
// function tboy (x){
//     return x % 2 ==0
// }
// num =0
// let test = [20, 40, 15, 17, 29]

// console.log(test.map((x)=> x * x))

// for (let i of test) {
//     // num+=i
//     if (i.map((x)=> x * x))

//     console.log(i)
// }
   
//     console.log(num);
//  for (let i in test) {
//     if (i.map((x)=> x * x)){
//         console.log(i);
//     }
//  }


// filter function

// console.log(test.filter((w)=> w % 2 == 0) );

//reduce function

// console.log(test.reduce((prev, next)=> prev + next))

// DOM

// let demo = document.getElementsByClassName('demo')[0];
// let demo = document.querySelector('.demo');
// let demo1= document.getElementById('demo1');
// let demo1 = document.querySelector('#demo1');

// let tun = document.getElementsByClassName('u')[0];

// tun.innerHTML='here we are';

// for (let i of tun){
// //    i.innerHTML = 'red';
// }
// i[1].innerHTML = 'Welcome'

// let my = document.createElement('p');
// my.innerHTML = 'Welcome here';
// // my.appendChild('h1');
// document.body.append(my);





// demo.innerHTML='Welome to tech 365';
// demo.style.backgroundColor='black';
// demo.style.color='white';
// demo.style.padding='5px';
// demo1.textContent='Welome to tech';

//localStorage
// localStorage.setItem('payment', 1000)
// let x= localStorage.getItem('payment');

// console.log(x)
// localStorage.removeItem('payment');


// let theme= {
//     color: 'green',
//     backgroundColor: 'red',
//     fontSize: '20px'
// }

// localStorage.setItem('user', JSON.stringify(theme))
// console.log(JSON.parse(localStorage.getItem('user')));
// let count =0;

// let plus= document.querySelector('.plus');
// let display= document.querySelector('.display');
// let minus= document.querySelector('.minus');


// plus.addEventListener('click', ()=>{
//     console.log('plus clicked')
//     display.innerHTML=++count;
// })
// minus.addEventListener('click', ()=>{
//     console.log('minus clicked')
//     display.innerHTML=--count;
// })


//   const url = 'https://api.github.com/users'

// const getApi = async ()=> {
//     const response= await fetch(url)
//     const data= await response.json()
//     console.log(data)

// }
// getApi()


// destructuring
// let person = {
//     firstName: 'John',
//     secondName: 'Tunde',
//     age: 21
// }

// console.log(person['firstName'])

// const {firstName, secondName, age} = person
// console.log(age)

// spread operator
// let week=['friday', 'saturday', 'sunday']
// let day= ['monday', 'tuesday', 'wednesday', 'thursday', ...week ]
// console.log(day)

// let name1=prompt('Enter firstname')
// let name2=prompt('Enter secondname')
// function welcome(name1, name2) {
//     // console.log(`${name1} ${name2}`)
//     return `the current user on this paltform name is  ${name1} ${name2}`

// }
// console.log(welcome(name1, name2))


// let on = document.querySelector('.on')
// let display=document.querySelector('.display')
// let off = document.querySelector('.off')


// on.addEventListener('click', () => {
//     console.log('btnClicked')
//     display.innerHTML = '<img src="https://www.w3schools.com/js/pic_bulbon.gif" alt="">'
// })

// off.addEventListener('click', () => {
//     console.log('btnClicked')
//     display.innerHTML = '<img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="">'
// })

// let color=['red', 'blue', 'green', 'yellow', 'purple', 'black', 'pink', 'yellowgreen']

// let colors=[1, 2, 3, 4, 5, 'A', 'B', 'C', 'D', 'F']


// let display=document.querySelector('.display')
// let btn = document.querySelector('.btn')
// let hexColor=tunde();

// btn.addEventListener('click', () => {
// let num = '#';
//     for (let i = 1; i<=6; i++) {
//         num += tunde()
//     }
    // console.log('you clicked')
    // let currentColor=tunde();
//     document.body.style.backgroundColor=num;
//     display.innerHTML=num;

// })



// function tunde(){
//     return Math.floor(Math.random() * colors.length); 
// }
// tunde()
// const display= document.querySelector('.input1')
// const btn = document.querySelectorAll('button')


// btn.forEach((e) => {
//     e.addEventListener('click', (x) => {
//         let btnClicked = x.target.value;
// if (btnClicked === '='){
//     display.value=eval(display.value)
// }else if(btnClicked === 'c'){
//     display.value=''
// }else{
//     display.value += btnClicked
// }
//     })
    
// })

// function tunde(x){
// let btnClicked = x.target.value;
// if (btnClicked === '='){
//     display.value=eval(display.value)
// }else if(btnClicked === 'c'){
//     display.value=''
// }else{
//     display.value += btnClicked
// }

// }
setInterval(setClock, 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')



function setClock(){
    const currentDate= new Date()
   
 const secondRatio= (currentDate.getSeconds())/60

 const minuteRatio= (secondRatio+ currentDate.getMinutes())/60

 const hourRatio= (minuteRatio + currentDate.getHours())/12

 setRotation(secondsHand, secondRatio)
 setRotation(hourHand, hourRatio )
 setRotation( minutesHand, minuteRatio )


}
function setRotation(e, y){
e.style.setProperty('--rotation', y * 360)
}
setRotation( )


