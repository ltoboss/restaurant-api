export enum GlobalVariablesType {
  CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD = 1
}

export const globalVariablesTypes = [
	{
	  id: GlobalVariablesType.CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD,
	  name: 'Umbral mínimo de asignación de consolidado',
	},
  ];

export const globalVariablesValid = [
	GlobalVariablesType.CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD,
];