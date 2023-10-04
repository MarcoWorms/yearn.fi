export const VAULT_MIGRATOR_ABI = [
	{
		inputs: [
			{internalType: 'address', name: '_registry', type: 'address'},
			{
				internalType: 'contract IChiToken',
				name: '_chiToken',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IChiToken',
				name: '_chiToken',
				type: 'address'
			}
		],
		name: 'ChiTokenSet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_subsidizor',
				type: 'address'
			}
		],
		name: 'Subsidized',
		type: 'event'
	},
	{
		inputs: [],
		name: 'acceptGovernance',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'chiToken',
		outputs: [{internalType: 'contract IChiToken', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'governance',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'vaultFrom', type: 'address'},
			{internalType: 'address', name: 'vaultTo', type: 'address'}
		],
		name: 'migrateAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'vaultFrom', type: 'address'},
			{internalType: 'address', name: 'vaultTo', type: 'address'},
			{internalType: 'uint256', name: 'deadline', type: 'uint256'},
			{internalType: 'bytes', name: 'signature', type: 'bytes'}
		],
		name: 'migrateAllWithPermit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'vaultFrom', type: 'address'},
			{internalType: 'address', name: 'vaultTo', type: 'address'},
			{internalType: 'uint256', name: 'shares', type: 'uint256'}
		],
		name: 'migrateShares',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'vaultFrom', type: 'address'},
			{internalType: 'address', name: 'vaultTo', type: 'address'},
			{internalType: 'uint256', name: 'shares', type: 'uint256'},
			{internalType: 'uint256', name: 'deadline', type: 'uint256'},
			{internalType: 'bytes', name: 'signature', type: 'bytes'}
		],
		name: 'migrateSharesWithPermit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'pendingGovernance',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'registry',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'contract IChiToken',
				name: '_chiToken',
				type: 'address'
			}
		],
		name: 'setChiToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_pendingGovernance',
				type: 'address'
			}
		],
		name: 'setPendingGovernance',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_registry', type: 'address'}],
		name: 'setRegistry',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '_amount', type: 'uint256'}],
		name: 'subsidize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_token', type: 'address'}],
		name: 'sweep',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;
