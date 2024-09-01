'use server';
import { auth } from '@/auth';
import prisma from '@/lib/db';



export async function registerCompany(companyName: string, description: string, companyPubKey: string, totalShare: number) {
    try {
        const session = await auth();
        if(!session) return false;
        const company = await prisma.company.create({
            data: {
                name: companyName,
                description: description,
                registeredBy: parseInt(session?.user?.id!),
                blockchainAddress: companyPubKey,
                totalShares: totalShare,
                nftCollectionId: 'null'
            }
        })
        if(company){
            return true;
        }
        return false
    } catch (error) {
        console.log('error', error)
        return false;   
    }
}