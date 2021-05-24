import 'dotenv/config'
import { serve } from './index'
import prisma from './lib/prisma'

serve().finally(async () => await prisma.$disconnect())
