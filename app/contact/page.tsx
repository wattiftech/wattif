"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    interest: "demo",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll be in touch soon!")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      interest: "demo",
      message: "",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader title="Contact Us" description="Get in touch with our team" />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleSelectChange("industry", value)}>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial-real-estate">Commercial Real Estate</SelectItem>
                      <SelectItem value="data-centers">Data Centers</SelectItem>
                      <SelectItem value="construction-sites">Construction Sites</SelectItem>
                      <SelectItem value="industrial-plants">Industrial Plants</SelectItem>
                      <SelectItem value="logistics-facilities">Logistics Facilities</SelectItem>
                      <SelectItem value="r-and-d-facilities">R&D Facilities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>I'm interested in:</Label>
                  <RadioGroup
                    value={formData.interest}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="demo" id="demo" />
                      <Label htmlFor="demo" className="font-normal">
                        Requesting a demo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consultation" id="consultation" />
                      <Label htmlFor="consultation" className="font-normal">
                        Scheduling a consultation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pricing" id="pricing" />
                      <Label htmlFor="pricing" className="font-normal">
                        Pricing information
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other-interest" />
                      <Label htmlFor="other-interest" className="font-normal">
                        Other inquiry
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your energy monitoring needs..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="bg-coral-500 hover:bg-coral-600">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <MapPin className="mt-1 h-5 w-5 text-coral-500" />
                    <div>
                      <h3 className="font-medium">Headquarters</h3>
                      <address className="not-italic text-slate-600">
                        Wattif Technologies Pte. Ltd.
                        <br />
                        68 CIRCULAR ROAD
                        <br />
                        #02-01
                        <br />
                        SINGAPORE (049422)
                      </address>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Mail className="mt-1 h-5 w-5 text-coral-500" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-slate-600">
                        <a href="mailto:info@wattif.io" className="hover:text-coral-600">
                          info@wattif.io
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-lg bg-slate-50 p-6">
                  <h3 className="mb-2 font-medium">Office Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  <p className="text-slate-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="mb-2 text-lg font-medium text-slate-900">How long does installation take?</h3>
                <p className="text-slate-600">
                  For most facilities, our non-invasive installation can be completed in less than a day, with no
                  disruption to your operations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-slate-900">Do I need to modify my electrical panels?</h3>
                <p className="text-slate-600">
                  No. Our sensors are designed to be installed without any modifications to your existing electrical
                  infrastructure.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-slate-900">How quickly will I see results?</h3>
                <p className="text-slate-600">
                  Most clients identify their first energy-saving opportunities within the first week of monitoring,
                  with more comprehensive insights developing over the first month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
