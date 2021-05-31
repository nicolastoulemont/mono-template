import gql from 'graphql-tag'

export const GET_USER_BY_ID = gql`
	query UserById($id: ID!) {
		userById(id: $id) {
			... on Node {
				id
			}
			... on User {
				name
				status
				... on ActiveUser {
					email
					posts {
						id
						title
					}
				}
				... on DeletedUser {
					deletedAt
				}
				... on BannedUser {
					banReason
				}
			}
		}
	}
`

export const GET_USERS = gql`
	query Users {
		users {
			... on Node {
				id
			}
			... on User {
				name
				status
				... on ActiveUser {
					email
					posts {
						id
						title
					}
				}
				... on DeletedUser {
					deletedAt
				}
				... on BannedUser {
					banReason
				}
			}
		}
	}
`
