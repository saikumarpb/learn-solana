import web3 = require('@solana/web3.js');

async function AccountInfo(
  connection: web3.Connection,
  pubKey: web3.PublicKey
) {
  const accountInfo = await connection.getAccountInfo(pubKey);
  console.log(
    'balance in SOL',
    (accountInfo?.lamports ?? 0) / web3.LAMPORTS_PER_SOL
  );

  console.log('is executable account', accountInfo?.executable);
}

export default AccountInfo;
