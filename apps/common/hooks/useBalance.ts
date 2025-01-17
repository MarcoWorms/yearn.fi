
import {useMemo} from 'react';
import {toAddress} from '@yearn-finance/web-lib/utils/address';
import {toNormalizedBN} from '@yearn-finance/web-lib/utils/format.bigNumber';
import {useWallet} from '@common/contexts/useWallet';

import type {TAddress, TDict} from '@yearn-finance/web-lib/types';
import type {TBalanceData} from '@yearn-finance/web-lib/types/hooks';

export function useBalance(
	address: string | TAddress,
	source?: TDict<TBalanceData>
): TBalanceData {
	const {balances, balancesNonce} = useWallet();
	const balance = useMemo((): TBalanceData => {
		balancesNonce; // remove warning, force deep refresh
		if (source) {
			return source?.[toAddress(address)] || toNormalizedBN(0);
		}
		return balances?.[toAddress(address)] || toNormalizedBN(0);
	}, [source, balances, address, balancesNonce]);

	return balance;
}
