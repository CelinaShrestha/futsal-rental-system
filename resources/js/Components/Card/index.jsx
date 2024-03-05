import React from "react";
import Icon from "@/Components/Icon";

const Card = ({ heading,icon, children,...props }) => {
    return (
        <div className="card" {...props}>
            {icon && <Icon className="icon" icon={icon} />}
            <h1 className="text-accent-color text-lg ">{heading}</h1>
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;
