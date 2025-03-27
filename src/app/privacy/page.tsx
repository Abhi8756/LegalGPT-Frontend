"use client"

import React from 'react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Alert,
  AlertTitle,
  AlertDescription
} from "@/components/ui/alert"
import { ChevronRight, Info, ArrowUpRight, Lock, Shield, Clock } from "lucide-react"

// Metadata is now exported from metadata.ts

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-5xl mx-auto py-12 px-4 md:px-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/privacy">Privacy Policy</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Table of Contents - Sticky Sidebar */}
        <div className="lg:w-1/4">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-lg">Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#introduction" className="text-muted-foreground hover:text-primary flex items-center">
                    Introduction <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#collection" className="text-muted-foreground hover:text-primary flex items-center">
                    Information We Collect <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#usage" className="text-muted-foreground hover:text-primary flex items-center">
                    How We Use Your Information <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="text-muted-foreground hover:text-primary flex items-center">
                    Data Security <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#sharing" className="text-muted-foreground hover:text-primary flex items-center">
                    Sharing Your Information <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#rights" className="text-muted-foreground hover:text-primary flex items-center">
                    Your Rights <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-muted-foreground hover:text-primary flex items-center">
                    Cookies and Tracking <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#children" className="text-muted-foreground hover:text-primary flex items-center">
                    Children's Privacy <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#changes" className="text-muted-foreground hover:text-primary flex items-center">
                    Changes to Policy <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary flex items-center">
                    Contact Us <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <Card>
            <CardHeader className="space-y-1 pb-8">
              <Badge variant="outline" className="w-fit mb-2">Last updated: March 27, 2025</Badge>
              <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
              <CardDescription className="text-lg">
                How we protect and manage your data at LegalGPT
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Introduction */}
              <section id="introduction">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Introduction</h2>
                </div>
                <p className="text-muted-foreground">
                  At LegalGPT, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you use our AI-powered legal contract services. Please read this 
                  privacy policy carefully. By accessing or using our service, you acknowledge that you have read and 
                  understood this policy.
                </p>
              </section>
              
              <Separator />

              {/* Information We Collect */}
              <section id="collection">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Information We Collect</h2>
                </div>
                
                <Tabs defaultValue="personal" className="mt-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="contract">Contract Data</TabsTrigger>
                    <TabsTrigger value="usage">Usage Data</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="p-4 border rounded-md mt-2">
                    <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                    <p className="text-muted-foreground">
                      We may collect personal information that you voluntarily provide when using our service, including 
                      but not limited to your name, email address, company information, and payment details.
                    </p>
                  </TabsContent>
                  <TabsContent value="contract" className="p-4 border rounded-md mt-2">
                    <h3 className="text-lg font-medium mb-2">Contract Data</h3>
                    <p className="text-muted-foreground">
                      Our service processes legal contracts and documents that you upload or create. This may include 
                      sensitive business information, legal terms, and other content contained in your documents.
                    </p>
                  </TabsContent>
                  <TabsContent value="usage" className="p-4 border rounded-md mt-2">
                    <h3 className="text-lg font-medium mb-2">Usage Data</h3>
                    <p className="text-muted-foreground">
                      We collect information on how you interact with our service, including access times, pages viewed, 
                      features used, and other diagnostic data that helps us improve our platform.
                    </p>
                  </TabsContent>
                </Tabs>
              </section>
              
              <Separator />

              {/* How We Use Your Information */}
              <section id="usage">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                </div>
                
                <Alert className="mb-4 bg-primary/5">
                  <AlertTitle className="text-primary">Your data powers our service</AlertTitle>
                  <AlertDescription>
                    We use your information responsibly to provide and improve our services.
                  </AlertDescription>
                </Alert>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Service Provision</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">We use your information to:</p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Provide and maintain our Service</li>
                        <li>Process and analyze your legal documents</li>
                        <li>Detect, prevent, and address technical issues</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Service Improvement</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">Your data helps us improve:</p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Our AI models and service offerings</li>
                        <li>User experience and interface design</li>
                        <li>Overall system performance and reliability</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Communications</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">We may contact you regarding:</p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Service updates and new features</li>
                        <li>Responses to your inquiries and support requests</li>
                        <li>Security and privacy notifications</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Legal Compliance</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        We may use your information to comply with applicable laws, regulations, and legal processes, 
                        including responding to lawful requests from public authorities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
              
              <Separator />

              {/* Remaining sections would follow the same pattern */}
              <section id="security">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Data Security</h2>
                </div>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational measures to protect your personal information 
                      and document data. These measures include encryption, access controls, regular security assessments, 
                      and staff training. However, no method of transmission over the Internet or electronic storage is 100% 
                      secure, and we cannot guarantee absolute security.
                    </p>
                  </CardContent>
                </Card>
              </section>
              
              <Separator />

              {/* Abbreviated for other sections */}
              {/* Additional sections would be included here */}
              
              <section id="contact">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Contact Us</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-medium">LegalGPT</p>
                      <p className="text-muted-foreground">Email: privacy@legalgpt.com</p>
                      <p className="text-muted-foreground">Address: 123 Legal Street, Suite 100, San Francisco, CA 94102</p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-between items-center">
              <Badge variant="outline" className="text-xs">Last Updated: March 27, 2025</Badge>
              <Link href="#" className="text-sm text-primary hover:underline">Back to top</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}