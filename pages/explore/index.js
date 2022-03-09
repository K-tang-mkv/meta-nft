import Header from "../../components/Header"

const style = {
    wrapper: `flex items-center justify-center h-screen w-screen`,
    heading: `h-1/2 text-[#FFFFFF] font-sans text-5xl`
}
export default function Exporle() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.heading}>
                    Exporle Collections
                </div>
                <div >
                    <ul className="flex">
                        <li>Trending</li>
                        <li>Top</li>
                        <li>Art</li>
                    </ul>
                </div>

            </div>
        </div>
        
    )
}