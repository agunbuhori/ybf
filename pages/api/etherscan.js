const API_KEY_TOKEN = "2D18V6GQH88KF24742A4ADGU4ZZYQBYYXM";

export default async (req, res) => {
    const result = await fetch(`https://api.etherscan.io/api?module=token&action=tokeninfo&contractaddress=0x0e3a2a1f2146d86a604adc220b4967a898d7fe07&apikey=${API_KEY_TOKEN}`);
    const response = result.json();

    res.json(response);
}