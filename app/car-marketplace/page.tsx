"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ArrowRight,
  Car,
  CarFront,
  Truck,
  BatteryCharging,
  CarTaxiFront,
  TruckIcon as VanIcon,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CarMarketplacePage() {
  const carTypes = [
    { name: "SUV", icon: CarFront },
    { name: "Sedan", icon: Car },
    { name: "Hatchback", icon: CarTaxiFront }, // Using CarTaxiFront for hatchback-like appearance
    { name: "Coupe", icon: CarFront }, // Reusing CarFront, could be more specific if needed
    { name: "Hybrid", icon: BatteryCharging },
    { name: "Convertible", icon: CarFront }, // Reusing CarFront
    { name: "Van", icon: VanIcon }, // Using CaravanIcon as VanIcon
    { name: "Truck", icon: Truck },
    { name: "Electric", icon: BatteryCharging }, // Reusing BatteryCharging
  ]

  const premiumBrands = [
    { name: "Audi", logo: "/placeholder.svg?height=64&width=64&text=Audi+Logo" },
    { name: "BMW", logo: "/placeholder.svg?height=64&width=64&text=BMW+Logo" },
    { name: "Ford", logo: "/placeholder.svg?height=64&width=64&text=Ford+Logo" },
    { name: "Mercedes Benz", logo: "/placeholder.svg?height=64&width=64&text=Mercedes+Logo" },
    { name: "Peugeot", logo: "/placeholder.svg?height=64&width=64&text=Peugeot+Logo" },
    { name: "Volkswagen", logo: "/placeholder.svg?height=64&width=64&text=VW+Logo" },
  ]

  const featuredCars = [
    {
      id: 1,
      name: "BMW X5 2022",
      image: "/placeholder.svg?height=200&width=300&text=BMW+X5",
      details: "25,000 km • Petrol • Automatic",
      price: "₹45,00,000",
      badge: { text: "Featured", color: "bg-green-500" },
    },
    {
      id: 2,
      name: "Audi A4 2021",
      image: "/placeholder.svg?height=200&width=300&text=Audi+A4",
      details: "18,500 km • Petrol • Automatic",
      price: "₹32,50,000",
      badge: { text: "Certified", color: "bg-blue-500" },
    },
    {
      id: 3,
      name: "Mercedes C-Class 2023",
      image: "/placeholder.svg?height=200&width=300&text=Mercedes+C-Class",
      details: "12,000 km • Petrol • Automatic",
      price: "₹52,00,000",
      badge: { text: "Premium", color: "bg-purple-500" },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-muted/20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs">
              🚗 Car Marketplace
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Buy & Sell Cars with Confidence
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Find your perfect car or sell your current one with our secure and trusted marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3" asChild>
                <a href="#">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Cars
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent" asChild>
                <a href="#">
                  <Car className="h-4 w-4 mr-2" />
                  Sell Your Car
                </a>
              </Button>
            </div>
            {/* Image below buttons */}
            {/* <div className="mt-12 flex justify-center">
              <img
                src="/placeholder.svg?height=356&width=1566&text=Marketplace+Hero+Image"
                alt="Marketplace Hero"
                className="w-full max-w-[1566px] h-[356px] object-cover rounded-xl shadow-lg"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Browse by Type Section */}
      <section className="py-12 bg-muted/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Browse by Type</h2>
          <p className="text-sm text-muted-foreground">Find the perfect vehicle for your needs</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-items-center">
          {carTypes.map((type) => (
            <Card
              key={type.name}
              className="p-4 flex flex-col items-center justify-center text-center w-full max-w-[120px] h-[120px] hover:shadow-lg transition-shadow cursor-pointer bg-background border-border"
            >
              <type.icon className="h-8 w-8 mb-2 text-primary" />
              <span className="text-sm font-medium">{type.name}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Most Searched Car Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Most Searched Cars</h2>
            <p className="text-sm text-muted-foreground">Popular choices among our users</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-48 object-cover" />
                  <Badge className={`absolute top-2 left-2 ${car.badge.color} text-white`}>{car.badge.text}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{car.details}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{car.price}</span>
                    <Button size="sm" variant="outline" asChild>
                      <a href="#">View Details</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="#">
                View All Most Searched Cars
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Our Premium Brands Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Explore Our Premium Brands</h2>
            <Button variant="link" className="text-primary flex items-center space-x-1 p-0 h-auto" asChild>
              <a href="#">
                <span>Show All Brands</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
            {premiumBrands.map((brand) => (
              <Card
                key={brand.name}
                className="p-4 flex flex-col items-center justify-center text-center w-full max-w-[160px] h-[160px] hover:shadow-lg transition-shadow cursor-pointer bg-background border-border"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} Logo`}
                  className="h-16 w-16 object-contain mb-2"
                />
                <span className="text-sm font-medium">{brand.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Cars Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Latest Cars</h2>
            <p className="text-sm text-muted-foreground">Newly added vehicles to our inventory</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-48 object-cover" />
                  <Badge className={`absolute top-2 left-2 ${car.badge.color} text-white`}>{car.badge.text}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{car.details}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{car.price}</span>
                    <Button size="sm" variant="outline" asChild>
                      <a href="#">View Details</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="#">
                View All Latest Cars
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
