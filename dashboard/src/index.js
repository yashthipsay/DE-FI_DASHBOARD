import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import MyComponent from './myComponent';
import { ApolloProvider } from '@apollo/client';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import WalletData from './WalletData';


const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appLogo: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
  }),
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WagmiConfig config={config}>
      <ConnectKitProvider>
     

  <React.StrictMode>
    <App />
    <WalletData/>
  </React.StrictMode>
      
    <ConnectKitButton />
    <MyComponent/>
 

      </ConnectKitProvider>
    </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
