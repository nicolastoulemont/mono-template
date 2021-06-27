import gql from 'graphql-tag'

export const GET_USER_BY_ID = gql`
	query UserById($id: ID!) {
		userById(id: $id) {
			... on User {
				id
				username
			}
		}
	}
`

export const GET_USERS = gql`
	query AllUsers {
		allUsers {
			... on UsersList {
				users {
					id
					username
				}
			}
		}
	}
`
