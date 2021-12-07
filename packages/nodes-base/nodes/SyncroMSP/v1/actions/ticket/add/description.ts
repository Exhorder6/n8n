import {
	TicketProperties,
} from '../../Interfaces';

export const ticketAddDescription: TicketProperties = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getCustomers',
		},
		options: [],
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'add',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'add',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'add',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Asset ID',
				name: 'assetId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Problem Type',
				name: 'problemType',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Ticket Type',
				name: 'ticketType',
				type: 'string',
				default: '',
			},
		],
	},
];