
localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({name: 'Tom'}));
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));

//console.log(JSON.parse(localStorage.getItem('hobbies')));




export const getLocalStorageData = () => {
    return Object.entries(localStorage)
    .reduce((acc, [key, value]) => {
      return {
          ...acc, [key]: value,
      } ; 
    }, {});

};
console.log(getLocalStorageData());
