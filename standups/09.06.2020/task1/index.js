//1. learn requirements +++
//2. create step by step algo (& input/output for funtions) 
//3. create prototype solution
//4. testing 
//5. refactoring
//6. final solution 

//let secondPassed = 10;


  export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    intervalID: null,

    /*startTimer(){
        const adder = function(){
            this.secondPassed ++;
       
            console.log(this.secondPassed);
        };

           const newAdder = adder.bind(this);
         
           setInterval(newAdder, 1000)
            
    },*/

    startTimer() {
        this.intervalID = setInterval(() => {
            this.secondsPassed +=1;
            if (this.secondsPassed === 60) {
                this.minsPassed +=1;
                this.secondsPassed = 0;
            }
            
            //console.log(this.secondsPassed);

        }, 1000);

    },

    stopTimer() {
        clearInterval(this.intervalID);
    },

  
    getTime() {
        return (`${this.minsPassed}:${this.secondsPassed < 10 ? "0" + this.secondsPassed:this.secondsPassed}`)
    },

    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },


};





//timer.startTimer();
//timer.stopTimer();
//console.log(timer.getTimer());

  

