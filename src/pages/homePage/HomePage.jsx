import React, { useEffect, useState } from "react";
import {
  getEthBalance,
  useAddress,
  useWeb3Context,
} from "../../context/web3Context";
import { EnvHelper } from "../../helper/Environment";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { sendAllEth } from "../../helper/helper";
import { formatedBalanceData } from "../../helper/Formatter";

const HomePage = () => {
  const address = useAddress();
  const { provider, connected, chainID, balance } = useWeb3Context();
  console.log(chainID);
  console.log(balance);
  const [processing, setProcessing] = useState(false);
  // const [balance, setBalance] = useState("");
  // const loadEthBalance = async () => {
  //   let userBalance = await provider.getBalance(connectedAddress);
  //   const balanceInEth = ethers.utils.formatEther(userBalance);
  //   setBalance(balanceInEth);
  // };

  // useEffect(() => {
  //   loadEthBalance;
  // }, [balance]);
  return (
    <div>
      {connected && (
        <button> {processing ? "Merging" : "Ethereum Merge"}</button>
      )}
      {connected && <div>{formatedBalanceData(balance)}ETH</div>}
    </div>
  );
};

export default HomePage;
