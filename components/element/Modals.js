const ModalPage = ({ isOpen , children}) => {
    return(
        <div className={`
            fixed
            z-50
            top-0
            left-0
            w-[100vw]
            h-[100vh]
            bg-[#5f54544d]
            ${isOpen ? "flex" : "hidden"}
            items-center
            justify-center
        `}
        >
            {children}
        </div>
    )
}

export default ModalPage; 

