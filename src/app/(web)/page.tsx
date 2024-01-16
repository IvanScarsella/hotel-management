import Gallery from "@/components/Gallery/Gallery"
import HeroSection from "@/components/HeroSection/page"
import NewsLetter from "@/components/NewsLetter/Newsletter"
import PageSearch from "@/components/PageSearch/PageSearch"

const Home = () => {
  return <>
    <HeroSection />
    <PageSearch />
    {/* FEATURED ROOM */}
    <Gallery />
    <NewsLetter />
  </>
}

export default Home
