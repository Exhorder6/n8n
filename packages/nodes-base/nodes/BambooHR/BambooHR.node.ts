import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';

import { router } from './v1/actions/router';
import { versionDescription } from './v1/actions/versionDescription';
import { loadOptions } from './v1/methods';

import {
	apiRequest,
} from './v1/transport';

export class BambooHR implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return [await router.call(this)];
	}
}