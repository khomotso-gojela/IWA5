FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if location = NAM
shipping = 600 
else shipping = 800

shoes = 300 * 1
toys - 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null

//SOLUTION

const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
let NONE_SELECTED = 0

const customers = '1'
const location = 'RSA'
let currency = '$'
let shipping = 'null'

if (location == 'RSA') { 
    shipping = 400
    currency = 'R' 
}

if (location == 'NAM'){
    shipping = 600 
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

if (shoes + batteries + pens + shirts + toys >= 1000  ) {
	if ((location == 'NAM' || location == 'RSA') && customers < 2) {
		    shipping = 0
		}
	}

if (shipping == 0 && customers !== 1) { 
    console.log(FREE_WARNING) 
}

//location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)
if (location == 'NK') {
    console.log(BANNED_WARNIN)
} else {
    console.log('price: ', currency, toys + shoes + batteries + pens + shirts + shipping)
}

