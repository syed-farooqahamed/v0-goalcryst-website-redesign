"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Industries",
    href: "/industries",
    children: [
      { name: "Aviation", href: "/industries/aviation" },
      { name: "Banking & Collection", href: "/industries/banking-collection" },
      { name: "AI/ML Data Solutions", href: "/industries/ai-ml-data-solutions" },
      { name: "E-Commerce", href: "/industries/e-commerce" },
      { name: "Finance & Accounting", href: "/industries/finance-accounting" },
      { name: "Health Care", href: "/industries/health-care" },
      { name: "Insurance", href: "/industries/insurance" },
      { name: "Payroll", href: "/industries/payroll" },
      { name: "Telecom", href: "/industries/telecom" },
      { name: "US Title Insurance", href: "/industries/us-title-insurance" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Chat Support", href: "/solutions/chat-support" },
      { name: "Phone Support", href: "/solutions/phone-support" },
      { name: "Email Support", href: "/solutions/email-support" },
      { name: "Backend Office Support", href: "/solutions/backend-office-support" },
      { name: "Customer Support", href: "/solutions/customer-support" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Goalcryst"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-card border border-border shadow-xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors",
                              pathname === child.href
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Employee Login */}
            <Button
              asChild
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <a href="https://goalcrystindiaprivatelimited.greythr.com/uas/portal/auth/login?login_challenge=rx-EyE7tNEHx7cE2v_O-oN9I0LWUzS6JKdV8LyY7zc2UypSC4h0CUQj0YnmTq9bIQiOS7XTugWChYYFiH0lFtx_7Iwu8v0A-ScRVFr52sZmL38S0UBmw1jBHs2VofnNX92_LDcrUZPf_XMXR0LRNVIxGoMPrzOxSAf7u2xUA6vM1KYE064VK0xtpq_pgB82gixt7cuqv8OKUDLkl0dY2FvKwzcDShNCXh4dU5MR3oD0rIXS_jfz19ahq23nJ6eVa0KCJXWQRS3xoZOwIBO1BXpk3k6bKFqL1ITNAwAgTgf07bvCeKtj1g3BIi24PU7lgthbSJsbeRDUcAVH6AGlGaKAf6Ocq8qBu83svEkPGTDqmukHYqzoRF1upubA_82hBh_GfWGN0OCa9wXBoQtlUe346V6T3_Ipobhaxep_i48tyirZtp3JoXwe36kVZo3173CWD5tV0-8j76f1zwEErBDB8nlyOI514bgG5kik97phZtth8Nm7n0Cs7pNGxrbazlnPIOaNMpP94NppQxNyHadm-fXLNUor89kn1YhUeDRQ6d4CJaM-8-uJDWCyT2CKgNTy_Y6Ncq2IYer0F7lrEQndyiAcPznMAonzyJ7Oz9ByW_x3VNTVV1kahCBOjTsSUP6wtPLTHdkU9T17mfTy47wL5VLqtyoUIrhNYpU68MoozcT45H3zrU1odY2hvRK2yShbvc5X6TenQrM7xyxSdrVidMXALhWuRy2gNrV0urhkNAQ17fNKqOHITSvC4xSRadtrifKlYL4P_OGrZNlUQOLdl8lIrVlcYgporQxoEHVuEA9v4mmhNSSrIL93AfBGYHGBEjGv1DojohSw8dp6m8uxfW50838Vys-ZWIV1RpBR1NrGeP_ujlpebAMpzs2Tx4KBKNKXtSdO3-gsCc5tZrcKhuXEMJaniiz2VGGFvvH4lvsALBCG_RBDgvlZMIVz3jkOmoJKD9fSpCMbVy-oloSADF8lQMhTQJs646bp2JAvmyIGXNwekOPXbbGLBcX0PmrSQuNbvNVcSz37wvi0qigwxjhpc5J9OCoJnTKRhXqvmyC7c-TMYKmupCaAUn6ugtLd0uoQowm6qEUABmzfMGERFw-r6mfMyzkb4a6Lk9CKjesJhcOCp3aALkfwYs74DtxpNg0kKdcHfFucDxKQL0xFRQzNoyH-pt8TRjjW3c3LjZyzsMBmoaXeiXLhFZLn2yGQpRynZHeQzURgYQoHLNhaSmgfPUVwEEwDUpv9tHvbucArAQaUcR-BNT1Da_z4CizYNB336uqBZuPpu4JfGgEu-21GBVpFhiTJSCqiP4aRCiHl_vPjOnBugZB67EZQ-tfHIrQuNCJIPo_kD5T1EAQi2FmbwGU1VE-ioevYxdYjZFeGwM-JrOfG1omEDjHGEFh3rgfhEJW5ZCr2UYb_EEbFtCaCKG5uWtd4zCOS-COs%3D" target="_blank" rel="noopener noreferrer">Employee Login</a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2 text-base font-medium rounded-lg transition-colors",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block px-3 py-1.5 text-sm rounded-lg transition-colors",
                              pathname === child.href
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button
                  asChild
                  className="w-full mt-4 bg-primary text-primary-foreground"
                >
                  <a href="https://goalcrystindiaprivatelimited.greythr.com/uas/portal/auth/login?login_challenge=rx-EyE7tNEHx7cE2v_O-oN9I0LWUzS6JKdV8LyY7zc2UypSC4h0CUQj0YnmTq9bIQiOS7XTugWChYYFiH0lFtx_7Iwu8v0A-ScRVFr52sZmL38S0UBmw1jBHs2VofnNX92_LDcrUZPf_XMXR0LRNVIxGoMPrzOxSAf7u2xUA6vM1KYE064VK0xtpq_pgB82gixt7cuqv8OKUDLkl0dY2FvKwzcDShNCXh4dU5MR3oD0rIXS_jfz19ahq23nJ6eVa0KCJXWQRS3xoZOwIBO1BXpk3k6bKFqL1ITNAwAgTgf07bvCeKtj1g3BIi24PU7lgthbSJsbeRDUcAVH6AGlGaKAf6Ocq8qBu83svEkPGTDqmukHYqzoRF1upubA_82hBh_GfWGN0OCa9wXBoQtlUe346V6T3_Ipobhaxep_i48tyirZtp3JoXwe36kVZo3173CWD5tV0-8j76f1zwEErBDB8nlyOI514bgG5kik97phZtth8Nm7n0Cs7pNGxrbazlnPIOaNMpP94NppQxNyHadm-fXLNUor89kn1YhUeDRQ6d4CJaM-8-uJDWCyT2CKgNTy_Y6Ncq2IYer0F7lrEQndyiAcPznMAonzyJ7Oz9ByW_x3VNTVV1kahCBOjTsSUP6wtPLTHdkU9T17mfTy47wL5VLqtyoUIrhNYpU68MoozcT45H3zrU1odY2hvRK2yShbvc5X6TenQrM7xyxSdrVidMXALhWuRy2gNrV0urhkNAQ17fNKqOHITSvC4xSRadtrifKlYL4P_OGrZNlUQOLdl8lIrVlcYgporQxoEHVuEA9v4mmhNSSrIL93AfBGYHGBEjGv1DojohSw8dp6m8uxfW50838Vys-ZWIV1RpBR1NrGeP_ujlpebAMpzs2Tx4KBKNKXtSdO3-gsCc5tZrcKhuXEMJaniiz2VGGFvvH4lvsALBCG_RBDgvlZMIVz3jkOmoJKD9fSpCMbVy-oloSADF8lQMhTQJs646bp2JAvmyIGXNwekOPXbbGLBcX0PmrSQuNbvNVcSz37wvi0qigwxjhpc5J9OCoJnTKRhXqvmyC7c-TMYKmupCaAUn6ugtLd0uoQowm6qEUABmzfMGERFw-r6mfMyzkb4a6Lk9CKjesJhcOCp3aALkfwYs74DtxpNg0kKdcHfFucDxKQL0xFRQzNoyH-pt8TRjjW3c3LjZyzsMBmoaXeiXLhFZLn2yGQpRynZHeQzURgYQoHLNhaSmgfPUVwEEwDUpv9tHvbucArAQaUcR-BNT1Da_z4CizYNB336uqBZuPpu4JfGgEu-21GBVpFhiTJSCqiP4aRCiHl_vPjOnBugZB67EZQ-tfHIrQuNCJIPo_kD5T1EAQi2FmbwGU1VE-ioevYxdYjZFeGwM-JrOfG1omEDjHGEFh3rgfhEJW5ZCr2UYb_EEbFtCaCKG5uWtd4zCOS-COs%3D" target="_blank" rel="noopener noreferrer">Employee Login</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
