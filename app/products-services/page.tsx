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

export default function ProductsServicesPage() {
  const products = [
    {
      id: 1,
      name: "Premium Car Wax",
      description: "Long-lasting protection & shine",
      price: "₹899",
      image: "/placeholder.svg?height=120&width=120&text=Car+Wax",
    },
    {
      id: 2,
      name: "Interior Cleaner",
      description: "Deep clean all surfaces",
      price: "₹649",
      image: "/placeholder.svg?height=120&width=120&text=Interior+Cleaner",
    },
    {
      id: 3,
      name: "Tire Shine Gel",
      description: "Professional grade black finish",
      price: "₹549",
      image: "/placeholder.svg?height=120&width=120&text=Tire+Shine",
    },
    {
      id: 4,
      name: "Streak-Free Glass Cleaner",
      description: "Crystal clear windows",
      price: "₹399",
      image: "/placeholder.svg?height=120&width=120&text=Glass+Cleaner",
    },
    {
      id: 5,
      name: "Engine Degreaser",
      description: "Removes tough grease & grime",
      price: "₹750",
      image: "/placeholder.svg?height=120&width=120&text=Engine+Degreaser",
    },
    {
      id: 6,
      name: "Leather Conditioner",
      description: "Nourishes & protects leather",
      price: "₹950",
      image: "/placeholder.svg?height=120&width=120&text=Leather+Conditioner",
    },
    {
      id: 7,
      name: "Wheel & Rim Cleaner",
      description: "Removes brake dust & dirt",
      price: "₹600",
      image: "/placeholder.svg?height=120&width=120&text=Wheel+Cleaner",
    },
    {
      id: 8,
      name: "Car Air Freshener",
      description: "Long-lasting fresh scent",
      price: "₹250",
      image: "/placeholder.svg?height=120&width=120&text=Air+Freshener",
    },
  ]

  const services = [
    {
      id: 1,
      name: "Full Car Detailing",
      description: "Complete interior & exterior cleaning",
      icon: Sparkles,
    },
    {
      id: 2,
      name: "Oil Change Service",
      description: "Engine oil & filter replacement",
      icon: Oil,
    },
    {
      id: 3,
      name: "Brake Inspection & Repair",
      description: "Check, repair, or replace brake components",
      icon: Gauge,
    },
    {
      id: 4,
      name: "Tire Rotation & Balancing",
      description: "Extend tire life & improve handling",
      icon: CarFront,
    },
    {
      id: 5,
      name: "Battery Check & Replacement",
      description: "Test battery health & replace if needed",
      icon: BatteryCharging,
    },
    {
      id: 6,
      name: "AC Service & Recharge",
      description: "Ensure optimal cooling performance",
      icon: AirVent,
    },
    {
      id: 7,
      name: "Paint Protection Film (PPF)",
      description: "Invisible shield against scratches",
      icon: ShieldCheck,
    },
    {
      id: 8,
      name: "Headlight Restoration",
      description: "Restore clarity to foggy headlights",
      icon: Lightbulb,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section for Products & Services */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Explore Our Products & Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything your car needs, from premium care products to expert maintenance services.
          </p>
        </section>

        {/* Products Section */}
        <section className="py-12 bg-muted/30 rounded-xl mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Premium Products</h2>
              <p className="text-sm text-muted-foreground">High-quality solutions for every car care need.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
                  <div className="text-sm font-bold text-primary">{product.price}</div>
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Professional Services</h2>
              <p className="text-sm text-muted-foreground">Expert care to keep your vehicle in top condition.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="w-full bg-transparent text-sm" asChild>
                    <a href="#">Learn More</a>
                  </Button>
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
