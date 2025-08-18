const DashboardStyle = ({ title }) => {
    return(
        <div className="
        md:w-[911px]
        h-max
        p-5
        flex
        items-center
        ">
            <p className="
            font-bold
            md:text-2xl
            text-xl
            text-white
            pr-5
            ">
                { title }
            </p>

        </div>
    )
}
export default DashboardStyle;