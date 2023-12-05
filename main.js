let calculateButton = document.querySelector('.calculate')
let calculatedYear = document.querySelector('.year')
let calculatedMonth = document.querySelector('.month')
let calculatedDay = document.querySelector('.day')
let nowDate = document.getElementById('nowDate').value
let birthDate = document.getElementById('birthDate').value
let birthDates = document.getElementById('birthDate')
let calculatedMessage = document.querySelector('.calculatedMessage')
let calculatedFunnyMessage = document.querySelector('.calculatedFunnyMessage')
calculateButton.disabled = true
// TODAYS DATE ASSIGNING
let todaysDate = new Date()
let year = todaysDate.getFullYear()
let month = todaysDate.getMonth()+1
let date = todaysDate.getDate()
if (month<10){
    month = '0'+month
}
if (date<10){
    date = '0'+date
}
let fullYear = year + "-" + month + "-" + date
let now = nowDate.value = fullYear
document.getElementById('birthDate').setAttribute("max", now)

//CALCULATIONS
calculateButton.addEventListener('click', ()=>{  
    let birthDate = document.getElementById('birthDate').value
    let birthDay = new Date(birthDate)
    const time = Math.abs(todaysDate-birthDay)
    const days = Math.ceil(time / (1000 * 60 * 60 *24))
    const birthDayYear = new Date(birthDay).getFullYear()
    const finalYear = Math.abs(year-birthDayYear)
    const birthDayMonth = finalYear * 12
    calculatedYear.textContent = finalYear
    calculatedMonth.textContent = birthDayMonth
    calculatedDay.textContent = days
    let calculatedFunnyMessage = document.querySelector('.calculatedFunnyMessage')
    if(birthDayYear >= 2023-2){
        calculatedFunnyMessage.textContent = "Give the phone back to your mama 😒"
    }else if(birthDayYear >= 2015){
        calculatedFunnyMessage.textContent = "What are you doing here? 🤔"
    }else if(birthDayYear >= 2010){
        calculatedFunnyMessage.textContent = "Just So you know i dont classify you as GEN-Z 😂"
    }else if(birthDayYear >= 2000){
        calculatedFunnyMessage.textContent = "Okay it's giving GEN-Z vibes💃"
    }else if(birthDayYear >= 1996){
        calculatedFunnyMessage.textContent = "Just so you know you are a GEN-Z 😒"
    }else if(birthDayYear >= 1990){
        calculatedFunnyMessage.textContent = "Hmm i dont know what to say 🥲"
    }else if(birthDayYear >= 1980){
        calculatedFunnyMessage.textContent = "Okay now you are getting old 🤔"
    }else if(birthDayYear >= 1946){
        calculatedFunnyMessage.textContent = "why was your generation called 'Baby Boomers' 😂"
    }else if(birthDayYear >= 1900){
        calculatedFunnyMessage.textContent = "Okay i think we can all agree that you are old 🥲"
    }
    else if(birthDayYear >= 101){
        calculatedFunnyMessage.textContent = "Okay how are you still Alive ☠️"
    }
    else if(birthDayYear <= 100){
        calculatedFunnyMessage.textContent = "Are you Jesus Christ? ✝️"
    }
    else if(birthDayYear == 1){
        calculatedFunnyMessage.textContent = "Let there be light ☀️"
    }
    calculatedMessage.classList.add('calculatedMessageCalculated')
    calculatedFunnyMessage.classList.add('calculatedFunnyMessageDone')
})
birthDates.addEventListener('change',()=>{
    if(birthDate == " "){
        calculateButton.disabled = true
    }else{
        calculateButton.disabled = false
    }
})