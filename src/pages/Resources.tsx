import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Phone" size={16} className="mr-2" />
              Помощь рядом
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Ресурсы помощи</h1>
            <p className="text-xl text-muted-foreground">
              Исчерпывающий список горячих линий, организаций и онлайн-ресурсов для борьбы с буллингом
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="AlertTriangle" className="text-primary" size={28} />
                  Экстренная помощь
                </CardTitle>
                <CardDescription>Если есть угроза жизни и здоровью</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <Icon name="Phone" className="text-primary" size={32} />
                    <div>
                      <p className="font-semibold">Полиция</p>
                      <p className="text-3xl font-bold text-primary">102</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <Icon name="Heart" className="text-primary" size={32} />
                    <div>
                      <p className="font-semibold">Скорая помощь</p>
                      <p className="text-3xl font-bold text-primary">103</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Горячие линии поддержки</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Детский телефон доверия</CardTitle>
                      <CardDescription>Всероссийская служба</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-4xl font-bold text-primary">8-800-2000-122</p>
                      <Badge variant="secondary" className="mt-2">Бесплатно</Badge>
                      <Badge variant="secondary" className="mt-2 ml-2">24/7</Badge>
                      <Badge variant="secondary" className="mt-2 ml-2">Анонимно</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Психологическая помощь детям, подросткам и их родителям. Квалифицированные специалисты 
                    помогут в любой сложной ситуации, включая буллинг.
                  </p>
                  <div className="bg-accent/30 rounded-lg p-3 text-sm">
                    <strong>Чем помогут:</strong> Эмоциональная поддержка, советы по решению проблемы, 
                    информация о дальнейших шагах
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="LifeBuoy" className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Линия помощи "Дети онлайн"</CardTitle>
                      <CardDescription>Помощь при кибербуллинге</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-4xl font-bold text-primary">8-800-25-000-15</p>
                      <Badge variant="secondary" className="mt-2">Бесплатно</Badge>
                      <Badge variant="secondary" className="mt-2 ml-2">Пн-Пт 9:00-18:00 МСК</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Специализированная помощь детям и подросткам, столкнувшимся с опасностью в интернете, 
                    включая кибербуллинг, онлайн-груминг и другие угрозы.
                  </p>
                  <div className="bg-accent/30 rounded-lg p-3 text-sm">
                    <strong>Чем помогут:</strong> Консультации по безопасности в интернете, помощь в удалении 
                    компрометирующих материалов, юридические советы
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Heart" className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Служба экстренной психологической помощи</CardTitle>
                      <CardDescription>Кризисная поддержка</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-4xl font-bold text-primary">051</p>
                      <Badge variant="secondary" className="mt-2">Бесплатно</Badge>
                      <Badge variant="secondary" className="mt-2 ml-2">24/7</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Экстренная психологическая помощь в кризисных ситуациях. Профессиональные психологи 
                    помогут справиться с острым стрессом и эмоциональными переживаниями.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Телефон доверия для подростков</CardTitle>
                      <CardDescription>Москва и Московская область</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-4xl font-bold text-primary">8-495-624-60-01</p>
                      <Badge variant="secondary" className="mt-2">Бесплатно</Badge>
                      <Badge variant="secondary" className="mt-2 ml-2">Ежедневно 9:00-21:00</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Психологическая поддержка подростков и молодежи. Специалисты помогут разобраться 
                    в сложных ситуациях, включая проблемы в школе и конфликты со сверстниками.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Онлайн-ресурсы и сайты</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Globe" className="text-primary" size={20} />
                      Травли.NET
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Информационный портал о буллинге с практическими советами, статьями и тестами
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://травлинет.рф" target="_blank" rel="noopener noreferrer">
                        Перейти на сайт
                        <Icon name="ExternalLink" className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Globe" className="text-primary" size={20} />
                      Помощь рядом
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      База данных психологических служб и центров помощи по всей России
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://pomoschryadom.ru" target="_blank" rel="noopener noreferrer">
                        Найти помощь
                        <Icon name="ExternalLink" className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Smartphone" className="text-primary" size={20} />
                      Твоя территория онлайн
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Онлайн-консультации психологов для подростков в чате
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://www.твоятерритория.онлайн" target="_blank" rel="noopener noreferrer">
                        Начать чат
                        <Icon name="ExternalLink" className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Shield" className="text-primary" size={20} />
                      Безопасный интернет
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Советы по защите от кибербуллинга и безопасности в сети
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://сетевичок.рф" target="_blank" rel="noopener noreferrer">
                        Узнать больше
                        <Icon name="ExternalLink" className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Организации и центры помощи</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Центр экстренной психологической помощи МЧС России</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    Квалифицированная психологическая помощь в кризисных ситуациях
                  </p>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span className="font-semibold">8 (495) 989-50-50</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Фонд "Женщины и дети прежде всего"</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    Помощь детям и подросткам в сложных жизненных ситуациях
                  </p>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span className="font-semibold">8 (495) 229-99-99</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Национальный центр помощи пропавшим и пострадавшим детям</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    Помощь детям, пострадавшим от насилия и буллинга
                  </p>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span className="font-semibold">8-800-700-56-76</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-primary" size={24} />
                  Как использовать эти ресурсы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Не бойся звонить</p>
                      <p className="text-sm text-muted-foreground">
                        Все звонки анонимны и бесплатны. Специалисты обучены помогать и не будут осуждать
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Выбери удобный формат</p>
                      <p className="text-sm text-muted-foreground">
                        Можно позвонить, написать в чат или лично посетить центр — выбирай, что комфортнее
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Сохрани контакты</p>
                      <p className="text-sm text-muted-foreground">
                        Добавь важные номера в телефон, чтобы они были под рукой в нужный момент
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Не сдавайся</p>
                      <p className="text-sm text-muted-foreground">
                        Если одна линия занята или не подходит, попробуй другую. Помощь обязательно найдется
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                Помни: обращение за помощью — это смелый и правильный шаг. 
                Эти ресурсы существуют специально для тебя.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/help">
                    <Icon name="LifeBuoy" className="mr-2" size={18} />
                    Пошаговое руководство
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/chat">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Анонимный чат
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
