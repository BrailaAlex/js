const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const passedStudents = ['Ann', 'Kate'];
const failedStudents = ['Tom', 'Bob'];

const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
    .filter(name => !failedStudents.includes(name));

    const messages = passedStudents
    .map(name =>  'Good job, ' + name );

    return messages; 

}























let arr = getMessagesForBestStudents(allStudents, failedStudents);
console.log(arr);