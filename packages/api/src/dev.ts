import 'dotenv/config'
import 'module-alias/register'
import 'tsconfig-paths/register'
import { serve } from './index'
import { prisma } from '@lib/prisma'

serve().finally(async () => await prisma.$disconnect())
