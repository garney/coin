const axios = require('axios');
const fs = require('fs');

// const rand = Math.round(Math.random()*1000);
// const Http = new XMLHttpRequest();
const url='https://www.coinspot.com.au/pubapi/latest';
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }
async function tester() {
	return Math.round(Math.random()*1000);
}

function getCoins() {
	// const last = fs.readFileSync('/Users/garney/Projects/coin/previousLtc.json', 'utf8');

	const data = fs.readFileSync('/Users/garney/Projects/coin/previousLtc.json',
            {encoding:'utf8', flag:'r'});
	const old = JSON.parse(data);
	// console.log(data);
  axios.get(url).then((res) => {
		const bid = Math.floor(res.data.prices.ltc.bid);
		let color = '68, 137, 117, 255'; // greem
		if(bid < old.ltc) {
			color = '173,99,105, 255'; // red
		}
    const ret = {
      text: `ltc:${bid}`,
			font_color: color
    }
		old.ltc = bid;
		fs.writeFileSync('/Users/garney/Projects/coin/previousLtc.json', JSON.stringify(old))
    console.log(JSON.stringify(ret));
    // console.log(`I LOVE YOU ANTHEA!!!`);
  })

}

getCoins();
