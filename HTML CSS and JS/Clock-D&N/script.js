var date = new Date();

function bodyLoad() {
    let hours = fixhours(date.getHours());
    let minutes = fixminutes(date.getMinutes());
    let dayOfWeek = date.getDay();
    let showDay = date.getDate();
    let showMonth = date.getMonth();
    let txt = document.getElementById('time');
    txt.innerHTML = `${hours}:${minutes}`;

    if (hours >= 06 &&  hours < 19) {
        document.getElementsByTagName('body')[0].style.background = '#4795be'
    } else {
        document.getElementsByTagName('body')[0].style.background = '#32145f'
    }

    function fixhours(fhour) {
        if (fhour < 10) {
            fhour = '0' + fhour;
        }
        return fhour;
    }

    function fixminutes(fmin) {
        if (fmin < 10) {
            fmin = '0' + fmin;
        }
        return fmin;
    }

    switch (showMonth) {
        case 0:
            showMonth = 'January'
            break;
        case 1:
            showMonth = 'February'
            break;
        case 2:
            showMonth = 'March'
            break;
        case 3:
            showMonth = 'April'
            break;
        case 4:
            showMonth ='May'
            break;
        case 5:
            showMonth = 'June'
            break;
        case 6:
            showMonth ='July'
            break;
        case 7:
            showMonth = 'August'
            break;
        case 8:
            showMonth = 'September'
            break;
        case 9:
            showMonth = 'October'
            break;
        case 10:
            showMonth = 'November'
            break;
        case 11:
            showMonth = 'December'
            break;
    }

//Tentativa de mostrar o mês na div, substituindo o número pelo mês em string

/*
    if (showMonth == '0') {
        showMonth = 'January'
    } else if (showMonth == '1') {
        showMonth = 'February'
    } else if (showMonth == '2') {
        showMonth = 'March'
    } else if (showMonth == '3') {
        showMonth = 'April'
    } else if (showMonth == '4') {
        showMonth = 'May'
    } else if (showMonth = '5') {
        showMonth = 'June'
    } else if (showMonth = '6') {
        showMonth = 'July'
    } else if (showMonth = '7') {
        showMonth = 'August'
    } else if (showMonth = '8') {
        showMonth = 'September'
    } else if (showMonth = '9') {
        showMonth = 'October'
    } else if (showMonth = '10') {
        showMonth = 'November'
    } else if (showMonth = '11') {
        showMonth = 'Decemeber'
    }
*/

    switch (dayOfWeek) {
        case 0:
            document.getElementById('dayWeek').innerHTML = `Sunday, ${showDay} ${showMonth}`  
            break;
        case 1:
            document.getElementById('dayWeek').innerHTML = `Monday, ${showDay} ${showMonth}`
            break;
        case 2:
            document.getElementById('dayWeek').innerHTML = `Tuesday, ${showDay} ${showMonth}`
            break;
        case 3:
            document.getElementById('dayWeek').innerHTML = `Wednesday, ${showDay} ${showMonth}`
            break;
        case 4:
            document.getElementById('dayWeek').innerHTML = `Thursday, ${showDay} ${showMonth}`
            break;
        case 5:
            document.getElementById('dayWeek').innerHTML = `Friday, ${showDay} ${showMonth}`
            break;
        case 6:
            document.getElementById('dayWeek').innerHTML = `Saturday, ${showDay} ${showMonth}`
            break;
        default:
            break;
    }
}