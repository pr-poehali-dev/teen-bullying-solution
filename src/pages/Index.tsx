import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-accent/20 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                <Icon name="Heart" size={16} className="mr-2" />
                Ты не один
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Место, где тебя{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  поддержат
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Буллинг — это не твоя вина. Здесь ты найдешь помощь, понимание и поддержку. 
                Мы поможем тебе и твоим близким справиться с этой проблемой.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Анонимный чат
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}>
                  Горячие линии
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/f42c9696-5a72-49c6-a176-edb523440947/files/ee2c34ac-5674-4b1b-b1e2-213c2c9fc545.jpg"
                alt="Поддержка подростков"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Что такое буллинг?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Буллинг — это систематическое психологическое или физическое давление на человека
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Физический буллинг</CardTitle>
                <CardDescription>
                  Толчки, удары, порча вещей, физическое запугивание
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" className="text-primary" size={24} />
                </div>
                <CardTitle>Словесный буллинг</CardTitle>
                <CardDescription>
                  Оскорбления, угрозы, унижения, распространение слухов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Smartphone" className="text-primary" size={24} />
                </div>
                <CardTitle>Кибербуллинг</CardTitle>
                <CardDescription>
                  Травля в интернете, социальных сетях, мессенджерах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/types">
                Узнать больше о видах буллинга
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ресурсы помощи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Не оставайся один на один с проблемой — обратись за помощью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" size={20} />
                  Детский телефон доверия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">8-800-2000-122</p>
                <p className="text-sm text-muted-foreground">Бесплатно, анонимно, круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="LifeBuoy" className="text-primary" size={20} />
                  Линия помощи "Дети онлайн"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">8-800-25-000-15</p>
                <p className="text-sm text-muted-foreground">Помощь при кибербуллинге</p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={20} />
                  Психологическая помощь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">051</p>
                <p className="text-sm text-muted-foreground">Служба экстренной помощи</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild variant="outline">
              <Link to="/help">
                Полное руководство по получению помощи
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Советы для родителей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Как помочь ребенку справиться с буллингом
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Eye" className="text-primary mb-2" size={32} />
                <CardTitle>Признаки буллинга</CardTitle>
                <CardDescription>
                  Как понять, что ребенок подвергается травле
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/signs">
                    Узнать подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Heart" className="text-primary mb-2" size={32} />
                <CardTitle>Полное руководство</CardTitle>
                <CardDescription>
                  Как помочь ребенку справиться с буллингом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/parents-guide">
                    Читать руководство
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-4">
                <Icon name="Lock" size={16} className="text-primary" />
                <span className="text-sm font-medium">100% анонимно и конфиденциально</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Чат поддержки</h2>
              <p className="text-xl text-muted-foreground">
                Задай свой вопрос анонимно. Мы здесь, чтобы помочь.
              </p>
            </div>

            <Card className="border-primary/30 text-center p-8">
              <Icon name="MessageSquare" className="text-primary mx-auto mb-4" size={48} />
              <CardTitle className="mb-2">Анонимный чат поддержки</CardTitle>
              <CardDescription className="mb-6">
                Задай вопрос или расскажи о своей ситуации. Твои данные полностью защищены.
              </CardDescription>
              <Button size="lg" asChild>
                <Link to="/chat">
                  Начать анонимный чат
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Link>
              </Button>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card className="text-center p-4">
                <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-semibold mb-1">Поддержка 24/7</h4>
                <p className="text-sm text-muted-foreground">Мы всегда на связи</p>
              </Card>
              <Card className="text-center p-4">
                <Icon name="Lock" className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-semibold mb-1">Анонимность</h4>
                <p className="text-sm text-muted-foreground">Никаких личных данных</p>
              </Card>
              <Card className="text-center p-4">
                <Icon name="Heart" className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-semibold mb-1">Понимание</h4>
                <p className="text-sm text-muted-foreground">Без осуждения</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}