import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Info" size={16} className="mr-2" />
              О проекте
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Безопасная среда</h1>
            <p className="text-xl text-muted-foreground">
              Платформа поддержки подростков и их семей в борьбе с буллингом
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Target" className="text-primary" size={28} />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Мы создали эту платформу с единственной целью — помочь подросткам, сталкивающимся 
                  с буллингом, их семьям и педагогам найти поддержку, информацию и инструменты для 
                  преодоления травли.
                </p>
                <div className="bg-primary/10 rounded-lg p-6">
                  <p className="text-center font-semibold text-lg">
                    "Каждый ребенок заслуживает безопасной среды для роста и развития. 
                    Мы верим, что буллингу можно противостоять, и помогаем это делать."
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Наши ценности</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-scale">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                      <Icon name="Heart" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Эмпатия и поддержка</CardTitle>
                    <CardDescription>
                      Мы понимаем, как тяжело проходить через буллинг, и создаем пространство 
                      без осуждения и с полной поддержкой.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-scale">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3">
                      <Icon name="Lock" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Конфиденциальность</CardTitle>
                    <CardDescription>
                      Анонимность и защита личных данных — наш приоритет. Вы можете доверять нам 
                      свои истории и переживания.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-scale">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                      <Icon name="BookOpen" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Достоверная информация</CardTitle>
                    <CardDescription>
                      Все материалы основаны на научных исследованиях и проверенных методах работы 
                      с буллингом.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-scale">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Доступность</CardTitle>
                    <CardDescription>
                      Помощь должна быть доступна каждому, независимо от возраста, социального 
                      статуса или местоположения.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" size={28} />
                  Что мы предлагаем
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Информационные ресурсы</h4>
                        <p className="text-sm text-muted-foreground">
                          Подробные статьи о видах, признаках и последствиях буллинга
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Практические руководства</h4>
                        <p className="text-sm text-muted-foreground">
                          Пошаговые инструкции для подростков, родителей и учителей
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Истории преодоления</h4>
                        <p className="text-sm text-muted-foreground">
                          Вдохновляющие примеры людей, справившихся с буллингом
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">База ресурсов помощи</h4>
                        <p className="text-sm text-muted-foreground">
                          Актуальные контакты горячих линий и организаций поддержки
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Анонимный чат</h4>
                        <p className="text-sm text-muted-foreground">
                          Безопасное пространство для общения и поддержки
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Материалы для профилактики</h4>
                        <p className="text-sm text-muted-foreground">
                          Стратегии предотвращения буллинга для школ и семей
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="BarChart" className="text-primary" size={28} />
                  Проблема буллинга в цифрах
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <p className="text-4xl font-bold text-primary mb-2">55%</p>
                    <p className="text-sm text-muted-foreground">
                      подростков сталкивались с буллингом в школе
                    </p>
                  </div>
                  <div className="text-center p-6 bg-accent/30 rounded-lg">
                    <p className="text-4xl font-bold text-primary mb-2">70%</p>
                    <p className="text-sm text-muted-foreground">
                      случаев буллинга остаются незамеченными взрослыми
                    </p>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <p className="text-4xl font-bold text-primary mb-2">80%</p>
                    <p className="text-sm text-muted-foreground">
                      жертв отмечают улучшение после получения поддержки
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  Источник: Исследования по проблеме буллинга в образовательных учреждениях России, 2023
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={28} />
                  Наша команда
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Над проектом работает команда специалистов, объединенных общей целью — создать 
                  безопасную среду для подростков:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Психологи и консультанты</h4>
                    <p className="text-sm text-muted-foreground">
                      Профессионалы с опытом работы с подростками и проблемами буллинга
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Педагоги</h4>
                    <p className="text-sm text-muted-foreground">
                      Учителя и методисты, понимающие школьную среду изнутри
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Разработчики</h4>
                    <p className="text-sm text-muted-foreground">
                      IT-специалисты, создающие удобную и безопасную платформу
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Волонтеры</h4>
                    <p className="text-sm text-muted-foreground">
                      Люди, прошедшие через буллинг и желающие помочь другим
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Globe" className="text-primary" size={28} />
                  Партнеры и поддержка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Мы сотрудничаем с:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Психологическими центрами и службами поддержки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Образовательными учреждениями и методическими центрами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Некоммерческими организациями по защите прав детей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Экспертами в области детской психологии и педагогики</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={28} />
                  Присоединяйтесь к нам
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Мы всегда открыты к сотрудничеству и новым идеям. Если вы хотите:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Стать волонтером</h4>
                    <p className="text-sm text-muted-foreground">
                      Помогать в работе чата поддержки, создании контента, организации мероприятий
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Партнерство</h4>
                    <p className="text-sm text-muted-foreground">
                      Сотрудничество с организациями, школами, психологическими центрами
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Поделиться историей</h4>
                    <p className="text-sm text-muted-foreground">
                      Вдохновить других своим опытом преодоления буллинга
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Предложить идею</h4>
                    <p className="text-sm text-muted-foreground">
                      Помочь улучшить платформу, предложить новые функции или материалы
                    </p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full mt-6">
                  <Link to="/contact">
                    <Icon name="Mail" className="mr-2" size={18} />
                    Связаться с нами
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="text-center space-y-6 py-8">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Вместе мы можем создать мир, где каждый ребенок чувствует себя в безопасности. 
                Спасибо, что вы с нами в этом важном деле.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/help">
                    <Icon name="LifeBuoy" className="mr-2" size={18} />
                    Получить помощь
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/resources">
                    <Icon name="Phone" className="mr-2" size={18} />
                    Ресурсы помощи
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
