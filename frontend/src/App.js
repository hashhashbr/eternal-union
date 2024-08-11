import React, { useState, useEffect } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import MarriageForm from './components/MarriageForm';
import MarriageList from './components/MarriageList';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadContract = async () => {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
      const contractABI = [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "groomName",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "brideName",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "weddingDate",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "congratulationsMessage",
              "type": "string"
            }
          ],
          "name": "MarriageRegistered",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "getAllRecords",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "groomName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "brideName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "weddingDate",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "congratulationsMessage",
                  "type": "string"
                }
              ],
              "internalType": "struct EternalUnion.MarriageRecord[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "records",
          "outputs": [
            {
              "internalType": "string",
              "name": "groomName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "brideName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "weddingDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "congratulationsMessage",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_groomName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_brideName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_weddingDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_congratulationsMessage",
              "type": "string"
            }
          ],
          "name": "registerMarriage",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];

      const contractInstance = new Contract(contractAddress, contractABI, signer);
      setContract(contractInstance);
    };

    if (window.ethereum) {
      loadContract();
    } else {
      alert('Please install Metamask to use this app.');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        {contract ? (
          <>
            <MarriageForm contract={contract} />
            <MarriageList contract={contract} />
          </>
        ) : (
          <p>Loading contract...</p>
        )}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
