export const VEYFI_POSITION_HELPER_ABI = [
	{inputs: [], stateMutability: 'nonpayable', type: 'constructor'},
	{
		inputs: [],
		name: 'VEYFI',
		outputs: [{internalType: 'contract VoteEscrow', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: 'user', type: 'address'}],
		name: 'getPositionDetails',
		outputs: [
			{
				components: [
					{internalType: 'uint256', name: 'balance', type: 'uint256'},
					{
						internalType: 'uint256',
						name: 'depositAmount',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'withdrawable',
						type: 'uint256'
					},
					{internalType: 'uint256', name: 'penalty', type: 'uint256'},
					{
						internalType: 'uint256',
						name: 'unlockTime',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'timeRemaining',
						type: 'uint256'
					}
				],
				internalType: 'struct VeYfiPositionHelper.Position',
				name: 'position',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;
