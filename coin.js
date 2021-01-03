const axios = require('axios');
const fs = require('fs');

const url='https://www.coinspot.com.au/pubapi/latest';
const coinInput = process.env.CRYPTO_COIN || 'ltc';

async function tester() {
	return Math.round(Math.random()*1000);
}
const cwd = process.cwd();

async function getCoin(coin) {
	const fontSize = 14;

	const data = fs.readFileSync(`${__dirname}/previous.json`,
			{encoding:'utf8', flag:'r'});
	const old = JSON.parse(data);
	let ret = {
		text: `${old[coin]}`,
				font_color: '199, 213, 232, 255',
				font_size: fontSize,
				icon_path: `${__dirname}/icons/${coin}.png`
		}
	try {
		const res = await axios.get(url);
		const bid = Number(res.data.prices[coin].bid).toFixed(2);
		let color = '68, 137, 117, 255';
		if(bid < Number(old[coin])) {
			color = '173,99,105, 255';
		}
		ret = {
			text: `${bid}`,
				font_color: color,
				font_size: fontSize,
				icon_path: `${__dirname}/${coin}.png`
		}
		old[coin] = bid;
		fs.writeFileSync(`${__dirname}/previous.json`, JSON.stringify(old))
		console.log(JSON.stringify(ret));
	} catch {
		console.log(JSON.stringify(ret))
	}
}

getCoin(coinInput);
