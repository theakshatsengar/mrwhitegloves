"use client"

import type React from "react"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Car, DollarSign, Package, ArrowDown } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CarHealthPage() {
  const formRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Car health form submitted!")
    alert("Your car details have been submitted! Our experts will reach out to you soon.")
  }

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section for Car Health */}
        <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center text-center mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/placeholder.svg?height=500&width=1200&text=Car+Health+Check+Background"
            alt="Car health check background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
          <div className="relative z-10 text-white p-4">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs">
              🩺 Comprehensive Car Health
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Unlock Your Cars Full Potential
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Get a comprehensive health check and discover its true resale value.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Check Health
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Why Get a Car Health Check?</h2>
            <p className="text-sm text-muted-foreground">Discover the advantages of knowing your car inside out.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Know Your Car Condition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Understand the exact health of your vehicle with detailed diagnostics.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Know Resale Value</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get an accurate estimate of your cars market value for future sales.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Packages</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receive tailored recommendations to enhance your cars value and longevity.
              </p>
            </Card>
          </div>
        </section>

        {/* What Do We Need Section (Form) */}
        <section ref={formRef} className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">What Do We Need?</h2>
            <p className="text-sm text-muted-foreground">
              Please provide the following details for a comprehensive analysis.
            </p>
          </div>
          <Card className="max-w-3xl mx-auto p-6">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Car Health & Resale Value Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" type="text" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                  <Input id="whatsappNumber" type="tel" placeholder="e.g., +91 9876543210" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carModel">Car Model Name</Label>
                  <Input id="carModel" type="text" placeholder="e.g., Honda Civic" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purchaseYear">Purchase Year</Label>
                  <Input id="purchaseYear" type="number" placeholder="e.g., 2020" required />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <Label htmlFor="city">Enter Your City</Label>
                  <Input id="city" type="text" placeholder="e.g., Mumbai" required />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <Label htmlFor="insuranceValidity">Insurance Validity and Claims (if any)</Label>
                  <Textarea
                    id="insuranceValidity"
                    placeholder="e.g., Valid until 2025, 1 minor claim in 2023"
                    rows={3}
                  />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <Label htmlFor="gearShifting">Gear Shifting Experience</Label>
                  <Textarea id="gearShifting" placeholder="e.g., Smooth, occasional jerk in 2nd gear, etc." rows={3} />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <Label htmlFor="scratchesDents">Any Visual Scratches or Dents</Label>
                  <Textarea
                    id="scratchesDents"
                    placeholder="e.g., Small dent on rear bumper, minor scratch on driver's door"
                    rows={3}
                  />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <Label htmlFor="partChanges">Any Part Changes (major or minor)</Label>
                  <Textarea
                    id="partChanges"
                    placeholder="e.g., Replaced front brake pads last year, new battery 6 months ago"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2 col-span-1 md:col-span-2 mt-4">
                  <Input id="agreement" type="checkbox" className="h-4 w-4" required />
                  <Label htmlFor="agreement" className="text-sm font-normal cursor-pointer">
                    I agree to receive calls and messages for the above mentioned service.
                  </Label>
                </div>

                <div className="col-span-1 md:col-span-2 mt-6">
                  <Button type="submit" className="w-full">
                    Submit Car Details
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Procedure Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Simple Procedure</h2>
            <p className="text-sm text-muted-foreground">Heres what happens after you submit your details.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Collection & Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We will collect your car details and our experts will analyze your car health and resale value.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp Consultation</h3>
              <p className="text-sm text-muted-foreground">
                We will reach out to you on WhatsApp along with your data and explain your potential problems.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Package Recommendation</h3>
              <p className="text-sm text-muted-foreground">
                Our team will recommend a customized Mr. Whites Love Car Care package to increase your cars resale
                value.
              </p>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
