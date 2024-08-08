import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { toast } from 'react-hot-toast';

import { SafeUser } from '../types';

import useLoginModal from "./userLoginModal";

interface IUserFavorite {
    listingId: string;
    currentUser?: SafeUser | null;
}

const useFavorite = ({
    listingId,
    currentUser
}: IUserFavorite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(listingId);
    }, [currentUser, listingId])

    const toggleFavorite = useCallback( async(e: React.MouseEvent<HTMLDivElement>) => {
        
        e.stopPropagation();

        if(!currentUser) {
            return loginModal.onOpen();
        }

        try {

            let request;

            if(hasFavorited) {
                request = () => axios.delete(`/api/favorities/${listingId}`);
                toast.success('Delete from Favorites');
            }else{
                request = () => axios.post(`/api/favorities/${listingId}`);
                toast.success('Add to Favorites');
            }

            await request();
            router.refresh();
            toast.success('Successfully Done');
            
            
        } catch (error) {
            toast.error("Something went wrong");
        }
    }, [currentUser, loginModal,listingId,hasFavorited,router]);

    return {
        hasFavorited,
        toggleFavorite
    }
}


export default useFavorite;