export const explorerUrl = () => {
  const address = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '1':
      // Mainnet
      return `https://etherscan.io/token/${address}`
    case '5':
      // Goerli
      return `https://goerli.etherscan.io/token/${address}`
	case '56':
	  // BNB
      return `https://bscscan.com/token/${address}`
    case '97':
      // tBNB
      return `https://testnet.bscscan.com/token/${address}`
    case '137':
      // Polygon
      return `https://polygonscan.com/token/${address}`
    case '80001':
      // Munbai
      return `https://mumbai.polygonscan.com/token/${address}`
    case '250':
      // Fantom
      return `https://ftmscan.com/token/${address}`
    case '4002':
      // FantomTestnet
      return `https://testnet.ftmscan.com/token/${address}`
    default:
      return ''
  }
}

export const ChainName = () => {

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '1':
      // Mainnet
      return 'Ethereum'
    case '5':
      // Goerli
      return 'GoerliETH'
    case '97':
      // tBNB
      return 'BNB Testnet'
    case '56':
      // BNB
      return 'BNB'
    case '137':
      // Polygon
      return 'Polygon'
    case '80001':
      // Mumbai
      return 'Mumbai'
    case '250':
      // Fantom
      return 'Fantom Opera'
    case '4002':
      // FantomTestnet
      return 'Fantom Testnet'
    default:
      return ''
  }
}

export const swapUrl = () => {
  const token = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS
  const chain = process.env.NEXT_PUBLIC_CHAIN_ID

// PolygonCase
  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '97':
      // Testnet
      return `https://pancakeswap.finance/swap?inputCurrency=${token}&exactField=output&exactAmount=10&outputCurrency=tBNB&chainId=${chain}`
    case '56':
      // Mainnet
      return `https://pancakeswap.finance/swap?inputCurrency=${token}&exactField=output&exactAmount=10&outputCurrency=tBNB&chainId=${chain}`
    case '137':
      // Mainnet
      return `https://app.uniswap.org/#/swap?inputCurrency=eth&exactField=output&exactAmount=10&outputCurrency=${token}&chainId=${chain}`
    case '80001':
      // Testnet
      return `https://app.uniswap.org/#/swap?inputCurrency=eth&exactField=output&exactAmount=10&outputCurrency=${token}&chainId=${chain}`
    default:
      return ``
  }
}

export const openseaUrl = () => {
  const name = process.env.NEXT_PUBLIC_CONTRACT_NAME

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '137':
      // Mainnet
      return `https://opensea.io/collection/${name}`
    case '80001':
      // Mumbai
      return `https://testnets.opensea.io/collection/${name}`
    case '56':
      // Mainnet
      return `https://opensea.io/collection/${name}`
    case '97':
      // tBNB
      return `https://testnets.opensea.io/collection/${name}`
    default:
      return ``
  }
}

export const shopUrl = () => {
  const shop = process.env.NEXT_PUBLIC_CONTRACT_SHOP

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '137':
      // Mainnet
      return `https://opensea.io/collection/${shop}`
    case '80001':
      // Mumbai
      return `https://testnets.opensea.io/collection/${shop}`
    case '56':
      // Mainnet
      return `https://opensea.io/collection/${shop}`
    case '97':
      // tBNB
      return `https://testnets.opensea.io/collection/${shop}`
    default:
      return ``
  }
}

export const cmcUrl = () => {
  return `https://coinmarketcap.com/id/currencies/${process.env.NEXT_PUBLIC_TOKEN_SYMBOL}`
}

export const twitterUrl = () => {
  return `https://twitter.com/${process.env.NEXT_PUBLIC_TWITER_ACCOUNT}`
}

export const instagramUrl = () => {
  return `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT}`
}

export const discordUrl = () => {
  return `${process.env.NEXT_PUBLIC_DISCORD_URL}`
}

export const snsLinks = {
  explorerUrl,
  openseaUrl,
  shopUrl,
  twitterUrl,
  instagramUrl,
  discordUrl,
  cmcUrl
}
