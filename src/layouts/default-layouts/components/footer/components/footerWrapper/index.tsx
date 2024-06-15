import {
    FooterLogo,
    FooterMenu,
} from "layouts/default-layouts"

export function FooterWrapper() {
    return (
        <div className="p-3 bg-green-500 relative bottom-0 w-full">
            <div>
                 <FooterLogo />
            </div>
            <div>
                <FooterMenu />
            </div>
        </div>
    )
}