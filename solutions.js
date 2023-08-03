const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
let NONE_SELECTED = 0;

const customers = 1
const country = 'RSA'
let currency = '$'
let shipping = 'null'

if (country == 'RSA') {
    shipping = 400
    currency = 'R' 
}

if (country == 'NAM'){
    shipping = 600 
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

if ((toys + shoes + batteries + pens + shirts + toys >= 1000) && currency == 'R') {
	if (country == 'RSA' && customers < 2) {
	    shipping = 0
	}
} else if ((toys + shoes + batteries + pens + shirts + toys >= 60) && currency == '$') {
    if (country == 'NAM' && customers < 2) {
        shipping = 0
    }
}


if (customers != 1) {
    console.log(FREE_WARNING)
}

if (country == 'NK') {
    console.log(BANNED_WARNING)
} else {
    console.log('price: ', currency, toys + shoes + batteries + pens + shirts + shipping)
}

