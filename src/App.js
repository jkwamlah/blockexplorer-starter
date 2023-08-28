import {Alchemy, Network} from 'alchemy-sdk';
import {useEffect, useState} from 'react';
import Block from './components/block';


import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber, blockDetails, setBlockDetails] = useState();

    // useEffect(() => {
    //     async function getBlockNumber() {
    //         setBlockNumber(await alchemy.core.getBlockNumber());
    //     }
    //
    //     getBlockNumber();
    // });

    useEffect(() => {
        async function getBlockNumber() {
            return await alchemy.core.getBlockNumber();
        }

        async function getBlockDetails() {
            return await alchemy.core.getBlockWithTransactions(blockNumber);
        }

        async function getData() {
            try {
                const number = await getBlockNumber();
                console.log("Block Number:", number);
                setBlockNumber(number);

                const block = await getBlockDetails();
                console.log("Block Details:", block);
                setBlockDetails(block);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getData();
    }, []);


    return <div className="App mt-16">
        <div className="flex items-center justify-center">
            <Block blockNumber={blockNumber} block={blockDetails} transactions={blockDetails}/>
        </div>
    </div>;
}

export default App;
