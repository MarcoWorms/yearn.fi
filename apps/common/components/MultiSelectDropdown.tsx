import {Fragment, useState} from 'react';
import {Combobox, Transition} from '@headlessui/react';
import {useThrottledState} from '@react-hookz/web';
import {Renderable} from '@yearn-finance/web-lib/components/Renderable';
import {useWeb3} from '@yearn-finance/web-lib/contexts/useWeb3';
import {IconChevron} from '@common/icons/IconChevron';

import type {ReactElement} from 'react';

export type TMultiSelectOptionProps = {
	label: string;
	value: string;
	selected: boolean;
	icon?: ReactElement;
};

type TMultiSelectProps = {
	options: TMultiSelectOptionProps[];
	defaultOption: TMultiSelectOptionProps;
	placeholder?: string;
	onSelect: (options: TMultiSelectOptionProps[]) => void;
};

function SelectAllOption(option: TMultiSelectOptionProps): ReactElement {
	return (
		<Combobox.Option value={option}>
			<div className={'flex w-full items-center justify-between p-2'}>
				<p className={'pl-0 font-normal text-neutral-400'}>
					{option.label}
				</p>
				<input type={'checkbox'} checked={option.selected} className={'checked:bg-black'} readOnly />
			</div>
		</Combobox.Option>
	);
}

function Option(option: TMultiSelectOptionProps): ReactElement {
	return (
		<Combobox.Option value={option}>
			<div className={'flex w-full items-center justify-between p-2'}>
				<div className={'flex items-center'}>
					{option?.icon ? (
						<div className={'h-8 w-8 rounded-full'}>
							{option.icon}
						</div>
					) : null}
					<p className={`${option.icon ? 'pl-2' : 'pl-0'} font-normal text-neutral-900`}>
						{option.label}
					</p>
				</div>
				<input type={'checkbox'} checked={option.selected} className={'checked:bg-black'} readOnly />
			</div>
		</Combobox.Option>
	);
}

function DropdownEmpty({query}: {query: string}): ReactElement {
	const {isActive, openLoginModal} = useWeb3();

	if (!isActive) {
		return (
			<div
				onClick={(): void => openLoginModal()}
				className={'flex h-14 cursor-pointer flex-col items-center justify-center px-4 text-center transition-colors hover:bg-neutral-300'}>
				<b className={'text-neutral-900'}>{'Connect Wallet'}</b>
			</div>
		);
	}
	if (query !== '') {
		return (
			<div className={'relative flex h-14 flex-col items-center justify-center px-4 text-center'}>
				<div className={'flex h-10 items-center justify-center'}>
					<p className={'text-sm text-neutral-900'}>{'Nothing found.'}</p>
				</div>
			</div>
		);
	}
	return (
		<div className={'relative flex h-14 flex-col items-center justify-center px-4 text-center'}>
			<div className={'flex h-10 items-center justify-center'}>
				<span className={'loader'} />
			</div>
		</div>
	);
}

export function MultiSelectDropdown({
	options,
	onSelect,
	placeholder = ''
}: TMultiSelectProps): ReactElement {
	const [isOpen, set_isOpen] = useThrottledState(false, 400);
	const [currentOptions, set_currentOptions] = useState<TMultiSelectOptionProps[]>(options);
	const [isSelectAll, set_isSelectAll] = useState(false);
	const [query, set_query] = useState('');

	const filteredOptions = query === ''
		? currentOptions
		: currentOptions.filter((option): boolean => {
			return option.value.toLowerCase().includes(query.toLowerCase());
		});

	return (
		<Combobox
			value={currentOptions}
			onChange={(options): void => {
				// Hack(ish) because with this Combobox component we cannot unselect items
				const lastIndex = options.length - 1;
				const elementSelected = options[lastIndex];
				const currentElements = options.slice(0, lastIndex);

				let currentState: TMultiSelectOptionProps[] = [];

				if (elementSelected.value === 'select_all') {
					currentState = currentElements.map((option): TMultiSelectOptionProps => {
						return {...option, selected: !elementSelected.selected};
					});
					set_isSelectAll(!elementSelected.selected);
				} else {
					currentState = currentElements.map((option): TMultiSelectOptionProps => {
						return option.value === elementSelected.value ? {...option, selected: !option.selected} : option;
					});

					set_isSelectAll(!currentState.some((option): boolean => !option.selected));
				}

				set_currentOptions(currentState);
				onSelect(currentState);
			}}
			nullable
			multiple
		>
			<div className={'relative w-[32rem]'}>
				<Combobox.Button
					onClick={(): void => set_isOpen((o: boolean): boolean => !o)}
					className={'flex h-10 w-full items-center justify-between bg-neutral-0 p-2 text-base text-neutral-900 md:px-3'}
				>
					<Combobox.Input
						className={'w-full cursor-default overflow-x-scroll border-none bg-transparent p-0 outline-none scrollbar-none'}
						displayValue={(options: TMultiSelectOptionProps[]): string => {
							const selectedOptions = options.filter((option): boolean => option.selected);
							if (selectedOptions.length === 0) {
								return 'Select chain';
							}

							if (selectedOptions.length === 1) {
								return selectedOptions[0].label;
							}

							return 'Multiple';
						}}
						placeholder={placeholder}
						spellCheck={false}
						onChange={(event): void => set_query(event.target.value)} />
					<IconChevron
						aria-hidden={'true'}
						className={`h-6 w-6 transition-transform ${isOpen ? '-rotate-180' : 'rotate-0'}`}
					/>
				</Combobox.Button>
				<Transition
					as={Fragment}
					show={isOpen}
					enter={'transition duration-100 ease-out'}
					enterFrom={'transform scale-95 opacity-0'}
					enterTo={'transform scale-100 opacity-100'}
					leave={'transition duration-75 ease-out'}
					leaveFrom={'transform scale-100 opacity-100'}
					leaveTo={'transform scale-95 opacity-0'}
					afterLeave={(): void => {
						set_query('');
					}}>
					<Combobox.Options className={'absolute top-12 z-50 flex w-full cursor-pointer flex-col overflow-y-auto bg-white px-2 py-3 scrollbar-none'}>
						<SelectAllOption key={'select-all'} label={'Select all'} selected={isSelectAll} value={'select_all'} />
						<Renderable
							shouldRender={filteredOptions.length > 0}
							fallback={<DropdownEmpty query={query} />}>
							{filteredOptions.map((option): ReactElement => {
								return <Option key={option.value} {...option} />;
							}
							)}
						</Renderable>
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
}