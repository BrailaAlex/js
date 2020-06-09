let startDate = new Date('11/31/2020/ 12:30:00');
let endDate = new Date('09/01/2002/ 06:31:00');


export function getDiff(startDate, endDate) {

    const ms_Minut = 1000 * 60;
    const ms_Hour = ms_Minut * 60;
    const ms_Day = ms_Hour * 24;

    const time = Math.abs(startDate.getTime() - endDate.getTime());

    const days = Math.floor(time / ms_Day);
    const afterDays = time % ms_Day;
    const hours = Math.floor(afterDays / ms_Hour);
    const afterHours = time % ms_Hour;
    const minutes = Math.floor(afterHours / ms_Minut);
    const afterMinutes = time % ms_Minut;
    const sec = Math.floor(minutes / 1000);


    return `${days}d ${hours}h ${minutes}m ${sec}s`
}

//console.log(getDiff(startDate, endDate))