import HomeLanding from "@/component/HomeLanding"
import HomeWhy from "@/component/HomeWhy"
import HomeSearch from "@/component/HomeSearch"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import YouthUprising from "@/component/YouthUprising"

export default function Home() {
    return (
        <div>
            <Navbar />
            <HomeLanding />
            <HomeSearch />
            <YouthUprising />
            <HomeWhy />
            <Footer />
        </div>
    )
}