/**
 * Create a function that takes a formatted phone number like this: '(281) 330-8004'
 * And formats it to be used by a calling service like this: 2813308004
 * The resulting output needs to be a number (int)
 * **/

// Pseudocode
// set phone number to a variable
// create function formatNumbers
// split it into characters
// iterate over each character
// get rid of (), -, and space
// put them all together
// check if integer

let phoneNumber = '(281) 330-8004';

function formatNumbers() {
    let numbers = phoneNumber.split('');
    let removeChar = ['(', ')', '-', ' '];
    let filteredNumbers = '';

    numbers.forEach(number => {
        if (!removeChar.includes(number)) {
            filteredNumbers = filteredNumbers + number
        }
    });
    return Number(filteredNumbers)
}

console.log(formatNumbers());
console.log(typeof formatNumbers());


/**
 * Create a function that takes an object like this:
{
 firstName: 'Mike',
 lastName: 'Jones',
 phoneNumber: '(281) 330-8004',
 address: {
     streetNumber: '560',
     streetName: 'State Street',
     streetLocation: 'NE',
     city: 'Brooklyn',
     state: 'NY',
     zip: '11217'
     }
 }
 * And returns it in a message to the user like this: 'Mike Jones is likley to list his home at 560 State Street NE, Brooklyn NY, 11217  for sale this month. Get in touch with him to win his business by calling him at (281) 330-8004!'
 * The resulting message will be a string
 **/

// Pseudocode
// assign object to variable
// create variable to access address key/values
// need to concatenate properties in object to create a message string
// create function sellerMessage
// check if string

let sellerInfo = {
    firstName: 'Mike', lastName: 'Jones', phoneNumber: '(281) 330-8004', address:
        {
            streetNumber: '560', streetName: 'State Street', streetLocation: 'NE', city:
                'Brooklyn', state: 'NY', zip: '11217'
        }
}

let address = sellerInfo.address
let fullAddress = address.streetNumber + ' ' + address.streetName + ' ' + address.streetLocation + ', ' + address.city + ' ' + address.state + ', ' + address.zip;

function sellerMessage() {
    return sellerInfo.firstName + ' ' + sellerInfo.lastName + ' is likley to list his home at ' + fullAddress + ' for sale this month. Get in touch with him to win his business by calling him at ' + sellerInfo.phoneNumber + '!'
}
console.log(sellerMessage())
console.log(typeof sellerMessage())

/**
 * Create a function that takes an array of objects like this:
 [ { platform: 'Facebook', url: 'facebook.com/mike_jones' }, { platform: 'Twitter',  url: 'twitter.com/jonesM' }, { platform: 'Instagram', url: 'instagram.com/ mikes_jones' }, { platform: 'Twitter', url: 'twitter.com/flexas_mike'}, { platform:  'LinkedIn', url: 'linkedin.com/michael_allen_jones'}, { platform: 'Instagram', url:  'instagram.com/flexas_jones' }, { platform: 'Twitter', url: 'twitter.com/
    houston_flexas' } ]
 * And returns the url’s for all the Twitter accounts in an array of stings like this:
[ 'twitter.com/jonesM', 'twitter.com/flexas_mike', 'twitter.com/houston_flexas' ]
 * The result is an array of strings
 **/

// Pseudocode
// assign array of objects to variable
// create function grabTwitterUrl
// set variable url to empty array
// loop over array & check for platform === twitter
// if it does then add to url array

let array = [{platform: 'Facebook', url: 'facebook.com/mike_jones'}, {
    platform: 'Twitter',
    url: 'twitter.com/jonesM'
}, {platform: 'Instagram', url: 'instagram.com/ mikes_jones'}, {
    platform: 'Twitter',
    url: 'twitter.com/flexas_mike'
}, {platform: 'LinkedIn', url: 'linkedin.com/michael_allen_jones'}, {
    platform: 'Instagram',
    url: 'instagram.com/flexas_jones'
}, {platform: 'Twitter', url: 'twitter.com/houston_flexas'}]
// console.log(array)
// let url = array[0]['url']
// console.log(url)

function grabTwitterUrl() {
    let url = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]['platform'] === 'Twitter') {
            url.push(array[i]['url'])
        }
    }
    // console.log('array?', Array.isArray(url))
    return url
}

console.log(grabTwitterUrl())
console.log(typeof grabTwitterUrl())

/**
 * Create a function that takes the same data from above, but only returns the object that  represents the first Instagram account in the array like this:
{ platform: 'Instagram', url: 'instagram.com/mikes_jones' }
 * The result is an object
 **/

// Pseudocode
// assign array of object to variable
// create function grabFirstInstagram
// loop over array
// if platform === instagram then return array[i]

// let array = [{platform: 'Facebook', url: 'facebook.com/mike_jones'}, {
//     platform: 'Twitter',
//     url: 'twitter.com/jonesM'
// }, {platform: 'Instagram', url: 'instagram.com/ mikes_jones'}, {
//     platform: 'Twitter',
//     url: 'twitter.com/flexas_mike'
// }, {platform: 'LinkedIn', url: 'linkedin.com/michael_allen_jones'}, {
//     platform: 'Instagram',
//     url: 'instagram.com/flexas_jones'
// }, {platform: 'Twitter', url: 'twitter.com/houston_flexas'}]

// console.log(array)

function grabFirstInstagram() {
    for (let i = 0; i < array.length; i++) {
        if (array[i]['platform'] === 'Instagram') {
            return array[i]
        }
    }
}

console.log(grabFirstInstagram())
console.log(typeof grabFirstInstagram())

/**
 * Create a function that takes an array of objects like this:
 [ { streetNumber: '560', streetName: 'State Street', streetLocation: 'NE', city:  'Brooklyn', state: 'NY', zip: '11217' }, { streetNumber: '1600', streetName:  'Pennsylvania Ave.', streetLocation: '', city: 'Washington DC', state: '', zip:  '20500' }, { streetNumber: '5225', streetName: 'Figueroa Mountain Road', streetLocation: 'SW', city: 'Los Olivos', state: 'CA', zip: '93441' } ]
 * And returns the same array of data with an added key/value pair for the first object that  adds currentAddress: true and every other object adds currentAddress: false The result should look like this:
[ { currentAddress: true, streetNumber: '560', streetName: 'State Street',  streetLocation: 'NE', city: 'Brooklyn', state: 'NY', zip: '11217' },  { currentAddress: false, streetNumber: '1600', streetName: 'Pennsylvania Ave.',  streetLocation: '', city: 'Washington DC', state: '', zip: '20500' },  { currentAddress: false, streetNumber: '5225', streetName: 'Figueroa Mountain  Road', streetLocation: 'SW', city: 'Los Olivos', state: 'CA', zip: '93441' } ]
 **/

// Pseudocode
// assign array of objects to addresses variable
// add key/value pair for first object --> currentAddress: true
// add key/value pair for other objects --> currentAddress: false
// assign each both key/value pairs to variables
// create function updateCurrentAddress
// assign updateAddresses to empty array
// assign trueAddress to empty string
// assign falseAddress to empty string
// loop over array
// for the first index update trueAddress so the object is merged
// for all the other indexes update falseAddress
// add updated values to the updateAddresses array


let addresses = [
    { streetNumber: '560', streetName: 'State Street', streetLocation: 'NE', city:  'Brooklyn', state: 'NY', zip: '11217' },
    { streetNumber: '1600', streetName:  'Pennsylvania Ave.', streetLocation: '', city: 'Washington DC', state: '', zip:  '20500' },
    { streetNumber: '5225', streetName: 'Figueroa Mountain Road', streetLocation: 'SW', city: 'Los Olivos', state: 'CA', zip: '93441' }
    ]

// let firstAddress = addresses[0]
// let secondAddress = addresses[1]
let trueCurrentAddress = { currentAddress: 'true'}
let falseCurrentAddress = { currentAddress: 'false' }

// let trueAddress = {...trueCurrentAddress, ...firstAddress}
// console.log(trueAddress)
// let falseAddress = {...falseCurrentAddress, ...secondAddress}
// console.log(falseAddress)

// function updateCurrentAddress() {
//     let updateAddresses = {}
//     for (let i = 0; i < addresses.length; i++) {
//         if (i < 1) {
//             return updateAddresses = {...trueCurrentAddress, ...addresses[i]}
//         } else if (i > 0) {
//             return updateAddresses = {...falseCurrentAddress, ...addresses[i]}
//         }
//     }
//     return updateAddresses + addresses[i]
// }
//
// console.log(updateCurrentAddress())

function updateCurrentAddress() {
    let updateAddresses = [];
    let trueAddress = '';
    let falseAddress = '';
    for(let i = 0; i < addresses.length; i++) {
        if (i === 0) {
            trueAddress = {...trueCurrentAddress, ...addresses[i]}
             updateAddresses.push(trueAddress)
        } else {
            falseAddress = {...falseCurrentAddress, ...addresses[i]}
             updateAddresses.push(falseAddress)
        }
    }
    return updateAddresses

}
console.log(updateCurrentAddress())