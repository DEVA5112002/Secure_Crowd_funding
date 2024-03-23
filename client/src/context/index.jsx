import React,{useContext,createContext} from "react";
import{useAddress,useContract,useContractWrite,useMetamask} from '@thirdweb-dev/react';
import{ethers} from 'ethers';

const StateContext =createContext();

export const StateContextProvider =({children})=>{
const{contract}= useContract('0xF0b0986be311a6B3EEd389a299fa1b22faA24D98');
const {mutateAsync:createCampaign}=useContractWrite(contract,'createCampaign');


const address=useAddress();
const connect=useMetamask();

const publishCampaign=async (form)=>{
    try {
        const data = await createCampaign({
            args: [
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ]
        });
        console.log("contract call success", data)
} 
catch (error) {
        console.log("contract call failure", error)
}
}

const getCampaigns = async() => {
const campaigns=await contract.call('getCampaigns');

const parsedCampaigns=campaigns.map((campaign, i)=>
({

    owner:campaign.owner,
    title:campaign.title,
    description:campaign.description,
    target: ethers.utils.formatEther(campaign.target.toString()),
    deadline:campaign.deadline.toNumber(),
    amountCollected: ethers.utils.formatEther
    (campaign.amountCollected.toString()),
    image:campaign.image,
    pId:i

}));
return parsedCampaigns;

}
const getUserCampaigns=async()=>{

    const allCampaigns=await getCampaigns();

    const filteredCampaigns=allCampaigns.filter((campaign)=>campaign.owner === address);

    return filteredCampaigns;
}

const donate=async(pId,amount)=>{
    const data=await contract.call('donateToCampaign', [pId],{value:ethers.utils.parseEther(amount
        )});

    return data;
}

const getDonations=async(pId)=>{
    const donations=await contract.call('getDonators',[ pId]);

    const numberofDonations=donations[0].length;

    const parsedDonations=[];
    for(let i=0;i<numberofDonations;i++){
        parsedDonations.push({
           donator:donations[0][i],
           donation: ethers.utils.formatEther(donations[1][i].toString())
        })
    }

    return parsedDonations;
}
return(
    <StateContext.Provider value={{
        address,
        contract,
        connect,
        createCampaign:publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations
    }}>
      {children}
    </StateContext.Provider>
)

}
export default StateContextProvider;
export const useStateContext=()=>useContext(StateContext);