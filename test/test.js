const { expect } = require('chai');
const { MockRuntime } = require('@axway/api-builder-test-utils');
const getPlugin = require('../src');

describe('flow-node filterarrayofobjects', () => {
	let plugin;
	let flowNode;
	beforeEach(async () => {
		plugin = await MockRuntime.loadPlugin(getPlugin);
		plugin.setOptions({ validateOutputs: true });
		flowNode = plugin.getFlowNode('filterarrayofobjects');
	});

	describe('#constructor', () => {
		it('should define flow-nodes', () => {
			expect(plugin).to.be.a('object');
			expect(plugin.getFlowNodeIds()).to.deep.equal([
				'filterarrayofobjects'
			]);
			expect(flowNode).to.be.a('object');

			// Ensure the flow-node matches the spec
			expect(flowNode.name).to.equal('Filter Array of Objects');
			expect(flowNode.description).to.equal('Filter object array by key value. Value must be string or Number. Returns an array.');
			expect(flowNode.icon).to.be.a('string');
			expect(flowNode.getMethods()).to.deep.equal([
				'filter'
			]);
		});

		// It is vital to ensure that the generated node flow-nodes are valid
		// for use in API Builder. Your unit tests should always include this
		// validation to avoid potential issues when API Builder loads your
		// node.
		it('should define valid flow-nodes', () => {
			// if this is invalid, it will throw and fail
			plugin.validate();
		});
	});

	/*
	describe('#filter', () => {

		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { array, key, value, output } = await flowNode.filter([{a: "1",b: 2,c: true},{a: "11",b: 22,c: true},{a: "100",b: 200,c: false}], 'a', '100');

			expect(array).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: array');
			expect(output).to.equal('error');

			expect(key).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: key');
			expect(output).to.equal('error');

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: value');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { _array, _key, _value, output } = await flowNode.filter([{a: "1",b: 2,c: true},{a: "11",b: 22,c: true},{a: "100",b: 200,c: false}], 'a', '100');

			expect(value).to.equal([{a: "100",b: 200,c: false}]);
			expect(output).to.equal('next');
		});
	});
	*/
	
});
