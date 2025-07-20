"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <section className="bg-card py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Join CarCare</h2>
            <p className="text-sm text-muted-foreground">Get 10% off on First Order! Subscribe Now!</p>
          </div>
          <div className="w-full md:w-auto flex justify-center border border-blue-200 dark:border-blue-800 rounded-full">
            <div className="flex items-center bg-muted rounded-full p-1 pr-1 w-full max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-sm px-4"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="/">Home</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="/products-services">Products & Services</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="/car-health">Car Health</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="/car-marketplace">Car Marketplace</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="#">Community</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="#">Franchise</a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Reach Out! */}
          <div>
            <h3 className="font-semibold mb-3">Reach Out!</h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>81/2-3, Asha Krishna Kunj, Jamshedpur, Jharkhand, India, 831013</p>
              <p>Monday-Saturday (9AM-6PM)</p>
              <p>Tel: +91 92790 11375</p>
              <p>Email: info@mrwhitegloves.com</p>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-semibold mb-3">Policy</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="#">Privacy Policy</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="#">Terms & Conditions</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="#">Shipping Policy</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground" asChild>
                  <a href="#">Return & Refunds</a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <div className="space-y-2 text-xs text-muted-foreground mb-4">
              <p>Tel: +91 92790 11375</p>
              <p>Email: info@mrwhitegloves.com</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="https://www.instagram.com/mrwhitegloves/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="https://www.facebook.com/whiteglovesjsr/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="https://www.youtube.com/channel/UCLHvQliwtboqVI4w3MygCQA" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="https://www.linkedin.com/company/mr-white-gloves" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-xs text-muted-foreground">
          <p>© 2023 by Mr. White Gloves. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
