export const VAULT_FACTORY_ABI = [
	{
		inputs: [
			{internalType: 'address', name: '_registry', type: 'address'},
			{
				internalType: 'address',
				name: '_convexStratImplementation',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_curveStratImplementation',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_convexFraxStratImplementation',
				type: 'address'
			},
			{internalType: 'address', name: '_owner', type: 'address'}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'category',
				type: 'uint256'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'lpToken',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'gauge',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'vault',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'convexStrategy',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'curveStrategy',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'convexFraxStrategy',
				type: 'address'
			}
		],
		name: 'NewAutomatedVault',
		type: 'event'
	},
	{
		inputs: [],
		name: 'CATEGORY',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'CVX',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'acceptOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'allDeployedVaults',
		outputs: [{internalType: 'address[]', name: '', type: 'address[]'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'baseFeeOracle',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'booster',
		outputs: [{internalType: 'contract IBooster', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_gauge', type: 'address'}],
		name: 'canCreateVaultPermissionlessly',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'convexFraxPoolRegistry',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'convexFraxStratImplementation',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'convexPoolManager',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'convexStratImplementation',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'convexVoter',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_gauge', type: 'address'}],
		name: 'createNewVaultsAndStrategies',
		outputs: [
			{internalType: 'address', name: 'vault', type: 'address'},
			{internalType: 'address', name: 'convexStrategy', type: 'address'},
			{internalType: 'address', name: 'curveStrategy', type: 'address'},
			{
				internalType: 'address',
				name: 'convexFraxStrategy',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: '_gauge', type: 'address'},
			{internalType: 'string', name: '_name', type: 'string'},
			{internalType: 'string', name: '_symbol', type: 'string'}
		],
		name: 'createNewVaultsAndStrategiesPermissioned',
		outputs: [
			{internalType: 'address', name: 'vault', type: 'address'},
			{internalType: 'address', name: 'convexStrategy', type: 'address'},
			{internalType: 'address', name: 'curveStrategy', type: 'address'},
			{
				internalType: 'address',
				name: 'convexFraxStrategy',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'curveStratImplementation',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'curveVoter',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		name: 'deployedVaults',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'depositLimit',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_gauge', type: 'address'}],
		name: 'doesStrategyProxyHaveGauge',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'fraxBooster',
		outputs: [{internalType: 'contract IBooster', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'fraxVoter',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '_convexPid', type: 'uint256'}],
		name: 'getFraxInfo',
		outputs: [
			{internalType: 'bool', name: 'hasFraxPool', type: 'bool'},
			{internalType: 'uint256', name: 'convexFraxPid', type: 'uint256'},
			{internalType: 'address', name: 'stakingAddress', type: 'address'}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_gauge', type: 'address'}],
		name: 'getPid',
		outputs: [{internalType: 'uint256', name: 'pid', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getProxy',
		outputs: [{internalType: 'address', name: 'proxy', type: 'address'}],
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
		inputs: [],
		name: 'guardian',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'harvestProfitMaxInUsdc',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'harvestProfitMinInUsdc',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'healthCheck',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'keepCRV',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'keepCVX',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'keepFXS',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'keeper',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_gauge', type: 'address'}],
		name: 'latestStandardVaultFromGauge',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'management',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'managementFee',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'numVaults',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'pendingOwner',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'performanceFee',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'registry',
		outputs: [{internalType: 'contract IRegistry', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_baseFeeOracle', type: 'address'}],
		name: 'setBaseFeeOracle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_booster', type: 'address'}],
		name: 'setBooster',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_convexFraxPoolRegistry',
				type: 'address'
			}
		],
		name: 'setConvexFraxPoolRegistry',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_convexFraxStratImplementation',
				type: 'address'
			}
		],
		name: 'setConvexFraxStratImplementation',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_convexPoolManager',
				type: 'address'
			}
		],
		name: 'setConvexPoolManager',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_convexStratImplementation',
				type: 'address'
			}
		],
		name: 'setConvexStratImplementation',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_curveStratImplementation',
				type: 'address'
			}
		],
		name: 'setCurveStratImplementation',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '_depositLimit', type: 'uint256'}],
		name: 'setDepositLimit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_fraxBooster', type: 'address'}],
		name: 'setFraxBooster',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_governance', type: 'address'}],
		name: 'setGovernance',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_guardian', type: 'address'}],
		name: 'setGuardian',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_harvestProfitMaxInUsdc',
				type: 'uint256'
			}
		],
		name: 'setHarvestProfitMaxInUsdc',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_harvestProfitMinInUsdc',
				type: 'uint256'
			}
		],
		name: 'setHarvestProfitMinInUsdc',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_health', type: 'address'}],
		name: 'setHealthcheck',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: '_keepCRV', type: 'uint256'},
			{internalType: 'address', name: '_curveVoter', type: 'address'}
		],
		name: 'setKeepCRV',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: '_keepCVX', type: 'uint256'},
			{internalType: 'address', name: '_convexVoter', type: 'address'}
		],
		name: 'setKeepCVX',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: '_keepFXS', type: 'uint256'},
			{internalType: 'address', name: '_fraxVoter', type: 'address'}
		],
		name: 'setKeepFXS',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_keeper', type: 'address'}],
		name: 'setKeeper',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_management', type: 'address'}],
		name: 'setManagement',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '_managementFee', type: 'uint256'}],
		name: 'setManagementFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
		name: 'setOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '_performanceFee', type: 'uint256'}],
		name: 'setPerformanceFee',
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
		inputs: [{internalType: 'address', name: '_tradeFactory', type: 'address'}],
		name: 'setTradeFactory',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: '_treasury', type: 'address'}],
		name: 'setTreasury',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'tradeFactory',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'treasury',
		outputs: [{internalType: 'address', name: '', type: 'address'}],
		stateMutability: 'view',
		type: 'function'
	}
] as const;
