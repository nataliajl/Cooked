import React from 'react';

const ClickableComponent = ({children, className, onClick}) => {
    if (className){
        return (
            <a className={className} onClick={onClick} onMouseOver="" style={{cursor: "pointer"}}>
                {children}
            </a>
        );
    }
    return (
        <a  onClick={onClick} onMouseOver="" style={{cursor: "pointer"}}>
            {children}
        </a>
    );
}

export default ClickableComponent;