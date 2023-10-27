function totalClick(click) {
    const totalClicks = document.getElementById('total')
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;

    
//minus button 

if (sumvalue < 0) {
    totalClicks.innerText = 0;
}

// reset value

if (click === 0) {
    totalClicks.innerText = 0;
}

}