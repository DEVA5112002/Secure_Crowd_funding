import react from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router}from 'react-router-dom';
import {ChainId,ThirdwebProvider}from '@thirdweb-dev/react';
import { StateContextProvider } from "./context";
import{Sepolia} from '@thirdweb-dev/chains';
import App from "./App";
import './index.css';

const root=ReactDOM.createRoot(document.getElementById('root'));
// const signer = new ethers.providers.Web3Provider(
//     window.ethereum,
//   ).getSigner();

root.render(
    <ThirdwebProvider 
    activeChain={ Sepolia }
    // clientId="d8af58635a6ea2f698e10c76946894d4" 
   // signer={signer}
    clientId="d8af58635a6ea2f698e10c76946894d4"
    >
     
             <Router>
              <StateContextProvider>
              <App/>
              </StateContextProvider>
              
             </Router>
    </ThirdwebProvider>
)