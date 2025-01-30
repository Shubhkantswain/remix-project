import DesktopNavigation from './DesktopNavigation'
import DesktopSearch from './DesktopSearch'
import MobileNavigation from './MobileNavigation'
import DesktopAccount from './DesktopAccount'

function Header() {
    return (
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-lg border-b border-gray-600">
            <div className="flex items-center justify-between px-4 lg:px-6 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-xl font-bold mr-11">FlowTune</span>

                    {/* Desktop Navigation */}
                    <DesktopNavigation />
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center">
                    {/* Desktop Search */}
                    <DesktopSearch />

                    {/* Mobile Icons */}
                    <MobileNavigation />

                    {/* Desktop Account */}
                    <DesktopAccount/>
                </div>
            </div>
        </header>
    )
}

export default Header