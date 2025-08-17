import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoPath from "@assets/logo_1755410486904.jpg";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About RJC", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Departments", path: "/departments" },
  { name: "Results", path: "/results" },
  { name: "Achievements", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
  { name: "Login", path: "/login" }
];

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img 
              src={logoPath} 
              alt="Ramanujan Junior College Logo" 
              className="h-10 w-10 rounded-full object-cover"
              data-testid="img-logo"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
                Ramanujan Junior College
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Education, Development and Progress
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={cn(
                    "text-sm",
                    isActive(item.path) 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <img 
                      src={logoPath} 
                      alt="RJC Logo" 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-bold text-gray-900 dark:text-white">
                      RJC
                    </span>
                  </div>
                  {navigationItems.map((item) => (
                    <Link key={item.name} href={item.path}>
                      <Button
                        variant={isActive(item.path) ? "default" : "ghost"}
                        className={cn(
                          "w-full justify-start",
                          isActive(item.path) 
                            ? "bg-blue-600 text-white" 
                            : "text-gray-700 dark:text-gray-300"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}