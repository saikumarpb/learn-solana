import web3 = require('@solana/web3.js');

const PROGRAM_ADDRESS = 'ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa';
const PROGRAM_DATA_ADDRESS = 'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod';

async function PingProgram(connection: web3.Connection, payer: web3.Keypair) {
  const transaction = new web3.Transaction();

  const programId = new web3.PublicKey(PROGRAM_ADDRESS);
  const programDataPubKey = new web3.PublicKey(PROGRAM_DATA_ADDRESS);

  const instruction = new web3.TransactionInstruction({
    keys: [{ pubkey: programDataPubKey, isSigner: false, isWritable: true }],
    programId,
  });

  transaction.add(instruction);

  const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
  );

  console.log(
    `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`
  );
}

export default PingProgram;
