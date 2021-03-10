module.exports = toReadable;
function toReadable (number) {
    let new_arr = [];
    let arr = String(number).split('');
    arr.reverse();

    if (arr[2] === '1') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'one hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'one hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'one hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'one hundred'}
    else {new_arr[2] = 'one hundred'}
    }
    if (arr[2] === '2') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'two hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'two hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'two hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'two hundred'}
    else {new_arr[2] = 'two hundred'}
    }
    if (arr[2] === '3') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'three hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'three hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'three hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'three hundred'}
    else {new_arr[2] = 'three hundred'}
    }
    if (arr[2] === '4') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'four hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'four hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'four hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'four hundred'}
    else {new_arr[2] = 'four hundred'}
    }
    if (arr[2] === '5') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'five hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'five hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'five hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'five hundred'}
    else {new_arr[2] = 'five hundred'}
    }
    if (arr[2] === '6') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'six hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'six hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'six hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'six hundred'}
    else {new_arr[2] = 'six hundred'}
    }
    if (arr[2] === '7') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'seven hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'seven hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'seven hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'seven hundred'}
    else {new_arr[2] = 'seven hundred'}
    }
    if (arr[2] === '8') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'eight hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'eight hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'eight hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'eight hundred'}
    else {new_arr[2] = 'eight hundred'}
    }
    if (arr[2] === '9') {if (arr[1] === '0' && arr[0] === '0') {new_arr[0] = 'nine hundred'}
    else if (arr[1] !== '0' && arr[0] === '0') {new_arr[1] = 'nine hundred'}
    else if (arr[1] === '0' && arr[0] !== '0') {new_arr[1] = 'nine hundred'}
    else if (arr[1] === '1' ) {new_arr[1] = 'nine hundred'}
    else {new_arr[2] = 'nine hundred'}
    }

    if (arr.length === 1 && arr[0] === '0') { new_arr[0] = 'zero' }
    if (arr[0] === '1') { new_arr[0] = 'one' }
    if (arr[0] === '2') { new_arr[0] = 'two' }
    if (arr[0] === '3') { new_arr[0] = 'three' }
    if (arr[0] === '4') { new_arr[0] = 'four' }
    if (arr[0] === '5') { new_arr[0] = 'five' }
    if (arr[0] === '6') { new_arr[0] = 'six' }
    if (arr[0] === '7') { new_arr[0] = 'seven' }
    if (arr[0] === '8') { new_arr[0] = 'eight' }
    if (arr[0] === '9') { new_arr[0] = 'nine' }

    if (arr[1] === '1') { if (arr[0] === '0') {new_arr[0] = 'ten'}
        if (arr[0] === '1') {new_arr[0] = 'eleven'}
        if (arr[0] === '2') {new_arr[0] = 'twelve'}
        if (arr[0] === '3') {new_arr[0] = 'thirteen'}
        if (arr[0] === '4') {new_arr[0] = 'fourteen'}
        if (arr[0] === '5') {new_arr[0] = 'fifteen'}
        if (arr[0] === '6') {new_arr[0] = 'sixteen'}
        if (arr[0] === '7') {new_arr[0] = 'seventeen'}
        if (arr[0] === '8') {new_arr[0] = 'eighteen'}
        if (arr[0] === '9') {new_arr[0] = 'nineteen'}}
    if (arr[1] === '2') { if (arr[0] === '0') {new_arr[0] = 'twenty'} else {new_arr[1] = 'twenty'}}
    if (arr[1] === '3') { if (arr[0] === '0') {new_arr[0] = 'thirty'} else {new_arr[1] = 'thirty'}}
    if (arr[1] === '4') { if (arr[0] === '0') {new_arr[0] = 'forty'} else {new_arr[1] = 'forty'}}
    if (arr[1] === '5') { if (arr[0] === '0') {new_arr[0] = 'fifty'} else {new_arr[1] = 'fifty'}}
    if (arr[1] === '6') { if (arr[0] === '0') {new_arr[0] = 'sixty'} else {new_arr[1] = 'sixty'}}
    if (arr[1] === '7') { if (arr[0] === '0') {new_arr[0] = 'seventy'} else {new_arr[1] = 'seventy'}}
    if (arr[1] === '8') { if (arr[0] === '0') {new_arr[0] = 'eighty'} else {new_arr[1] = 'eighty'}}
    if (arr[1] === '9') { if (arr[0] === '0') {new_arr[0] = 'ninety'} else {new_arr[1] = 'ninety'}}

    new_arr.reverse()
    let str = new_arr.join(' ');
    return (str);
}

console.log(toReadable(215));
