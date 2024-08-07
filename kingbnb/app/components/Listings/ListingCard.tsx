'use client';

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";

interface ListingCardProps {
    data: Listing;
    reservation?:Reservation;
    onAction?:(id: string) => void;
    disabled?: boolean;
    actionLabel?:string;
    actionId?:string;
    currentUser?: SafeUser | null;
}

const ListingCard = () => {
  return (
    <div>ListingCard</div>
  )
}

export default ListingCard