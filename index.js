
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

/* for (let i = 0; i < weeklyExpenseQuestions.length; i++){
    let weqAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses += weqAnswer
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    let meqAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses += meqAnswer
}

for (let i = 0; i < annualExpenseQuestions.length; i++){
    let aeqAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses += aeqAnswer 
}*/
/* console.log(weqAnswer) */


// ********* REVERSE LOOP  **********

/* for (let i = weeklyExpenseQuestions.length - 1; i >=0; i--){
    let weqAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses += weqAnswer
}

for (let i = weeklyExpenseQuestions.length - 1; i >=0; i--){
    let meqAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses += meqAnswer
}

for (let i = weeklyExpenseQuestions.length - 1; i >=0; i--){
    let aeqAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses += aeqAnswer
} */


// ********* WHILE LOOP  **********

let weeklyIndex = 0
while (weeklyIndex < weeklyExpenseQuestions.length){
    let weqAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[weeklyIndex]))
    weeklyExpenses += weqAnswer
    weeklyIndex++
}

let monthlyIndex = 0
while (monthlyIndex < monthlyExpenseQuestions.length){
    let meqAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[monthlyIndex]))
    monthlyExpenses += meqAnswer
    monthlyIndex++
}

let annualIndex = 0
while (annualIndex < annualExpenseQuestions.length){
    let aeqAnswer = parseFloat(window.prompt(annualExpenseQuestions[annualIndex]))
    annualExpenses += aeqAnswer
    annualIndex++
}