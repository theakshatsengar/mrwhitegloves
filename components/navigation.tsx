"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation" // Import useRouter and usePathname

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigate = (path: string) => {
    router.push(path)
    setMobileMenuOpen(false) // Close mobile menu on navigation
  }

  const getPageTitle = () => {
    switch (pathname) {
      case "/car-health":
        return "Car Health"
      case "/car-marketplace":
        return "Marketplace"
      case "/products-services":
        return "Products & Services"
      case "/login":
        return "Login"
      default:
        return ""
    }
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-3">
            <h1 className="text-lg font-semibold cursor-pointer" onClick={() => handleNavigate("/")}>
              CarCare
            </h1>
            {pathname !== "/" && (
              <span className="text-sm text-muted-foreground hidden sm:block">{getPageTitle()}</span>
            )}
          </div>

          {/* Desktop Navigation - Show on all pages */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={() => handleNavigate("/products-services")} className="text-sm">
              Products & Services
            </Button>
            <Button variant="ghost" onClick={() => handleNavigate("/car-health")} className="text-sm">
              Car Health
            </Button>
            <Button variant="ghost" onClick={() => handleNavigate("/car-marketplace")} className="text-sm">
              Marketplace
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            {pathname !== "/login" && ( // Hide login button if already on login page
              <Button onClick={() => handleNavigate("/login")} size="sm" className="text-sm hidden md:block">
                Login
              </Button>
            )}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Show on all pages */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="py-4 space-y-2">
              <Button
                variant="ghost"
                onClick={() => handleNavigate("/products-services")}
                className="w-full justify-start text-sm"
              >
                Products & Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigate("/car-health")}
                className="w-full justify-start text-sm"
              >
                Car Health
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigate("/car-marketplace")}
                className="w-full justify-start text-sm"
              >
                Marketplace
              </Button>
              {pathname !== "/login" && (
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate("/login")}
                  className="w-full justify-start text-sm"
                >
                  Login
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
