// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./Crowdsale.sol";
import "./KycContract.sol";

contract MyTokenSale is Crowdsale {

    KycContract kyc;
    constructor (
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token,
        KycContract Kyc
    )
        Crowdsale(rate, wallet, token)
        
    {
        kyc = Kyc;
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
        super._preValidatePurchase(beneficiary, weiAmount);
        require(kyc.kycCompleted(beneficiary), "KYC not completed yet, aborting");
    }

}