  export class Sportsmen{
      constructor(name){

          //console.log('Watch');
          
          this.name = name;
      }
      run(){
          console.log(`${this.name} is running`);
          
      }

  } 


  export class Swimmer extends Sportsmen{
      constructor(name, swimSlyle){
          super(name);
          this.swimSlyle = swimSlyle;

      }
      swim(){
          console.log(`${this.name} is swimming ${this.swimSlyle}`);
          
      }
      



  }


  const s = new Swimmer('Tom', 'breast')
  console.log(s);
  
  
  
 