import { interfaceType } from 'nexus'

export const Node = interfaceType({
	name: 'Node',
	definition(t) {
		t.id('id', { description: 'GUID for a resource' })
	}
})
