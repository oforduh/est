import React, { useCallback, useEffect, useState } from "react";
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
  // const address = useAddress();
  const { provider, connected, address } = useWeb3Context();

  const [processing, setProcessing] = useState(false);
  const [balance, setBalance] = useState(null);

  const fetchBalance = useCallback(async () => {
    if (!address) return;
    let userBalance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(userBalance);
    setBalance(balanceInEth);
  }, [provider]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return (
    <div>
      {connected && (
        <button> {processing ? "Merging" : "Ethereum Merge"}</button>
      )}
      {connected && <div>{balance}ETH</div>}
    </div>
  );
};

export default HomePage;
