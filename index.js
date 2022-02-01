// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(fun = "go to the office"){
    return `This Monday, I will ${fun}.`;
}

function wrapAdjective(){

}
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function doesMondayWork(activity = `bathe my dog`){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = `go to the office`){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(result = `*`){
    const greeting = `You are`
    return function 
innerFunction(emphatic = `a hard worker`){
    return `${greeting} ${result}${emphatic}${result}!`
};
}

// function mondayWork(activity = `work from home`){
//     return `This Monday, I will ${activity}.`
// }


// function wrapAdjective(person = `special`){
//     const result = "*";
//     return function(){
//         const emphatic = "a hard worker";
//         return function(){
//         return `You are ${result} ${emphatic} ${person}`
//         };

//     };
// } This is inncorret



// function wrapAdjective(result = `*`){
//     return function 
//     innerfunction(emphatic = `a hard worker`){
//         return 'You are ${result} {'
//     }
// } this is incorrect

// function wrapAdjective(greeting, msg = `You are`){
//     const innerFunction = function (result, emphatic = `a hard worker`){
//         return `${greeting} ${result} ${msg} ${emphatic}!`;
//     return innerFunction(`*`)
//     }
// } this is incorrect maybe?

// function wrapAdjective(result = `*`){
//     const greeting = `You are`
//     return function 
// innerFunction(emphatic = `a hard worker`){
//     return `${greeting} ${result}${emphatic}${result}!`
// };
// }

// function wrapAdjective(result = `||`){
//     const open = `You are`
//     return function
//     innerFunc(emphatic = `a dedicated programmer`) {
//         return `${open} ${result}${emphatic}${result}!`
//     }
// } => You are || a dedicated programmer||!