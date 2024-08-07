
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }

    const body = await request.json();

    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price,
    } = body;

    const listing = await prisma.listing.create({
        data:{
            title,
            description,
            imageSrc: imageSrc ? imageSrc : "https://asset.cloudinary.com/diokbohaz/ac092faea1985fe6adb6bf6dd9f3e85f",
            category,
            roomCount,
            bathroomCount,
            guestCount,
            locationValue:location.value,
            price: parseInt(price,10),
            userId: currentUser.id
        }
    });

    return NextResponse.json(listing);
}