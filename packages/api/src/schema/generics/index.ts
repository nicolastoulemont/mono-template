import { interfaceType, objectType } from 'nexus'

export const Node = interfaceType({
	name: 'Node',
	definition(t) {
		t.int('id', { description: 'GUID for a resource' })
	}
})

export const BooleanResult = objectType({
	name: 'BooleanResult',
	definition(t) {
		t.field('success', { type: 'Boolean' })
	}
})
