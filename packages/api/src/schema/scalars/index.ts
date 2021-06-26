import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')

export const GQLEmail = asNexusMethod(EmailAddressResolver, 'email')
