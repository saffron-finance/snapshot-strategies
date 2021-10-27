const { JsonRpcProvider } = require('@ethersproject/providers');
const snapshot = require('../').default;
const networks = require('@snapshot-labs/snapshot.js/src/networks.json');

const space = 'turpintinz.eth';
const network = '1';
const snapshotBlockNumber = 13497529;
const strategies = [

  {
    name: "saffron-finance",
    params: {
      symbol: "SFI",
      votingSchemes: [
        {
          "name": "oneToOne",
          "type": "DirectBoostScheme",
          "multiplier": 1.0
        },
        {
          "name": "staking",
          "type": "DirectBoostScheme",
          "multiplier": 1.1
        },
        {
          "name": "uniswap",
          "type": "LPReservePairScheme",
          "multiplier": 1.1
        },
        {
          "name": "sushiswap",
          "type": "LPReservePairScheme",
          "multiplier": 1.1
        }
      ],
      dexLpTypes: [
        {
          "name": "uniswap",
          "lpToken": "0xC76225124F3CaAb07f609b1D147a31de43926cd6"
        },
        {
          "name": "sushiswap",
          "lpToken": "0x23a9292830Fc80dB7f563eDb28D2fe6fB47f8624"
        }
      ],
      contracts: [
        {
          "votingScheme": "oneToOne",
          "label": "SFI",
          "tokenAddress": "0xb753428af26e81097e7fd17f40c88aaa3e04902c"
        },
        {
          "votingScheme": "oneToOne",
          "label": "TEAM_HODL_TOKEN",
          "tokenAddress": "0x4e5ee20900898054e998fd1862742c28c651bf5d"
        },
        {
          "votingScheme": "staking",
          "label": "E2_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x1A9aA87F180A502930c22361e2a746137Ba74750"
        },
        {
          "votingScheme": "staking",
          "label": "E3_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0xEd4eaeB6e20d899143b74a5b4130322418d87765"
        },
        {
          "votingScheme": "staking",
          "label": "E4_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x11942800A0596D3fe9641a116eeaeD387b638c1A"
        },
        {
          "votingScheme": "staking",
          "label": "E5_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x3b3570c445a7Eb359dedD91F8348dC746223A87D"
        },
        {
          "votingScheme": "staking",
          "label": "E6_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0xbAD5Cc4fFA06e16e367a6D492ADd8Ca04aEAe4A2"
        },
        {
          "votingScheme": "staking",
          "label": "E7_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x03B41d734D3dcd23F1B3f1AFF65270Bf6eB233eA"
        },
        {
          "votingScheme": "staking",
          "label": "E8_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0xceF561E639b53e04aB9E82653fdfacAe135A0Ad0"
        },
        {
          "votingScheme": "staking",
          "label": "E9_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x3C3105CDbC01350C9A303352C163216A8fb2180f"
        },
        {
          "votingScheme": "staking",
          "label": "E10_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x96B45C15bB1AE5DD175a4Bc721868B28b8AD2291"
        },
        {
          "votingScheme": "staking",
          "label": "E11_SFISTAK_LP_PRINCIPAL",
          "tokenAddress": "0x77B2914Fe065b5bf38553D1CF3f3717f32B7C4c8"
        },{
          "votingScheme": "uniswap",
          "label": "E2_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0xF489fF098BFC862F09ec583c01bCFD2D4C43c589"
        },
        {
          "votingScheme": "uniswap",
          "label": "E3_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x68b03AbC0b41Bc2F113d103CffC39bD9aD850f8f"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E3_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x531B49EFd42775788f72a470a64E6b54d198f0be"
        },
        {
          "votingScheme": "uniswap",
          "label": "E4_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x531B49EFd42775788f72a470a64E6b54d198f0be"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E4_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x898932Fd99355953DC46cb6Aa47F76a183ACb381"
        },
        {
          "votingScheme": "uniswap",
          "label": "E5_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x2E44c39a205BD8F807d1f1AE97B921F0DA32f225"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E5_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x32c93305FF2c79D139e344B913a6202572c67cA4"
        },
        {
          "votingScheme": "uniswap",
          "label": "E6_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x9DaB689F26688C6da25869CE414E4BDcCfD0289F"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E6_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x740b3e7dD42D7ff4769c2dE4Cb3C968E4e0aa6B6"
        },
        {
          "votingScheme": "uniswap",
          "label": "E7_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x7972790bADE77686852309F60d9C60912b899C39"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E7_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x7DF684a871fAF58579f210CBcC001CB02b5D1b7F"
        },
        {
          "votingScheme": "uniswap",
          "label": "E8_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x20A1ad2122B145F1629713b41af3A8C15aDBF499"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E8_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x20A1ad2122B145F1629713b41af3A8C15aDBF499"
        },
        {
          "votingScheme": "uniswap",
          "label": "E9_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0xe4B9FfC784A0cD9e5411B5880e2066E6D6E436c3"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E9_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x063E86d5A10cadA77d4a7385F93A09a1A5d2178B"
        },
        {
          "votingScheme": "uniswap",
          "label": "E10_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0xff1c79Ef1b3096314a3Bed7F0bD71f1D9A422eC6"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E10_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x9D128c1a98a229670A5D4FDa1DCbdB33Ee54cB7d"
        },
        {
          "votingScheme": "uniswap",
          "label": "E11_SFIETH_UNI_LP_PRINCIPAL",
          "tokenAddress": "0x386DbC8Aae0B53dE186D1a9AaC0a4AD48B4Ac624"
        },
        {
          "votingScheme": "sushiswap",
          "label": "E11_SFIETH_SUSHI_LP_PRINCIPAL",
          "tokenAddress": "0x016b05626510c1c599c3F5dA3C290e3b1c734884"
        }
      ]
    }
  },
/*
  {
  "name": "masterchef-pool-balance-price",
  "params": {
    "symbol": "SFI SINGLE",
    "chefAddress": "0x4eB4C5911e931667fE1647428F38401aB1661763",
    "tokenAddress": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
    "pid": "0",
    "weight": 11,
    "weightDecimals": 1
    }
  },

  {
    "name": "masterchef-pool-balance-price",
    "params": {
      "symbol": "SFI-ETH UNIV2",
      "chefAddress": "0x4eB4C5911e931667fE1647428F38401aB1661763",
      "uniPairAddress": "0xC76225124F3CaAb07f609b1D147a31de43926cd6",
      "token0": {
        "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
        "weight": 1,
        "weightDecimals": 0
       },
      "pid": "1",
      "weight": 11,
      "weightDecimals": 1
    }
  },

  {
    "name": "masterchef-pool-balance-price",
    "params": {
      "symbol": "SFI-ETH SUSHI",
      "chefAddress": "0x4eB4C5911e931667fE1647428F38401aB1661763",
      "uniPairAddress": "0x23a9292830Fc80dB7f563eDb28D2fe6fB47f8624",
      "token0": {
        "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
        "weight": 1,
        "weightDecimals": 0
       },
      "pid": "2",
      "weight": 11,
      "weightDecimals": 1
    }
  },
*/

  {
    "name": "masterchef-pool-balance-price",
    "params": {
      "symbol": "SFI-BTSE UNIV2",
      "chefAddress": "0x4eB4C5911e931667fE1647428F38401aB1661763",
      "uniPairAddress": "0xffF475E8FDe7380A9A29a6441B832353337B094e",
      "token1": {
        "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
        "weight": 1,
        "weightDecimals": 0
      },
      "pid": "3",
      "weight": 11,
      "weightDecimals": 1
    }
  },

  {
    "name": "masterchef-pool-balance-price",
    "params": {
      "symbol": "SFI-ALPHA UNIV2",
      "chefAddress": "0x4eB4C5911e931667fE1647428F38401aB1661763",
      "uniPairAddress": "0x83887500Cf852cb4af33d74c148c9C7C35f91620",
      "token1": {
        "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
        "weight": 1,
        "weightDecimals": 0
      },
      "pid": "4",
      "weight": 11,
      "weightDecimals": 1
    }
  }

];
const addresses = [
  '0xD90B866039E8820c2Cd082840fceeD81Cef691F8',
  '0x905D6a479C4be28aF08364CE1c8e02eBC9c4bdA8',
  '0xad3ce5274f8e2953bb87b838df3f01c1c224d346',
  '0x59b2f9fcf70c128c02ff7825375abe1260bfc339'
];

(async () => {
  console.time('getScores');
  try {
    const scores = await snapshot.utils.getScoresDirect(
      space,
      strategies,
      network,
      new JsonRpcProvider(networks[network].rpc[0]),
      addresses,
      snapshotBlockNumber
    );
    console.log(scores);
  } catch (e) {
    console.log('getScores failed');
    console.error(e);
  }
  console.timeEnd('getScores');
})();
