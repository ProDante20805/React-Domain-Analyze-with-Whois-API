import { useEffect } from "react";

function Alert(props) {

    useEffect(() => {
        setTimeout(() => {
            props.setOpenAlert(false);
        }, 3000);    
    }, []);

    return (
        <div role="alert" className={`alert absolute -top-16 right-4 w-96 ${props.alertMessage.type === 3 ? "alert-warning" : "alert-error"} `}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{props.alertMessage.txt}</span>
        </div>
    )
}

export default Alert;