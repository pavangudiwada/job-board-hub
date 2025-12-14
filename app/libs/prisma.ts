import { PrismaClient } from '../generated/prisma/client';

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

// Test function to verify database connection
export async function testDatabaseConnection() {
    try {
        console.log('🔌 Testing database connection...');

        // Test the connection
        await prisma.$connect();
        console.log('✅ Database connected successfully!');

        // Fetch some data
        const categories = await prisma.category.findMany({
            take: 10,
        });
        console.log(`📊 Found ${categories.length} categories:`, categories);

        return { success: true, count: categories.length, data: categories };
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        return { success: false, error };
    }
}