"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Wrench, Shield, Calendar, Star, Clock, Users, Car } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation" // Import useRouter

export function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs">
              🚗 Your complete car care solution
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4">
              Keep your car
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                running perfectly
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Track maintenance, find trusted mechanics, schedule services, and never miss another oil change.
              Everything you need to keep your vehicle in peak condition.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Button onClick={() => router.push("/login")} size="lg" className="text-sm px-6 py-3">
                Start Managing Your Car
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium">{i}</span>
                    </div>
                  ))}
                </div>
                <span>Join 15,000+ car owners</span>
              </div>
            </div>

            {/* Car Image - Fixed dimensions */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-[1166px] aspect-[1166/356]">
                <img
                  src="/images/image.png?height=356&width=1166&text=Professional+Car+Maintenance"
                  alt="Professional car maintenance"
                  className="rounded-xl shadow-xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller Car Products */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Best Seller Car Products</h2>
            <p className="text-sm text-muted-foreground">Premium quality products for your vehicle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=120&width=120&text=Car+Wax"
                alt="Premium Car Wax"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-sm mb-1">Premium Car Wax</h3>
              <p className="text-xs text-muted-foreground mb-2">Long-lasting protection</p>
              <div className="text-sm font-bold text-primary">₹899</div>
            </Card>

            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=120&width=120&text=Interior+Cleaner"
                alt="Interior Cleaner"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-sm mb-1">Interior Cleaner</h3>
              <p className="text-xs text-muted-foreground mb-2">Deep clean surfaces</p>
              <div className="text-sm font-bold text-primary">₹649</div>
            </Card>

            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=120&width=120&text=Tire+Shine"
                alt="Tire Shine"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-sm mb-1">Tire Shine</h3>
              <p className="text-xs text-muted-foreground mb-2">Professional grade</p>
              <div className="text-sm font-bold text-primary">₹549</div>
            </Card>

            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=120&width=120&text=Glass+Cleaner"
                alt="Glass Cleaner"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-sm mb-1">Glass Cleaner</h3>
              <p className="text-xs text-muted-foreground mb-2">Streak-free finish</p>
              <div className="text-sm font-bold text-primary">₹399</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Main Blocks */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Products */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 mx-auto mb-4">
                <Wrench className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Products</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Premium car care products designed to keep your vehicle looking and performing at its best.
              </p>
              <Button variant="outline" className="w-full bg-transparent text-sm" asChild>
                <a href="/products-services">Shop Products</a>
              </Button>
            </Card>

            {/* Services */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 mx-auto mb-4">
                <Calendar className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Services</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Professional car care services delivered to your doorstep with convenience and reliability.
              </p>
              <Button variant="outline" className="w-full bg-transparent text-sm" asChild>
                <a href="/products-services">Book Service</a>
              </Button>
            </Card>

            {/* Community */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Join thousands of car enthusiasts sharing tips, experiences, and advice from experts.
              </p>
              <Button variant="outline" className="w-full bg-transparent text-sm" asChild>
                <a href="#">Join Community</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Why Choose CarCare</h2>
            <p className="text-sm text-muted-foreground">Professional car care with a personal touch</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 mx-auto mb-3">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-sm font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All our products and services come with a satisfaction guarantee.
              </p>
            </Card>

            <Card className="p-4 text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 mx-auto mb-3">
                <Clock className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-sm font-semibold mb-2">Convenient Service</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Book appointments at your convenience. We come to you.
              </p>
            </Card>

            <Card className="p-4 text-center hover:shadow-lg transition-shadow border-border/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 mx-auto mb-3">
                <Star className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-sm font-semibold mb-2">Expert Technicians</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our trained professionals use premium products for exceptional results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Team</h2>
            <p className="text-sm text-muted-foreground">Meet the experts behind CarCare</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128&text=CH"
                    alt="Courtney Henry"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Courtney Henry</h3>
              <p className="text-xs text-muted-foreground">Development Manager</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-purple-100 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128&text=JB"
                    alt="Jerome Bell"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Jerome Bell</h3>
              <p className="text-xs text-muted-foreground">Software Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-pink-100 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128&text=AM"
                    alt="Arlene McCoy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Arlene McCoy</h3>
              <p className="text-xs text-muted-foreground">Software Developer</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128&text=JW"
                    alt="Jenny Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Jenny Wilson</h3>
              <p className="text-xs text-muted-foreground">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to give your car the care it deserves?</h2>
          <p className="text-sm text-muted-foreground mb-6">Join thousands of satisfied customers who trust CarCare</p>

          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Car Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Modern+Car+Health+Check"
                    alt="Car Health Check"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Keep Your Car Healthy</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get comprehensive health monitoring and expert diagnostics for optimal performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">
                      We provide Indias most comprehensive health checks, covering 50+ critical components
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">You get 24/7 expert support and maintenance reminders</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">We help prevent 4 out of 5 major breakdowns with early detection</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={() => router.push("/car-health")}
                    size="lg"
                    className="text-sm px-6 py-3 bg-primary hover:bg-primary/90"
                  >
                    Check Car Health
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Marketplace</h2>
            <p className="text-sm text-muted-foreground">Buy and sell cars with confidence</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Buy a Car Card - Full Width */}
            <Card className="p-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Are You Looking For a Car ?</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    We are committed to providing our customers with exceptional service.
                  </p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => router.push("/car-marketplace")}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
