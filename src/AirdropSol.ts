import web3 = require('@solana/web3.js');

async function AirdropSol(
  to: web3.PublicKey,
  amount: number,
  cluster: web3.Cluster
) {
  const connection = new web3.Connection(web3.clusterApiUrl(cluster));
  const signature = await connection.requestAirdrop(
    to,
    web3.LAMPORTS_PER_SOL * amount
  );

  console.log(
    `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`
  );
}

export default AirdropSol;
