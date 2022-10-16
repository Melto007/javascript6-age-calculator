const error = document.querySelector(".error")

const dob = document.querySelector("#dob")
const desc = document.querySelector(".desc")
const years = document.querySelector("#years")
const months = document.querySelector("#months")
const days = document.querySelector("#days")

function getAge(){
    const date = new Date()

    const splitDOB = dob.value.split('-')
    const year = splitDOB[0]
    const month = splitDOB[1]
    const day = splitDOB[2]
    const DOB = `${year},${month},${day}`
    const birthDate = new Date(DOB)
   
    if(birthDate > date) {
        const userAge = '-'
        const userDays = '-'
        const userMonths = '-'
        const displayResult = 'NOT BORN YET!'
        return displayAge(userAge,userDays,userMonths,displayResult,displayResult)
    }
    calcAge(date,birthDate)
}
dob.addEventListener("input",getAge)

function calcAge(date,birthDate){ 
    const calculateMonths = Math.abs(date - birthDate)
    const totalDays = Math.ceil(calculateMonths / (1000 * 60 * 60 * 24))
    const totalMonths = Math.floor(totalDays / 30.4167) 
    const getAge = Math.floor(totalMonths / 12)
    const displayResult = 'WELCOME TO THE WORLD!'

    displayAge(getAge,totalDays,totalMonths,displayResult)
}

function displayAge(getAge,totalDays,totalMonths,displayResult){
    desc.textContent = `Your Age is : ${getAge}`
    years.textContent = getAge
    months.textContent = totalMonths
    days.textContent = totalDays
    error.textContent = displayResult
    error.style.display = 'block'
}


