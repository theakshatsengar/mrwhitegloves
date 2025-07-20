"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  BatteryCharging,
  Lightbulb,
  ShieldCheck,
  CarFront,
  Sparkles,
  Gauge,
  FuelIcon as Oil,
  AirVent,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

export default function ProductsServicesPage() {
  const productsRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const products = [
    {
      id: 1,
      name: "Car Shampoo",
      description: "Gentle, effective cleaning",
      price: "₹249",
      image: "/images/products/car_shampoo.png",
    },
    {
      id: 2,
      name: "Dashboard Polish",
      description: "Shine & protect your dashboard",
      price: "₹399",
      image: "/images/products/dashboard_polish.png",
    },
    {
      id: 3,
      name: "Glass Cleaner",
      description: "Crystal clear finish",
      price: "₹249",
      image: "/images/products/glass_cleaner.png",
    },
    {
      id: 4,
      name: "Tire Shiner",
      description: "Glossy, new-look tires",
      price: "₹299",
      image: "/images/products/tire_shiner.png",
    },
    {
      id: 5,
      name: "Quick Detailer",
      description: "Fast shine between washes",
      price: "₹349",
      image: "/images/products/quick_detailer.png",
    },
    {
      id: 6,
      name: "Car Care Kit",
      description: "Complete care package",
      price: "₹1499",
      image: "/images/products/car_care_kit.png",
    },
    {
      id: 7,
      name: "Car Pump",
      description: "Portable tire inflator",
      price: "₹1999",
      image: "/images/products/car_pump.png",
    },
    {
      id: 8,
      name: "Car Charger",
      description: "Fast charging solution",
      price: "₹599",
      image: "/images/products/car_charger.png",
    },
  ]

  const services = [
    {
      id: 1,
      name: "CAR WASH",
      description: "Professional exterior cleaning",
      icon: Sparkles,
    },
    {
      id: 2,
      name: "CAR DETAILING",
      description: "Complete interior & exterior detailing",
      icon: Oil,
    },
    {
      id: 3,
      name: "DOORSTEP MECHANIC",
      description: "Expert mechanics at your location",
      icon: Gauge,
    },
    {
      id: 4,
      name: "ALL-ROUND AC SERVICES",
      description: "Complete AC maintenance & repair",
      icon: CarFront,
    },
    {
      id: 5,
      name: "ROADSIDE ASSISTANCE",
      description: "24/7 emergency support",
      icon: BatteryCharging,
    },
    {
      id: 6,
      name: "INSURANCE SERVICES",
      description: "Comprehensive insurance solutions",
      icon: AirVent,
    },
    {
      id: 7,
      name: "DENTING & PAINTING",
      description: "Professional body repair services",
      icon: ShieldCheck,
    },
    {
      id: 8,
      name: "MONTHLY SUBSCRIPTION",
      description: "Regular maintenance packages",
      icon: Lightbulb,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section for Products & Services */}
        <section className="relative overflow-hidden py-12 sm:py-20 mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-muted/20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs">
                🛠️ Premium Products & Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Explore Our Products & Services
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything your car needs, from premium care products to expert maintenance services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <Button onClick={scrollToProducts} className="w-full sm:w-auto">
                  View Products
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </Button>
                <Button onClick={scrollToServices} variant="outline" className="w-full sm:w-auto">
                  View Services
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section ref={productsRef} className="py-12 bg-muted/30 rounded-xl mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Premium Products</h2>
            <p className="text-sm text-muted-foreground">High-quality solutions for every car care need.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="p-4 text-center hover:shadow-lg transition-shadow flex flex-col h-full">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg mb-3"
                />
                <div className="flex flex-col flex-grow justify-end">
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
                  <div className="text-sm font-bold text-primary mb-3">{product.price}</div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full text-xs hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="#">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Professional Services</h2>
              <p className="text-sm text-muted-foreground">Expert care to keep your vehicle in top condition.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="p-6 text-center hover:shadow-lg transition-shadow flex flex-col h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col flex-grow justify-end">
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <Button variant="outline" className="w-full bg-transparent text-sm" asChild>
                      <a href="#">Book Now</a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <a href="#">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
