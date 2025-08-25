"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Your actual EmailJS credentials
      const result = await emailjs.send(
        'service_ifuqm19',     // Your service ID
        'template_j84t6os',    // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Jake Shafer',
        },
        'dEJFtGyFIOgkj8ynZ'    // Your public key
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
      
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email</h3>
                      <a 
                        href="mailto:j.shafer072017@gmail.com"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        j.shafer072017@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Phone</h3>
                      <a 
                        href="tel:+16158675309"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        (615) 867-5309
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Location</h3>
                      <p className="text-muted-foreground">Dickson, TN</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="bg-input border-border focus:border-primary focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="bg-input border-border focus:border-primary focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-input border-border focus:border-primary focus:ring-primary resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium disabled:opacity-50"
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}