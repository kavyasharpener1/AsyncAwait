console.log("Person 1 : shows ticket");
console.log("Person 2 : shows ticket");

const preMovie = async () => {
const promiseWifeGettingTicks = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'))

const addButter = new Promise((resolve,reject)=> resolve('butter'))

const getColdDrinks = new Promise((resolve,reject)=> resolve('ColdDrinks'))

let ticket = await promiseWifeGettingTicks;

console.log(`Wife: I have the ${ticket}`);
console.log("Husband: We should go in");
console.log("Wife: No i am hungry");

let popcorn = await getPopcorn;

console.log(`Husband: I got some ${popcorn}`);
console.log("Husband: We should go in");
console.log("I need butter on popcorn");
let butter =await addButter;
console.log(`Husband: I got some ${butter} on popcorn`);
console.log("Husband: Anything else darling");
console.log('Wife: I need some cold drinks')

let coldDrinks = await getColdDrinks;

console.log(`Husband: I got you ${coldDrinks}`);
console.log("Wife : lets go we are getting late");
console.log('Husband :Thank you for the remainder');
return ticket;
}

preMovie().then((m)=> console.log(`person 3: shows ${m}`))

console.log("Person 4 : shows ticket");
console.log("Person 5 : shows ticket");

const newMovie = async ()=> {
    const promiseWifeGettingTicks = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve('ticket'),3000)
    })

    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'))

    const getCandy = new Promise((resolve,reject)=> resolve('candy'))
    const getCoke = new Promise((resolve,reject)=> resolve('Coke'))

    let ticket = await promiseWifeGettingTicks;
    let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke])
    console.log(`${popcorn}, ${candy}, ${coke}`);
    return ticket;
}

newMovie().then((m)=> console.log(`person 3: shows ${m}`))