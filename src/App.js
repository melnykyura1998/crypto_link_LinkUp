import './App.scss';
import {CryptoLink, DebitCard, DownloadInstruction, Footer, Hero, MultiChain} from "./components";

function App() {
    return (
        <div>
            <Hero/>
            <CryptoLink/>
            <MultiChain/>
            <DebitCard/>
            <DownloadInstruction/>
            <Footer/>
        </div>
    );
}

export default App;
