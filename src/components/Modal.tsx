import React, { useState } from "react";


export function Modal({
    open,
    children
} : {
    open: boolean,
    children: React.ReactNode
}) {

    if(!open) return <></>;

    return (
        <div className="w-screen h-screen z-[100] fixed">
            {children}
        </div>
    );
}

export function ManagedModal({ children }: {children: React.ReactNode}) {
    const [ open, setOpen ] = useState(false);

    return (
        <Modal open={open}>
            {children}
        </Modal>
    );
}
