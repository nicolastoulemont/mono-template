import { PrismaClient } from '@prisma/client'
import { __prod__ } from 'src/constants'

const prisma = __prod__ ? new PrismaClient() : new PrismaClient({ log: ['query'] })

export default prisma
