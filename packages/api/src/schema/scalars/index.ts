import { DateTimeResolver, EmailAddressResolver, JWTResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')

export const GQLEmail = asNexusMethod(EmailAddressResolver, 'email')

export const GQLJwt = asNexusMethod(JWTResolver, 'jwt')
