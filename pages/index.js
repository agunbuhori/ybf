import Head from 'next/head';
import Web3 from 'web3';
import axios from 'axios';

const httpServer = axios.create({
  baseURL: "https://api.etherscan.io/"
})


const web3 = new Web3(new Web3.providers.HttpProvider());
const version = web3.version.api;

const API_KEY_TOKEN = "2D18V6GQH88KF24742A4ADGU4ZZYQBYYXM";

const etherscan = async (params, callback) => {
    const httpRequest = await httpServer.get('api', { params });
  
    if (httpRequest.status === 200) {
      let data = httpRequest.data;
      callback(data);
    }
}

etherscan({
  module: 'stats',
  action: 'tokensupply',
  contractaddress: '0x57d90b64a1a57749b0f932f1a3395792e12e7055',
  apikey: API_KEY_TOKEN
}, (data) => {
  console.log(data);
});

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>YEARN BROSS FINANCE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <img src="/img/Fix.png" id="logo1"/>
        <div className="logo2">
          <h1>YEARN</h1>
          <h3>BROSS STAKE</h3>
        </div>
      </header>

      <section className="info1">
        <div className="orange-box">
          <div className="coin">
            <img src="/img/LOGO_COIN_YBROS.png"/>
          </div>
          
          <div className="prices">
            <div className="prices-header">Uniswap YBF-ETH</div>
            <div className="prices-box">
              <div>
                <h5>YBF Price</h5>
                <h3>$ XXX XXX</h3>
              </div>
              <div>
                <h5>YBF In Circulation</h5>
                <h3>$ XXX XXX</h3>
                <h3>$ XXX XXX</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="menus">
          <a href="#">Wallet</a>
          <a href="#">Exchanges</a>
          <a href="#">Home</a>
          <a href="#">Uniswap</a>
        </div>

        <div className="orange-box">
          <div className="coin">
            <img src="/img/LOGO COIN YMUSH FIX.png"/>
          </div>

          <div className="prices">
            <div className="prices-header">Uniswap YMUSH-ETH</div>
            <div className="prices-box">
              <div>
                <h5>YBF Price</h5>
                <h3>$ XXX XXX</h3>
              </div>
              <div>
                <h5>YBF In Circulation</h5>
                <h3>$ XXX XXX</h3>
                <h3>$ XXX XXX</h3>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="info2">
        <div className="description">
        Limited supply, No team token (100% minted), Flexible mining you can stake and unstake whenever you want), High interest (888,88% APY), Monthly token burn (every month we will bum 5% of YMRF uncirculated supply), Unstake token burn (3% of YBF staked will automatically burn if user unstake the token). This method will reduce the supply and maintain the price of YBF and YMRF to become more stable or even higher. 

        </div>
      </section>

      <section className="info3">
        <div className="participate">
          <h1>YEARN BROSS FINANCE</h1>
          <strong>Stake to Participate in Mining and Earn YRMF!</strong>
          <p>CONNECT WALLETS</p>
          <img src="/img/connect.png" width="60%"/>
        </div>

        <div>
          <h4>Total Supply</h4>
          <h3>XX,XXX YBF</h3>
          <h4>Total Stake</h4>
          <h3>XX,XXX YBF</h3>
        </div>
        
        <div>
          <h4>Available Supply</h4>
          <h3>XX,XXX YBF</h3>
          <h4>Token Price</h4>
          <h3>XX,XXX YBF</h3>
        </div>
      </section>

      <section className="info4">
        <div className="balance">
          <h4>STAKE TOKEN</h4>
          <h5>My Ballance</h5>
          <h5>0,00000</h5>
          <h5>YBF</h5>
          <input type="text"/>
          <button className="stake-button">STAKE</button>
        </div>

        <div className="balance">
          <h4>STAKE TOKEN</h4>
          <h5>My Ballance</h5>
          <h5>0,00000</h5>
          <h5>YBF</h5>
          <input type="text"/>
          <button className="stake-button">UNSTAKE</button>
        </div>

        <div className="balance">
          <h4>STAKE TOKEN</h4>
          <h5>My Ballance</h5>
          <h5>0,00000</h5>
          <h5>YBF</h5>
        </div>
      </section>
      
    </div>
  )
}
