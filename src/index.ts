import web3 = require('@solana/web3.js');
import Dotenv from 'dotenv';
import AccountInfo from './AccountInfo';
import AirdropSol from './AirdropSol';

Dotenv.config();

const initializeKeyPair = (): web3.Keypair => {
  const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];
  const secretKey = Uint8Array.from(secret);
  return web3.Keypair.fromSecretKey(secretKey);
};

async function main() {
  const payer = initializeKeyPair();
  const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

  AccountInfo(connection, payer.publicKey);

  //   AirdropSol(payer.publicKey, 1, 'devnet');

  //   PingProgram(connection, payer);

  //   const reciever = new web3.PublicKey(
  //     'HxxXYEBzr6swPG3Uj5dRxWVqMADYDAuhWp52kjBEZwAq'
  //   );

  //   TransferSol(connection, payer, reciever, 1);
}

main();
