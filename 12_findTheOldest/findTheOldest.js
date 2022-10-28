const findTheOldest = function(people) {
    // Get current year
    const currentYear = (new Date()).getFullYear();

    // Sort by oldest first
    const age = people.sort(function(a, b) {

        // Check if person is still living
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = currentYear;
        } else if (b.yearOfDeath == undefined) {
            b.yearOfDeath = currentYear;
        }
        // console.log(a.yearOfDeath);
        // console.log(b.yearOfDeath);

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    //Help debugging
    // console.log(age);

    // const oldest = people.find(function(person) {
    //     // if(!person.yearOfDeath) {}



    // })

    return age[0];

};

// Do not edit below this line
module.exports = findTheOldest;
