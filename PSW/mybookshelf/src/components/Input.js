import React from "react";

export default (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="obs">{props.obs}</div>
            <input 
                type={props.type} 
                name={props.id} 
                id={props.id} 
                placeholder={props.placeholder}
                pattern={props.pattern}
                title={props.title} 
                required={props.required}/>
        </div>
    );
}