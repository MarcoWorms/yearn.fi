import {z} from 'zod';
import {toBigInt} from '@yearn-finance/web-lib/utils/format.bigNumber';
import {addressSchema} from '@yearn-finance/web-lib/utils/schemas/addressSchema';

const zodDefaultAPR = {
	type: 'unknown',
	netAPR: 0,
	fees: {
		performance: 0,
		withdrawal: 0,
		management: 0,
		keepCRV: 0,
		keepVelo: 0,
		cvxKeepCRV: 0
	},
	extra: {
		stakingRewardsAPR: 0
	},
	points: {
		weekAgo: 0,
		monthAgo: 0,
		inception: 0
	},
	forwardAPR: {
		type: 'unknown',
		netAPR: 0,
		composite: {
			boost: 0,
			poolAPY: 0,
			boostedAPR: 0,
			baseAPR: 0,
			cvxAPR: 0,
			rewardsAPR: 0
		}
	}
};

const yDaemonVaultStrategySchema = z.object({
	address: addressSchema,
	name: z.string(),
	displayName: z.string(),
	description: z.string(),
	details: z
		.object({
			keeper: addressSchema,
			strategist: addressSchema,
			rewards: addressSchema,
			healthCheck: addressSchema,
			totalDebt: z.string(),
			totalLoss: z.string(),
			totalGain: z.string(),
			minDebtPerHarvest: z.string(),
			maxDebtPerHarvest: z.string(),
			estimatedTotalAssets: z.string(),
			creditAvailable: z.string(),
			debtOutstanding: z.string(),
			expectedReturn: z.string(),
			delegatedAssets: z.string(),
			delegatedValue: z.string(),
			version: z.string(),
			protocols: z.array(z.string()).or(z.null()),
			apr: z.number(),
			performanceFee: z.number(),
			lastReport: z.number(),
			activation: z.number(),
			keepCRV: z.number(),
			debtLimit: z.number(),
			withdrawalQueuePosition: z.number(),
			doHealthCheck: z.boolean(),
			inQueue: z.boolean(),
			emergencyExit: z.boolean(),
			isActive: z.boolean(),
			debtRatio: z.number().optional()
		})
		.optional(), // Optional for migratable
	risk: z
		.object({
			riskScore: z.number(),
			riskGroup: z.string(),
			riskDetails: z.object({
				TVLImpact: z.number(),
				auditScore: z.number(),
				codeReviewScore: z.number(),
				complexityScore: z.number(),
				longevityImpact: z.number(),
				protocolSafetyScore: z.number(),
				teamKnowledgeScore: z.number(),
				testingScore: z.number()
			}),
			allocation: z.object({
				status: z.string(),
				currentTVL: z.number().or(z.null()),
				availableTVL: z.number(),
				currentAmount: z.number().or(z.null()),
				availableAmount: z.number().or(z.null())
			})
		})
		.optional() // Optional for migratable
});

export const yDaemonVaultTokenSchema = z.object({
	address: addressSchema,
	underlyingTokensAddresses: z.array(addressSchema),
	name: z.string(),
	symbol: z.string(),
	type: z.string(),
	display_name: z.string(),
	display_symbol: z.string(),
	description: z.string(),
	icon: z.string(),
	decimals: z.number()
});

export const yDaemonVaultSchema = z.object({
	address: addressSchema,
	type: z
		.literal('Automated')
		.or(z.literal('Automated Yearn Vault'))
		.or(z.literal('Experimental'))
		.or(z.literal('Experimental Yearn Vault'))
		.or(z.literal('Standard'))
		.or(z.literal('Yearn Vault')),
	symbol: z.string(),
	display_symbol: z.string(),
	formated_symbol: z.string(),
	name: z.string(),
	display_name: z.string(),
	formated_name: z.string(),
	icon: z.string(),
	version: z.string(),
	category: z.literal('Curve').or(z.literal('Volatile').or(z.literal('Balancer')).or(z.literal('Stablecoin'))).or(z.literal('Velodrome')).or(z.literal('Boosted')).or(z.literal('Aerodrome')),
	inception: z.number(),
	decimals: z.number(),
	chainID: z.number(),
	riskScore: z.number(),
	endorsed: z.boolean(),
	emergency_shutdown: z.boolean(),
	token: yDaemonVaultTokenSchema,
	tvl: z.object({
		total_assets: z.string().transform((val): bigint => toBigInt(val)),
		total_delegated_assets: z.string().transform((val): bigint => toBigInt(val)),
		tvl_deposited: z.number().default(0).catch(0),
		tvl_delegated: z.number().default(0).catch(0),
		tvl: z.number().default(0).catch(0),
		price: z.number().default(0).catch(0)
	}),
	apr: z.object({
		type: z.string().min(1).default('unknown').catch('unknown'),
		netAPR: z.number().default(0).catch(0),
		fees: z.object({
			performance: z.number().default(0).catch(0),
			withdrawal: z.number().default(0).catch(0),
			management: z.number().default(0).catch(0),
			keepCRV: z.number().default(0).catch(0),
			keepVelo: z.number().default(0).catch(0),
			cvxKeepCRV: z.number().default(0).catch(0)
		}).default({}),
		extra: z.object({
			stakingRewardsAPR: z.number().default(0).catch(0)
		}).default({}),
		points: z.object({
			weekAgo: z.number().default(0).catch(0),
			monthAgo: z.number().default(0).catch(0),
			inception: z.number().default(0).catch(0)
		}).default({}),
		forwardAPR: z.object({
			type: z.string().default('unknown').catch('unknown'),
			netAPR: z.number().default(0).catch(0),
			composite: z.object({
				boost: z.number().default(0).catch(0),
				poolAPY: z.number().default(0).catch(0),
				boostedAPR: z.number().default(0).catch(0),
				baseAPR: z.number().default(0).catch(0),
				cvxAPR: z.number().default(0).catch(0),
				rewardsAPR: z.number().default(0).catch(0)
			}).default({})
		}).default({})
	}),
	details: z.object({
		management: addressSchema,
		governance: addressSchema,
		guardian: addressSchema,
		rewards: addressSchema,
		depositLimit: z.string(),
		availableDepositLimit: z.string(),
		comment: z.string(),
		apyTypeOverride: z.string(),
		apyOverride: z.number(),
		order: z.number(),
		performanceFee: z.number(),
		managementFee: z.number(),
		depositsDisabled: z.boolean(),
		withdrawalsDisabled: z.boolean(),
		allowZapIn: z.boolean(),
		allowZapOut: z.boolean(),
		retired: z.boolean(),
		hideAlways: z.boolean()
	}),
	strategies: z.array(yDaemonVaultStrategySchema),
	migration: z.object({
		available: z.boolean(),
		address: addressSchema,
		contract: addressSchema
	}),
	staking: z.object({
		available: z.boolean(),
		address: addressSchema,
		tvl: z.number(),
		risk: z.number()
	})
});

export const yDaemonVaultsSchema = z.array(yDaemonVaultSchema);
export const yDaemonVaultHarvestSchema = z.object({
	vaultAddress: addressSchema.optional(),
	strategyAddress: addressSchema.optional(),
	txHash: z.string().optional(),
	timestamp: z.string(),
	profit: z.string(),
	profitValue: z.number().optional(),
	loss: z.string(),
	lossValue: z.number().optional()
});
export const yDaemonVaultHarvestsSchema = z.array(yDaemonVaultHarvestSchema);

export type TYDaemonVault = z.infer<typeof yDaemonVaultSchema>;
export type TYDaemonVaultStrategy = z.infer<typeof yDaemonVaultStrategySchema>;
export type TYDaemonVaults = z.infer<typeof yDaemonVaultsSchema>;
export type TYDaemonVaultHarvest = z.infer<typeof yDaemonVaultHarvestSchema>;
export type TYDaemonVaultHarvests = z.infer<typeof yDaemonVaultHarvestsSchema>;
export type TYDaemonVaultTokenSchema = z.infer<typeof yDaemonVaultTokenSchema>;

export const isStandardVault = (vault: TYDaemonVault): boolean => vault.type === 'Standard' || vault.type === 'Yearn Vault';
export const isAutomatedVault = (vault: TYDaemonVault): boolean => vault.type === 'Automated' || vault.type === 'Automated Yearn Vault';
export const isExperimentalVault = (vault: TYDaemonVault): boolean => vault.type === 'Experimental' || vault.type === 'Experimental Yearn Vault';
