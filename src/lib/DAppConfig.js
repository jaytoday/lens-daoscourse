import { Mumbai } from '@usedapp/core';
import { MUMBAI_RPC_URL } from './ConfigVars';

const DAppConfig = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: MUMBAI_RPC_URL,
  },
};

export default DAppConfig;
