import terra from '../assets/imgs/terra_logo.png';
import solana from '../assets/imgs/solana_logo.png';
import moonRiver from '../assets/imgs/moonRiver_logo.png';
import avalanche from '../assets/imgs/Avalanche_Logo.png';
import instagram from '../assets/imgs/1.png'
import twitter from '../assets/imgs/2.png'
import youtube from '../assets/imgs/3.png'
import  M from '../assets/imgs/4.png'


export const data = {
    hero:{
      title:'The Passive Income App For All',
      subtitle:'Swap,Yield Farm, Stake, Borrow and Lend cryptocurrency all in one application.'
    },
    cryptolink:{
        title:'CryptoLink',
        subtitle:'The CryptoLink is a centralized DeFi application built for next-generation staking, yield farming and financial services. Our mission is to remove all the technical barriers that come with decentralized finance so that everyone can experience the benefits of DeFi.'
    },
    debitCard:{
    title:'CryptoLink Debit Card',
        subtitle:'The CryptoLink card is used to spend your account balance anytime and anywhere without ever needing to withdrawal funds and wait for bank transfer to process. The CryptoLink debit card makes spending your portfolios passive income extremely easy.' ,
        footer:'Get Your CryptoLink Debit Card Today'
},
    multiChain: {
        title: 'Multi-Chain',
        subtitle: 'Multi-Chain means multiple opportunities for yield across many different blockchains. The CryptoLink brings our users the best possible yield diversification by supporting more than just one blockchain.',
        img:[{name:'Terra',img:terra}, {name:'Solana',img:solana}, {name:'MoonRiver',img:moonRiver}, {name:'Avalanche',img:avalanche}]
    },
    downloadInstruction:{
        title:'Passive income made easy with the CryptoLink',
        instruction:[
            {id:1,title:'Download The CryptoLink', subtitle:'Get started with the CryptoLink on your IOS or android mobile device.'},
            {id:2,title:'Create Your CryptoLink Account',subtitle:'Choose your username, password and confirm your email address to register.'},
            {id:3,title:'Easily Begin Earning Passive Income',subtitle:'Pick a yield strategy, Track your investments with the dashboard then sit back relax and watch your CryptoLink portfolio grow.'}]

    },
    footer:{
        socials:[instagram,twitter,youtube,M],
        email:'Info@TheCryptoLink.com'
    }
}