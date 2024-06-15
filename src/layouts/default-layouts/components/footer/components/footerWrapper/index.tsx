import {
    FooterLogo,
    FooterMenu,
} from "layouts/default-layouts"

export function FooterWrapper() {
    return (
        <div className="py-10 bg-green-500 relative bottom-0 w-full ">
            <FooterLogo />
            <FooterMenu />
        </div>
    )
}
