import React from 'react'
import CoinGecko from './CoinGecko';
import { useState, useEffect } from 'react';
import './coinGecko.css'
import { Input } from "@nextui-org/react";
import { Card, Col, Row, Button, Text, 
  Modal, useModal, Avatar, Grid, Spacer } from "@nextui-org/react";

const Swap = () => {

  let  currentTrade = {};
let  currentSelectSide;
function  openModal(side){
  // Store whether the user has selected a token on the from or to side
  currentSelectSide = side;
  document.getElementById("token_modal").style.display = "block";
}
function  closeModal(){
    document.getElementById("token_modal").style.display = "none";
    }

    // async function listAvailableTokens(){
    //     console.log("initializing");
    //     let response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
    //     let tokenListJSON = await response.json();
    //     console.log("listing available tokens: ", tokenListJSON);
    //      let tokens = tokenListJSON.tokens
    //     console.log("tokens:", tokens);
      
    //     // Create a token list for the modal
    //     let parent = document.getElementById("token_list");
    //     // Loop through all the tokens inside the token list JSON object
    //     for (const i in tokens){
    //       // Create a row for each token in the list
    //       var div = document.createElement("div");
    //       div.className = "token_row";
    //       // For each row, display the token image and symbol
    //       let html = `
    //       <img class="token_list_img" src="${tokens[i].logoURI}">
    //         <span class="token_list_text">${tokens[i].symbol}</span>
    //         `;
    //       div.innerHTML = html;
    //       parent.appendChild(div);
    //     }
    //   }
    // async function init(){
    //     listAvailableTokens();
    // }
    const [tokens, setTokens] = useState([]);
    
        const listAvailableTokens = async () => {
          console.log('initializing');
          let response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
          let tokenListJSON = await response.json();
          // console.log('listing available tokens: ', tokenListJSON);
          let tokens = tokenListJSON.tokens;
          // console.log('tokens:', tokens);
          setTokens(tokens);

          //Select token function
          let parent = document.getElementById("token_list");
          for (const i in tokens){
            // Create a row for each token in the list
            let div = document.createElement("div");
            div.className = "token_row";
            // For each row, display the token image and symbol
            div.onclick=()=>{
              selectToken(tokens[i]);
            };
            let html = `
            <img className="token_list_img" src=${tokens.logoURI} alt=${tokens.symbol}  />
            <span className="token_list_text" >${tokens.symbol}</span>
              `;
            div.innerHTML = html;

            

            parent.appendChild(div);
          }
        
          
        };
         
        useEffect(() => {
          const fromTokenSelect = document.getElementById("from_token_select");
          if (fromTokenSelect) {
            fromTokenSelect.onclick = () => {
              openModal("from");
            };
          }
        }, []);
            //Select a token and close it
            function  selectToken(token) {
              // When a token is selected, automatically close the modal
              closeModal();
              // Track which side of the trade we are on - from/to
              currentTrade[currentSelectSide] = token;
              // Log the selected token
              console.log("currentTrade:" , currentTrade);
              renderInterface();
          }
      


          // Function to display the image and token symbols 
            function renderInterface(){
              if (currentTrade.from) {
                console.log(currentTrade.from)
                // Set the from token image
                document.getElementById("from_token_img").src = currentTrade.from.logoURI;
                // Set the from token symbol text
                document.getElementById("from_token_text").innerHTML = currentTrade.from.symbol;
              }
              if (currentTrade.to) {
                  // Set the to token image
                document.getElementById("to_token_img").src = currentTrade.to.logoURI;
                  // Set the to token symbol text
                document.getElementById("to_token_text").innerHTML = currentTrade.to.symbol;
              }
            }
          
    
        
      
  return (
   
    <html>
        
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Javascript Test</title>
        <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My DEX Aggregator</a>
        <ul className="navbar-nav ml-auto">
          
        </ul>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col col-md-6 offset-md-3" id="window">
            <h4>Swap</h4>
            <div id="form">
              <div className="swapbox">
                <div className="swapbox_select token_select" id="from_token_select" onClick={openModal }>
                 {/*From token replaced by text 'Select a token' */}
                      
                          <img  class="token_img"  id="from_token_img"/>
                          <span  id="from_token_text"></span>
                      
                
                </div>
                <div className="swapbox_select">
                  <input className="number form-control" placeholder="amount" id="from_amount" />
                </div>
              </div>
              <div className="swapbox">
                <div className="swapbox_select token_select" id="to_token_select" onClick={openModal }>
                  {/*To token replaced by text 'Select a token' */}
                             
                              <img  class="token_img"  id="to_token_img"/>
                              <span  id="to_token_text"></span>
                              
                </div>
                <div className="swapbox_select">
                  <input className="number form-control" placeholder="amount" id="to_amount" />
                </div>
              </div>
              <div className="gas_estimate_label">Estimated Gas: <span id="gas_estimate"></span></div>
              <button disabled className="btn btn-large btn-primary btn-block" id="swap_button">Swap</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add the new modal body here. Note we added id="token_modal" and updated the modal-title */}
      <div className="modal" id="token_modal" tabIndex="-1" role="dialog" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select a Token</h5>
              
              <button id="modal_close" type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
              
            <div className="modal-body">
            <div id="token_list" >
        {listAvailableTokens() && tokens.map((token, index) => (
          <div className="token_row" key={index}>
            <img className="token_list_img" src={token.logoURI} alt={token.symbol}  />
            <span className="token_list_text" >{token.symbol}</span>
          </div>
        )) }
        
      </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <script src="./index.js" type="text/javascript"></script>
    </div>
      </body>
    </html>
  )
}

export default Swap