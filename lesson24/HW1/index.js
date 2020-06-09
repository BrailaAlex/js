let startDate = new Date('11/31/2020/ 12:30:00');
let endDate = new Date('09/01/2002/ 06:31:00');


export function getDiff(startDate, endDate) {
    const minut = 1000 * 60;
    const hour = minut * 60;
    const day = hour * 24;

    const time = Math.abs(startDate.getTime() - endDate.getTime());

    const howDays = Math.floor(time / day);
    const afterDays = time % day;
    const howHours = Math.floor(afterDays / hour);
    const afterHours = time % hour;
    const howMinutes = Math.floor(afterHours / minut);
    const afterMinutes = time % minut;
    const howSec = Math.floor(afterMinutes / 1000);


    return `${howDays}d ${howHours}h ${howMinutes}m ${howSec}s`
}
//console.log(getDiff(startDate, endDate))