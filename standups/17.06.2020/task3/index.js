const format = (n, c, d, t) => {

    let c = isNaN(c = Math.abs(c)) ? 2 : c,

        d = d == undefined ? "." : d;

        t = t == undefined ? "," : t;

        s = n < 0 ? "-" : "";

        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));

        j =  i.length > 3 ? j % 3 : 0;

    let result = s + (j ? i.substr(0, j) + t : "") +
     i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
      (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
   
    return result;
    }