import web3 = require('@solana/web3.js');

async function TransferSol(
  connection: web3.Connection,
  senderKeypair: web3.Keypair,
  reciever: web3.PublicKey,
  amount: number
) {
  const transaction = new web3.Transaction();

  const sendSolInstruction = web3.SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey: reciever,
    lamports: web3.LAMPORTS_PER_SOL * amount,
  });

  transaction.add(sendSolInstruction);

  const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [senderKeypair]
  );
  console.log(signature.toString());

  console.log(
    `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`
  );
}

export default TransferSol;
