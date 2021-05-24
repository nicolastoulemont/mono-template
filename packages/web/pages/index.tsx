import Head from 'next/head'
import React, { useState, useMemo } from 'react'
import { toErrorRecord } from 'utils'
import { isType, isTypeInTuple } from 'gql-typeguards'
import { CheckIcon, CloseIcon, NotAllowedIcon } from '@chakra-ui/icons'
import foo from 'shared'
import {
	useCreateUserMutation,
	useUsersQuery,
	useChangeUserStatusMutation,
	UserStatus,
	useCreatePostMutation,
	ActiveUser
} from 'gql-gen'
import {
	UnorderedList,
	ListItem,
	ListIcon,
	Input,
	Flex,
	Button,
	Box,
	Heading,
	Text,
	IconButton,
	Spinner,
	Grid,
	GridItem,
	Textarea,
	Select
} from '@chakra-ui/react'

export default function Home() {
	const [{ data, fetching }] = useUsersQuery()

	const deletedUsers = useMemo(
		() => data?.users?.filter(isTypeInTuple('DeletedUser')) ?? [],
		[data]
	)
	const bannedUsers = useMemo(
		() => data?.users?.filter(isTypeInTuple('BannedUser')) ?? [],
		[data]
	)
	const activeUsers = useMemo(
		() => data?.users?.filter(isTypeInTuple('ActiveUser')) ?? [],
		[data]
	)

	return (
		<>
			<Head>
				<title>Fun with Union Types and Plugins</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex
				as='main'
				width='100%'
				height='100vh'
				align='center'
				flexDir='column'
				justify='center'
			>
				{foo}
				<Grid
					width='100%'
					maxW='1200px'
					templateColumns='repeat(2, 1fr)'
					gap={6}
					my={12}
					px={6}
				>
					<UserForm />
					<PostForm activeUsers={activeUsers} />
				</Grid>
				<Grid width='100%' maxW='1200px' templateColumns='repeat(2, 1fr)' gap={6} px={6}>
					<GridItem>
						<UnorderedList width='100%' ml={0}>
							<Heading size='md' textAlign='center'>
								Active
							</Heading>
							{fetching && <Spinner />}
							{activeUsers?.map((user, index) => (
								<UserListItem user={user} key={`${user.id}${index}`}>
									{user.posts.length > 0 ? (
										<UnorderedList ml={0}>
											{user.posts.map((post) => (
												<ListItem
													key={post.title}
													listStyleType='none'
													fontSize='sm'
												>
													{post.title}
												</ListItem>
											))}
										</UnorderedList>
									) : null}
								</UserListItem>
							))}
						</UnorderedList>
					</GridItem>

					<GridItem>
						<UnorderedList width='100%' ml={0}>
							<Heading size='md' textAlign='center'>
								Deleted
							</Heading>
							{fetching && <Spinner />}
							{deletedUsers?.map((user) => (
								<UserListItem user={user} key={user.id} />
							))}
						</UnorderedList>
						<UnorderedList width='100%' ml={0}>
							<Heading size='md' textAlign='center'>
								Banned
							</Heading>
							{fetching && <Spinner />}
							{bannedUsers?.map((user) => (
								<UserListItem user={user} key={user.id} />
							))}
						</UnorderedList>
					</GridItem>
				</Grid>
			</Flex>
		</>
	)
}

const initialUserState = {
	name: '',
	email: ''
}

function UserForm() {
	const [{ name, email }, setState] = useState(initialUserState)
	const [errors, setErrors] = useState({})

	const [result, saveUser] = useCreateUserMutation()

	async function handleSubmit(e) {
		e?.preventDefault()
		const { data } = await saveUser({ name, email })
		if (isType(data?.createUser, 'ActiveUser')) {
			setState(initialUserState)
			setErrors({})
		} else if (isType(data?.createUser, 'InvalidArgumentsError')) {
			setErrors(toErrorRecord(data.createUser.invalidArguments))
		}
	}
	return (
		<GridItem display='flex' flexDirection='column' as='form' onSubmit={handleSubmit}>
			<Heading size='md' textAlign='center'>
				Add user
			</Heading>
			<Input
				type='text'
				name='name'
				placeholder='name'
				value={name}
				onChange={(e) => setState((state) => ({ ...state, name: e.target.value }))}
			/>
			<Input
				type='email'
				name='email'
				placeholder='email'
				value={email}
				onChange={(e) => setState((state) => ({ ...state, email: e.target.value }))}
				style={{ margin: '10px auto' }}
			/>

			<Button onClick={handleSubmit}>Click me</Button>
			{Object.keys(errors).length > 0 ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
		</GridItem>
	)
}

const initialPostState = {
	title: '',
	content: '',
	authorEmail: ''
}

type ActiveUsers = Pick<ActiveUser, 'id' | 'name' | 'status' | 'email'>[]
function PostForm({ activeUsers = [] }: { activeUsers: ActiveUsers }) {
	const [{ title, content, authorEmail }, setState] = useState(initialPostState)
	const [errors, setErrors] = useState({})

	const [result, createPost] = useCreatePostMutation()

	async function handleSubmit(e) {
		e?.preventDefault()
		const { data } = await createPost({ title, content, authorEmail })
		if (isType(data?.createPost, 'Post')) {
			setState(initialPostState)
			setErrors({})
		} else if (isType(data?.createPost, 'InvalidArgumentsError')) {
			setErrors(toErrorRecord(data.createPost.invalidArguments))
		}
	}

	return (
		<GridItem display='flex' flexDirection='column' as='form' onSubmit={handleSubmit}>
			<Heading size='md' textAlign='center'>
				Add post
			</Heading>
			<Input
				type='text'
				name='title'
				placeholder='title'
				value={title}
				onChange={(e) => setState((state) => ({ ...state, title: e.target.value }))}
			/>
			<Textarea
				type='text'
				name='content'
				placeholder='content'
				value={content}
				onChange={(e) => setState((state) => ({ ...state, content: e.target.value }))}
				style={{ margin: '10px auto' }}
			/>
			<Select
				placeholder='Author'
				mb={3}
				onChange={(e) => setState((state) => ({ ...state, authorEmail: e.target.value }))}
			>
				{activeUsers.map((user) => (
					<option key={user.id} value={user.email}>
						{user.name}
					</option>
				))}
			</Select>

			<Button onClick={handleSubmit}>Click me</Button>
			{Object.keys(errors).length > 0 ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
		</GridItem>
	)
}

function UserListItem({ user, children }: { user: any; children?: React.ReactNode }) {
	const [result, changeUserStatus] = useChangeUserStatusMutation()
	const icon =
		user.status === 'ACTIVE'
			? { name: CheckIcon, color: 'green.500' }
			: user.status === 'DELETED'
			? { name: CloseIcon, color: 'orange.500' }
			: user.status === 'BANNED'
			? { name: NotAllowedIcon, color: 'red.500' }
			: null

	async function changeStatus(status: UserStatus) {
		await changeUserStatus({
			id: user.id,
			status
		})
	}

	return (
		<ListItem
			listStyleType='none'
			my={2}
			p={3}
			display='flex'
			alignItems='flex-start'
			justifyContent='flex-start'
			borderRadius='10px'
			bgColor='gray.50'
			_hover={{ bgColor: 'gray.100' }}
			width='100%'
		>
			{icon && <ListIcon as={icon.name} color={icon.color} mt={1} mr={3} />}
			<Box flex='1'>
				<Heading size='md'>{user.name}</Heading>
				{user.email ? <Text size='sm'>{user.email}</Text> : null}
				{children}
			</Box>
			<Flex>
				{user.status === 'ACTIVE' ? (
					<>
						<IconButton
							aria-label='Delete user'
							icon={<CloseIcon />}
							size='sm'
							colorScheme='orange'
							onClick={() => changeStatus('DELETED' as UserStatus.Deleted)}
						/>
						<IconButton
							aria-label='Ban user'
							icon={<NotAllowedIcon />}
							size='sm'
							ml={1}
							colorScheme='red'
							onClick={() => changeStatus('BANNED' as UserStatus.Banned)}
						/>
					</>
				) : null}
				{user.status === 'DELETED' ? (
					<>
						<IconButton
							aria-label='UnDelete user'
							icon={<CheckIcon />}
							colorScheme='green'
							size='sm'
							onClick={() => changeStatus('ACTIVE' as UserStatus.Active)}
						/>
						<IconButton
							aria-label='Ban user'
							icon={<NotAllowedIcon />}
							size='sm'
							ml={1}
							colorScheme='red'
							onClick={() => changeStatus('BANNED' as UserStatus.Banned)}
						/>
					</>
				) : null}
				{user.status === 'BANNED' ? (
					<>
						<IconButton
							aria-label='Delete user'
							icon={<CloseIcon />}
							size='sm'
							colorScheme='orange'
							onClick={() => changeStatus('DELETED' as UserStatus.Deleted)}
						/>
						<IconButton
							aria-label='Unban user'
							icon={<CheckIcon />}
							size='sm'
							ml={1}
							colorScheme='green'
							onClick={() => changeStatus('ACTIVE' as UserStatus.Active)}
						/>
					</>
				) : null}
			</Flex>
		</ListItem>
	)
}
