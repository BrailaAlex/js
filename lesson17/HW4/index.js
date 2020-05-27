
export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(apart) {
        let nameFL = apart.split(" ");


        this.firstName = nameFL[0];
        this.lastName = nameFL[1];



    }
}
