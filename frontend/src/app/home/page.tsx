import HomeLanding from "@/component/HomeLanding"
import HomeWhy from "@/component/HomeWhy"
import HomeSearch from "@/component/HomeSearch"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"

export default function Home() {
    return (
        <div>
            <Navbar />
            <HomeLanding />
            <HomeSearch />
            <HomeWhy />
            <Footer />
        </div>
    )
}