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
    { id: 1, category: 'Продукты', amount: 5000, date: '2024-10-15' },
    { id: 2, category: 'Транспорт', amount: 2500, date: '2024-10-20' },
    { id: 3, category: 'Развлечения', amount: 3000, date: '2024-10-22' },
  ]);

  const budget = {
    total: 50000,
    spent: 10500,
    remaining: 39500,
  };

  const categories = [
    { name: 'Продукты', spent: 5000, limit: 15000, icon: 'ShoppingCart' },
    { name: 'Транспорт', spent: 2500, limit: 8000, icon: 'Car' },
    { name: 'Развлечения', spent: 3000, limit: 10000, icon: 'Film' },
    { name: 'Коммунальные', spent: 0, limit: 7000, icon: 'Home' },
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
              <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Управляйте финансами легко
              </h1>
              <p className="text-xl text-muted-foreground">
                Отслеживайте расходы, планируйте бюджет и достигайте финансовых целей с нашим удобным трекером
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="animate-scale-in">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/c5f6ad49-5bc1-47ae-8e8b-14a7916a4a6a.jpg" 
                alt="Управление финансами" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Обзор бюджета</h2>
            <p className="text-xl text-muted-foreground">Ваши финансы за текущий месяц</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Общий бюджет</CardTitle>
                  <Icon name="DollarSign" className="text-primary" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">{budget.total.toLocaleString()} ₽</p>
                <p className="text-sm text-muted-foreground mt-2">Запланировано на месяц</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Потрачено</CardTitle>
                  <Icon name="TrendingDown" className="text-destructive" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-destructive">{budget.spent.toLocaleString()} ₽</p>
                <p className="text-sm text-muted-foreground mt-2">{((budget.spent / budget.total) * 100).toFixed(1)}% от бюджета</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Осталось</CardTitle>
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{budget.remaining.toLocaleString()} ₽</p>
                <p className="text-sm text-muted-foreground mt-2">Доступно до конца месяца</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Расходы по категориям</CardTitle>
                <CardDescription>Контролируйте траты в каждой категории</CardDescription>
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
                        {category.spent.toLocaleString()} / {category.limit.toLocaleString()} ₽
                      </span>
                    </div>
                    <Progress value={(category.spent / category.limit) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Добавить расход</CardTitle>
                <CardDescription>Запишите новую транзакцию</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Категория</Label>
                    <Input id="category" placeholder="Например: Продукты" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма</Label>
                    <Input id="amount" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Plus" className="mr-2" size={18} />
                    Добавить расход
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
                alt="О нас" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">О нашем сервисе</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finance Tracker — это современный инструмент для управления личными финансами. Мы помогаем тысячам людей контролировать расходы, планировать бюджет и достигать финансовых целей.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша миссия — сделать финансовое планирование простым и доступным для каждого. Минималистичный дизайн, интуитивный интерфейс и мощные инструменты аналитики — всё для вашего удобства.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Активных пользователей</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для управления финансами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="PieChart" className="text-primary mb-4" size={40} />
                <CardTitle>Отслеживание расходов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Записывайте все траты и получайте детальную статистику по категориям. Визуализация расходов поможет найти зоны экономии.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Target" className="text-primary mb-4" size={40} />
                <CardTitle>Планирование бюджета</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Устанавливайте лимиты по категориям, создавайте финансовые цели и следите за их достижением в реальном времени.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="BarChart3" className="text-primary mb-4" size={40} />
                <CardTitle>Аналитика и отчёты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Получайте подробные отчёты о своих финансах, анализируйте тренды и принимайте обоснованные решения.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Bell" className="text-primary mb-4" size={40} />
                <CardTitle>Умные напоминания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Настройте уведомления о превышении лимитов, предстоящих платежах и важных финансовых событиях.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Shield" className="text-primary mb-4" size={40} />
                <CardTitle>Безопасность данных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ваши финансовые данные надёжно защищены. Используем современные методы шифрования и аутентификации.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Smartphone" className="text-primary mb-4" size={40} />
                <CardTitle>Доступ везде</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Управляйте финансами с любого устройства. Адаптивный дизайн обеспечивает удобство на телефоне, планшете и ПК.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Полезные статьи о финансах</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center rounded-t-lg">
                <Icon name="BookOpen" className="text-primary" size={60} />
              </div>
              <CardHeader>
                <CardTitle>5 правил эффективного бюджета</CardTitle>
                <CardDescription>15 октября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Узнайте основные принципы планирования бюджета, которые помогут вам контролировать финансы.
                </p>
                <Button variant="outline" size="sm">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center rounded-t-lg">
                <Icon name="TrendingUp" className="text-primary" size={60} />
              </div>
              <CardHeader>
                <CardTitle>Как начать инвестировать</CardTitle>
                <CardDescription>12 октября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Пошаговое руководство для начинающих инвесторов. Начните приумножать капитал уже сегодня.
                </p>
                <Button variant="outline" size="sm">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center rounded-t-lg">
                <Icon name="Lightbulb" className="text-primary" size={60} />
              </div>
              <CardHeader>
                <CardTitle>10 способов сэкономить</CardTitle>
                <CardDescription>8 октября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Простые и эффективные лайфхаки для экономии, которые не требуют жертв в качестве жизни.
                </p>
                <Button variant="outline" size="sm">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Как начать пользоваться трекером?</AccordionTrigger>
                    <AccordionContent>
                      Просто зарегистрируйтесь, укажите свой месячный бюджет и начните добавлять расходы. Система автоматически создаст визуализацию и аналитику.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Безопасны ли мои данные?</AccordionTrigger>
                    <AccordionContent>
                      Да, мы используем современное шифрование данных и не передаём вашу информацию третьим лицам. Все данные хранятся на защищённых серверах.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Есть ли мобильное приложение?</AccordionTrigger>
                    <AccordionContent>
                      Веб-версия полностью адаптирована под мобильные устройства. Вы можете добавить сайт на домашний экран для быстрого доступа.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Можно ли экспортировать данные?</AccordionTrigger>
                    <AccordionContent>
                      Да, вы можете в любой момент экспортировать все свои данные в форматах CSV, Excel или PDF для дальнейшего анализа.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Есть вопросы или предложения? Мы всегда рады помочь!
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
                    <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="/img/48ec0b4a-696b-425d-aac8-b0b02c9fdcbf.jpg" 
                  alt="Финансовое образование" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Тема обращения" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <textarea 
                      id="message" 
                      className="w-full min-h-[120px] px-3 py-2 text-sm rounded-md border border-input bg-background"
                      placeholder="Расскажите, чем мы можем помочь..."
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить сообщение
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
                Управляйте своими финансами легко и эффективно
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#dashboard" className="hover:text-primary transition-colors">Дашборд</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 Finance Tracker. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
