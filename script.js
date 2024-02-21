function calculateAge(){
    let birthYear = document.getElementById('year').value;
    let birthMonth =document.getElementById('month').value;
    let birthDay =document.getElementById('day').value;

    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1; // month from 0-11, so i add 1
    let currentDay = today.getDate();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageDays < 0) {
        ageDays += 30;
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    document.getElementById('result').innerHTML = `Your Age is ${ageYears} Years ${ageMonths} Months ${ageDays} Days`;
}