import Footer from "@components/footer/footerComp"
import Nav from "@components/navbar/navbarComp"
import SirunPatisseriComponents from "@components/sirun-patisseri/projectSirunPatisseriComp"
export default function SirunPatisseri(): JSX.Element {
    return (
        <div>
            <Nav />
            <SirunPatisseriComponents />
            <Footer />
        </div>
    )
}