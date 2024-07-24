'use client';

import { IconType } from "react-icons";

interface FooterButtonProps {
    lable: string;
    icon: IconType;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}


const FooterButton: React.FC<FooterButtonProps> = ({
    lable,
    icon: Icon,
    onClick,
    disabled,
}) => {
    return (
        <div
        className="flex flex-col items-center justify-center cursor-pointer hover:underline"
        >
            <div>
                <Icon size={24} />
                
            </div>
            <span>{lable}</span>

        </div>
    )
}

export default FooterButton