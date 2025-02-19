'use client';

import { Terminal, Server, Cloud, Shield, Cpu, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8">
            <Terminal className="w-16 h-16 text-primary" />
            <h1 className="text-5xl font-bold tracking-tight">
              Homelab-er
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Set up a production-grade Kubernetes cluster at home without the complexity.
              Automated provisioning, simplified management.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need for Your Homelab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Server className="w-8 h-8" />}
              title="Automated Setup"
              description="Zero-touch provisioning of your Kubernetes cluster. Just connect your hardware and we handle the rest."
            />
            <FeatureCard
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud-Native Stack"
              description="Pre-configured with essential cloud-native tools and services for monitoring, logging, and service mesh."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Enterprise Security"
              description="Production-grade security with automated certificate management and network policies."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8" />}
              title="Resource Optimization"
              description="Intelligent workload placement and resource management for optimal performance."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title="Simple Management"
              description="User-friendly dashboard for cluster management, deployments, and monitoring."
            />
            <Card className="p-6 flex flex-col items-center text-center space-y-4 bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold">Ready to Start?</h3>
              <p className="text-primary-foreground/90">
                Join thousands of homelab enthusiasts running production-grade Kubernetes at home.
              </p>
              <Button variant="secondary" className="mt-4">
                Get Started Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Three Steps to Your Personal Cloud
            </h2>
            <div className="grid gap-8">
              <StepCard
                number="1"
                title="Connect Your Hardware"
                description="Connect your servers or mini PCs to your network and power them on."
              />
              <StepCard
                number="2"
                title="Run Our Installer"
                description="Execute our automated installer which handles all the configuration and setup."
              />
              <StepCard
                number="3"
                title="Deploy Your Apps"
                description="Use our dashboard to deploy and manage your applications with ease."
              />
            </div>
            <Button size="lg" className="mt-12">
              Start Building Your Cluster
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 flex flex-col items-center text-center space-y-4">
      <div className="text-primary">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

function StepCard({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-6 text-left p-6 bg-background rounded-lg shadow-sm">
      <div className="flex-none">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}