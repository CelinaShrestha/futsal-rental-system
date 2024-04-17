import React from "react";
import Icon from "@/Components/Icon";

const Card = ({ heading, icon, children, ...props }) => {
    return (
        <div className="card" {...props}>
            {/* {icon && <Icon className="icon" icon={icon} />} */}
            <img src={icon} alt="icons" />
            <h1 className="text-text text-[22px] font-semibold ">
                {heading}
            </h1>
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;
