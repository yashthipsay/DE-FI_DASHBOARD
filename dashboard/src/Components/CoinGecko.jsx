import React from 'react'
import { useState, useEffect } from 'react';

const CoinGecko = () => {
    const [tokens, setTokens] = useState([]);
    
        const listAvailableTokens = async () => {
          console.log('initializing');
          let response = await fetch('./Tokens.js');
          let tokenListJSON = await response.json();
          console.log('listing available tokens: ', tokenListJSON);
          let tokens = tokenListJSON.tokens;
          console.log('tokens:', tokens);
          setTokens(tokens);
        
    
        
      };
  return (
    <div class="modal" id="token_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Select a Token</h5>
          <button id="modal_close" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
           
        <div id="token_list" >
        {tokens.map((token, index) => (
          <div className="token_row" key={index}>
            <img className="token_list_img" src={token.logoURI} alt={token.symbol} />
            <span className="token_list_text">{token.symbol}</span>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default CoinGecko