import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Groceries', amount: 5000, date: '2024-10-15' },
    { id: 2, category: 'Transport', amount: 2500, date: '2024-10-20' },
    { id: 3, category: 'Entertainment', amount: 3000, date: '2024-10-22' },
  ]);

  const budget = {
    total: 50000,
    spent: 10500,
    remaining: 39500,
  };

  const categories = [
    { name: 'Groceries', spent: 5000, limit: 15000, icon: 'ShoppingCart' },
    { name: 'Transport', spent: 2500, limit: 8000, icon: 'Car' },
    { name: 'Entertainment', spent: 3000, limit: 10000, icon: 'Film' },
    { name: 'Utilities', spent: 0, limit: 7000, icon: 'Home' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wallet" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-foreground">Finance Tracker</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Manage Your Finances Easily
              </h1>
              <p className="text-xl text-muted-foreground">
                Track expenses, plan budgets, and achieve financial goals with our convenient tracker
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="animate-scale-in">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/c5f6ad49-5bc1-47ae-8e8b-14a7916a4a6a.jpg" 
                alt="Financial Management" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Budget Overview</h2>
            <p className="text-xl text-muted-foreground">Your finances for the current month</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Total Budget</CardTitle>
                  <Icon name="DollarSign" className="text-primary" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">${budget.total.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-2">Planned for the month</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Spent</CardTitle>
                  <Icon name="TrendingDown" className="text-destructive" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-destructive">${budget.spent.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-2">{((budget.spent / budget.total) * 100).toFixed(1)}% of budget</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Remaining</CardTitle>
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">${budget.remaining.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-2">Available until month end</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Expenses by Category</CardTitle>
                <CardDescription>Track spending in each category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((category, index) => (
                  <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name={category.icon as any} className="text-primary" size={20} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ${category.spent.toLocaleString()} / ${category.limit.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(category.spent / category.limit) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Add Expense</CardTitle>
                <CardDescription>Record a new transaction</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="E.g., Groceries" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Plus" className="mr-2" size={18} />
                    Add Expense
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/img/3f63de1e-9bb0-4bf0-8cdc-761ca06c4086.jpg" 
                alt="About Us" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">About Our Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finance Tracker is a modern tool for managing personal finances. We help thousands of people control expenses, plan budgets, and achieve financial goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to make financial planning simple and accessible to everyone. Minimalist design, intuitive interface, and powerful analytics tools — everything for your convenience.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Everything you need to manage your finances</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="PieChart" className="text-primary mb-4" size={40} />
                <CardTitle>Expense Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Record all expenses and get detailed statistics by category. Expense visualization helps identify areas for savings.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Target" className="text-primary mb-4" size={40} />
                <CardTitle>Budget Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set limits by category, create financial goals, and track their achievement in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="BarChart3" className="text-primary mb-4" size={40} />
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get detailed reports on your finances, analyze trends, and make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Bell" className="text-primary mb-4" size={40} />
                <CardTitle>Smart Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set up notifications for limit overruns, upcoming payments, and important financial events.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Shield" className="text-primary mb-4" size={40} />
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your financial data is securely protected. We use modern encryption and authentication methods.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Smartphone" className="text-primary mb-4" size={40} />
                <CardTitle>Access Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage finances from any device. Responsive design ensures convenience on phone, tablet, and PC.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Blog</h2>
            <p className="text-xl text-muted-foreground">Useful articles about finance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center rounded-t-lg">
                <Icon name="BookOpen" className="text-primary" size={60} />
              </div>
              <CardHeader>
                <CardTitle>5 Rules for Effective Budgeting</CardTitle>
                <CardDescription>October 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn the key principles of budget planning that will help you control your finances.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center rounded-t-lg">
                <Icon name="TrendingUp" className="text-primary" size={60} />
              </div>
              <CardHeader>
                <CardTitle>How to Start Investing</CardTitle>
                <CardDescription>October 12, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A step-by-step guide for beginner investors. Start growing your capital today.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center rounded-t-lg">
                <Icon name="Lightbulb" className="text-primary" size={60} />
              </div>
              <CardHeader>
                <CardTitle>10 Ways to Save Money</CardTitle>
                <CardDescription>October 8, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Simple and effective saving tips that don't require sacrificing your quality of life.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I start using the tracker?</AccordionTrigger>
                    <AccordionContent>
                      Simply register, set your monthly budget, and start adding expenses. The system will automatically create visualization and analytics.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is my data secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we use modern data encryption and do not share your information with third parties. All data is stored on secure servers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
                    <AccordionContent>
                      The web version is fully adapted for mobile devices. You can add the site to your home screen for quick access.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I export my data?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can export all your data at any time in CSV, Excel, or PDF formats for further analysis.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or suggestions? We're always happy to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">support@financetracker.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Financial St, New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="/img/48ec0b4a-696b-425d-aac8-b0b02c9fdcbf.jpg" 
                  alt="Financial Education" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Write to Us</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject of inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      className="w-full min-h-[120px] px-3 py-2 text-sm rounded-md border border-input bg-background"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wallet" size={24} />
                <span className="text-xl font-bold">Finance Tracker</span>
              </div>
              <p className="text-gray-300 text-sm">
                Manage your finances easily and effectively
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 Finance Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;