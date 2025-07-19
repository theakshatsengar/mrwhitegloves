"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <section className="bg-card py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-foreground mb-2">Join CarCare</h2>
            <p className="text-sm text-muted-foreground">Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <div className="flex items-center bg-muted rounded-full p-1 pr-2 w-full max-w-md">
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">About Us</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">Blog</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="/products-services">Services</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">FAQs</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">Terms</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">Contact Us</a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">Get in Touch</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">Help center</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">Live chat</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-xs" asChild>
                  <a href="#">How it works</a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="font-semibold mb-3">Our Brands</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Toyota</li>
              <li>Porsche</li>
              <li>Audi</li>
              <li>BMW</li>
              <li>Ford</li>
              <li>Nissan</li>
              <li>Peugeot</li>
              <li>Volkswagen</li>
            </ul>
          </div>

          {/* Vehicles Type */}
          <div>
            <h3 className="font-semibold mb-3">Vehicles Type</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Sedan</li>
              <li>Hatchback</li>
              <li>SUV</li>
              <li>Hybrid</li>
              <li>Electric</li>
              <li>Coupe</li>
              <li>Truck</li>
              <li>Convertible</li>
            </ul>
          </div>

          {/* Sale Hours */}
          <div>
            <h3 className="font-semibold mb-3">Sale Hours</h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Monday - Friday: 09:00AM - 09:00PM</p>
              <p>Saturday: 09:00AM - 07:00PM</p>
              <p>Sunday: Closed</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Connect With Us</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="#">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="#">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="#">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href="#">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-xs text-muted-foreground">
          <p>© 2024 CarCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
