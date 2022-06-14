import { tokenIcons } from './assets/images';

export enum TokenNames {
  scrt = "SCRT",
  atom = "ATOM",
  luna = "Luna",
  ust = "UST",
  osmo = "OSMO",
  dvpn = "DVPN",
  huahua = "HUAHUA",
  juno = "JUNO",
  akt = "AKT",
}

export interface TokenOptions {
  name: TokenNames,
  image: string
}

type ValueOf<T> = T[keyof T];

export type mergeStateType = (data: keyof TokenOptions | Record<keyof TokenOptions, ValueOf<TokenOptions>>, value?: any) => void

export enum Percents {
  v25 = '25%',
  v50 = '50%',
  v75 = '75%',
  v100 = '100%',
}

export type TokensData = {
  [TokenNames: string]: {
    market_cap: number,
    price_change_percentage_24h: number,
  }
}

export type Token = {
  /** display name of the token */
  name: string;
  /** secret contract address of the token */
  address: string;
  /** secret contract code hash of the token */
  code_hash: string;
  /** logo of the token */
  image: string;
  /** decimals of the token */
  decimals: number;
  /** coingeck id to get usd price */
  coingecko_id: string;
  /** how to deposit this token into Secret Network */
  deposits: Deposit[];
  /** how to withdraw this token out of Secret Network */
  withdrawals: Withdraw[];
};

export type Deposit = {
  /** display name of the source chain */
  source_chain_name: string;
  /** denom on the other chain */
  from_denom: string;
};

export type Withdraw = {
  /** display name of the target chain */
  target_chain_name: string;
  /** denom on Secret Network */
  from_denom: string;
};

export const tokens: Token[] = [
  {
    name: TokenNames.scrt,
    address: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
    code_hash:
      "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e",
    image: tokenIcons.scrt,
    decimals: 6,
    coingecko_id: "secret",
    deposits: [
      {
        source_chain_name: "Cosmos Hub",
        from_denom:
          "ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F", // SCRT denom on Cosmos
      },
      {
        source_chain_name: "Terra",
        from_denom:
          "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09", // SCRT denom on Terra
      },
      {
        source_chain_name: "Osmosis",
        from_denom:
          "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A", // SCRT denom on Osmosis
      },
      {
        source_chain_name: "Sentinel",
        from_denom:
          "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8", // SCRT denom on Sentinel
      },
      {
        source_chain_name: "Juno",
        from_denom:
          "ibc/CD78EE5B20682E5A61B4D96C9F4DC39361269B88A6B3462C26A18652F7A90A9A", // SCRT denom on Juno
      },
      {
        source_chain_name: "Chihuahua",
        from_denom:
          "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09", // SCRT denom on Chihuahua
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Cosmos Hub",
        from_denom: "uscrt",
      },
      {
        target_chain_name: "Terra",
        from_denom: "uscrt",
      },
      {
        target_chain_name: "Osmosis",
        from_denom: "uscrt",
      },
      {
        target_chain_name: "Sentinel",
        from_denom: "uscrt",
      },
      {
        target_chain_name: "Juno",
        from_denom: "uscrt",
      },
      {
        target_chain_name: "Chihuahua",
        from_denom: "uscrt",
      },
    ],
  },
  {
    name: TokenNames.atom,
    address: "secret14mzwd0ps5q277l20ly2q3aetqe3ev4m4260gf4",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: tokenIcons.atom,
    decimals: 6,
    coingecko_id: "cosmos",
    deposits: [
      {
        source_chain_name: "Cosmos Hub",
        from_denom: "uatom",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Cosmos Hub",
        from_denom:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      },
    ],
  },
  {
    name: TokenNames.luna,
    address: "secret1ra7avvjh9fhr7dtr3djutugwj59ptctsrakyyw",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: tokenIcons.luna,
    decimals: 6,
    coingecko_id: "terra-luna",
    deposits: [
      {
        source_chain_name: "Terra",
        from_denom: "uluna",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Terra",
        from_denom:
          "ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2",
      },
    ],
  },
  {
    name: TokenNames.ust,
    address: "secret129h4vu66y3gry6wzwa24rw0vtqjyn8tujuwtn9",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: tokenIcons.ust,
    decimals: 6,
    coingecko_id: "terra-usd",
    deposits: [
      {
        source_chain_name: "Terra",
        from_denom: "uusd",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Terra",
        from_denom:
          "ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E",
      },
    ],
  },
  {
    name: TokenNames.osmo,
    address: "secret1zwwealwm0pcl9cul4nt6f38dsy6vzplw8lp3qg",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: tokenIcons.osmo,
    decimals: 6,
    coingecko_id: "osmosis",
    deposits: [
      {
        source_chain_name: "Osmosis",
        from_denom: "uosmo",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Osmosis",
        from_denom:
          "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      },
    ],
  },
  {
    name: TokenNames.dvpn,
    address: "secret1k8cge73c3nh32d4u0dsd5dgtmk63shtlrfscj5",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: tokenIcons.dvpn,
    decimals: 6,
    coingecko_id: "sentinel",
    deposits: [
      {
        source_chain_name: "Sentinel",
        from_denom: "udvpn",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Sentinel",
        from_denom:
          "ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B",
      },
    ],
  },
  {
    name: TokenNames.huahua,
    address: "secret1ntvxnf5hzhzv8g87wn76ch6yswdujqlgmjh32w",
    code_hash:
      "182d7230c396fa8f548220ff88c34cb0291a00046df9ff2686e407c3b55692e9",
    image: tokenIcons.huahua,
    decimals: 6,
    coingecko_id: "chihuahua-chain",
    deposits: [
      {
        source_chain_name: "Chihuahua",
        from_denom: "uhuahua",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Chihuahua",
        from_denom:
          "ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E", // HUAHUA denom on Secret
      },
    ],
  },
  {
    name: TokenNames.juno,
    address: "", //"secret1smmc5k24lcn4j2j8f3w0yaeafga6wmzl0qct03",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: tokenIcons.juno,
    decimals: 6,
    coingecko_id: "juno-network",
    deposits: [
      {
        source_chain_name: "Juno",
        from_denom: "ujuno",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Juno",
        from_denom:
          "ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006", // JUNO denom on Secret
      },
    ],
  },
  {
    name: TokenNames.akt,
    address: "",
    code_hash: "",
    image: tokenIcons.akt,
    decimals: 6,
    coingecko_id: "akash-network",
    deposits: [
      {
        source_chain_name: "Akash",
        from_denom: "uakt",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Akash",
        from_denom: "ibc/", // AKT denom on Secret
      },
    ],
  },
];

export type Chain = {
  /** display name of the chain */
  chain_name: string;
  /** channel_id on the chain */
  deposit_channel_id: string;
  /** gas limit for ibc transfer from the chain to Secret Network */
  deposit_gas: number;
  /** channel_id on Secret Network */
  withdraw_channel_id: string;
  /** gas limit for ibc transfer from Secret Network to the chain */
  withdraw_gas: number;
  /** bech32 prefix of addresses on the chain */
  bech32_prefix: string;
  /** logo of the chain */
  chain_image: string;
  /** chain-id of the chain */
  chain_id: string;
  /** lcd url of the chain */
  lcd: string;
  /** rpc url of the chain */
  rpc: string;
  /** explorer link for accounts */
  explorer_account: string;
  /** explorer link for txs */
  explorer_tx?: string;
};

export const chains: { [chain_name: string]: Chain } = {
  "Secret Network": {
    chain_name: "Secret Network",
    deposit_channel_id: "",
    deposit_gas: 0,
    withdraw_channel_id: "",
    withdraw_gas: 0,
    chain_id: "secret-4",
    bech32_prefix: "secret",
    lcd: "https://api.roninventures.io/",
    rpc: "https://web-rpc.roninventures.io/", // gRPC-web
    chain_image: tokenIcons.scrt,
    explorer_account:
      "https://secretnodes.com/secret/chains/secret-4/accounts/",
  },
  "Cosmos Hub": {
    chain_name: "Cosmos Hub",
    deposit_channel_id: "channel-235",
    deposit_gas: 110_000,
    withdraw_channel_id: "channel-0",
    withdraw_gas: 30_000,
    chain_id: "cosmoshub-4",
    bech32_prefix: "cosmos",
    lcd: "https://lcd-cosmoshub.keplr.app",
    rpc: "https://cosmoshub.validator.network/",
    chain_image: tokenIcons.atom,
    explorer_account: "https://www.mintscan.io/cosmos/account/",
  },
  Terra: {
    chain_name: "Terra",
    deposit_channel_id: "channel-16",
    deposit_gas: 110_000,
    withdraw_channel_id: "channel-2",
    withdraw_gas: 30_000,
    chain_id: "columbus-5",
    bech32_prefix: "terra",
    lcd: "https://lcd-columbus.keplr.app",
    rpc: "https://rpc-columbus.keplr.app",
    chain_image: tokenIcons.terra,
    explorer_account: "https://finder.terra.money/mainnet/address/",
  },
  Osmosis: {
    chain_name: "Osmosis",
    deposit_channel_id: "channel-88",
    deposit_gas: 1_500_000,
    withdraw_channel_id: "channel-1",
    withdraw_gas: 30_000,
    chain_id: "osmosis-1",
    bech32_prefix: "osmo",
    lcd: "https://lcd-osmosis.blockapsis.com/",
    rpc: "https://osmosis.validator.network/",
    chain_image: tokenIcons.osmo,
    explorer_account: "https://www.mintscan.io/osmosis/account/",
  },
  Sentinel: {
    chain_name: "Sentinel",
    deposit_channel_id: "channel-50",
    deposit_gas: 110_000,
    withdraw_channel_id: "channel-3",
    withdraw_gas: 30_000,
    chain_id: "sentinelhub-2",
    bech32_prefix: "sent",
    lcd: "https://lcd-sentinel.keplr.app",
    rpc: "https://rpc-sentinel.keplr.app",
    chain_image: tokenIcons.dvpn,
    explorer_account: "https://www.mintscan.io/sentinel/account/",
  },
  Juno: {
    chain_name: "Juno",
    deposit_channel_id: "channel-48",
    deposit_gas: 110_000,
    withdraw_channel_id: "channel-8",
    withdraw_gas: 30_000,
    chain_id: "juno-1",
    bech32_prefix: "juno",
    lcd: "https://lcd-juno.itastakers.com",
    rpc: "https://rpc-juno.itastakers.com",
    chain_image: tokenIcons.juno,
    explorer_account: "https://www.mintscan.io/juno/account/",
  },
  Chihuahua: {
    chain_name: "Chihuahua",
    deposit_channel_id: "channel-16",
    deposit_gas: 110_000,
    withdraw_channel_id: "channel-11",
    withdraw_gas: 30_000,
    chain_id: "chihuahua-1",
    bech32_prefix: "chihuahua",
    lcd: "https://api.chihuahua.wtf/",
    rpc: "https://rpc.chihuahua.wtf/",
    chain_image: tokenIcons.huahua,
    explorer_account: "https://ping.pub/chihuahua/account/",
  },
};
