import HealthyLifeComponentes from "@components/healthy-life/projectHealthyLifeComp"
import Footer from "@components/footer/footerComp"
import Nav from "@components/navbar/navbarComp"
export default function HealthyLife(): JSX.Element {
    return (
        <div>
            <Nav />
            <HealthyLifeComponentes />
            <Footer />
        </div>
    )
}