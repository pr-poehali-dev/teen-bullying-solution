import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Help() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="LifeBuoy" size={16} className="mr-2" />
              Ты не один
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Как получить помощь</h1>
            <p className="text-xl text-muted-foreground">
              Пошаговое руководство для тех, кто столкнулся с буллингом
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <p className="text-lg text-center font-medium">
                  Помни: обращение за помощью — это признак силы, а не слабости. 
                  Ты заслуживаешь безопасности и уважения.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div>
                      <CardTitle className="text-xl">Признай, что есть проблема</CardTitle>
                      <CardDescription>Первый и самый важный шаг</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Если ты чувствуешь себя некомфортно, испытываешь страх или тревогу из-за действий других людей — это буллинг, и это не нормально.
                  </p>
                  <div className="bg-accent/30 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">Важно понимать:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Это не твоя вина</li>
                      <li>• Ты не заслуживаешь такого отношения</li>
                      <li>• У тебя есть право на безопасность</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div>
                      <CardTitle className="text-xl">Поговори с кем-то, кому доверяешь</CardTitle>
                      <CardDescription>Не держи все в себе</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Расскажи о ситуации взрослому, которому доверяешь: родителю, учителю, школьному психологу, старшему другу или родственнику.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">С кем можно поговорить:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Родители или опекуны</li>
                        <li>• Классный руководитель</li>
                        <li>• Школьный психолог</li>
                        <li>• Тренер, наставник</li>
                        <li>• Друг семьи</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Что сказать:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Опиши, что происходит</li>
                        <li>• Расскажи, как ты себя чувствуешь</li>
                        <li>• Попроси о помощи</li>
                        <li>• Будь честным</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div>
                      <CardTitle className="text-xl">Зафиксируй доказательства</CardTitle>
                      <CardDescription>Сохрани информацию о буллинге</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Документирование случаев травли поможет взрослым понять серьезность ситуации и принять меры.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Делай скриншоты оскорбительных сообщений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Записывай даты и время инцидентов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Сохраняй письма, записки, сообщения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Веди дневник происходящего</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                    <div>
                      <CardTitle className="text-xl">Обратись на горячую линию</CardTitle>
                      <CardDescription>Профессиональная и анонимная поддержка</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Специалисты горячих линий обучены помогать в подобных ситуациях. Звонки бесплатны и анонимны.
                  </p>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                      <Icon name="Phone" className="text-primary" size={32} />
                      <div>
                        <p className="font-semibold">Детский телефон доверия</p>
                        <p className="text-2xl font-bold text-primary">8-800-2000-122</p>
                        <p className="text-sm text-muted-foreground">Круглосуточно, бесплатно</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-accent/30 rounded-lg">
                      <Icon name="LifeBuoy" className="text-primary" size={32} />
                      <div>
                        <p className="font-semibold">Линия помощи "Дети онлайн"</p>
                        <p className="text-2xl font-bold text-primary">8-800-25-000-15</p>
                        <p className="text-sm text-muted-foreground">Помощь при кибербуллинге</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/resources">
                      Все ресурсы помощи
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      5
                    </div>
                    <div>
                      <CardTitle className="text-xl">Обратись к специалисту</CardTitle>
                      <CardDescription>Психологическая поддержка</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Психолог или психотерапевт поможет справиться с эмоциями, восстановить самооценку и разработать стратегии защиты.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <span className="text-sm text-muted-foreground">Школьный психолог (бесплатно)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <span className="text-sm text-muted-foreground">Центры психологической помощи</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <span className="text-sm text-muted-foreground">Онлайн-консультации</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <span className="text-sm text-muted-foreground">Частные специалисты</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      6
                    </div>
                    <div>
                      <CardTitle className="text-xl">Позаботься о себе</CardTitle>
                      <CardDescription>Восстановление и самопомощь</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Пока идет процесс решения проблемы, важно заботиться о своем эмоциональном состоянии.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-sm">Что помогает:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Занимайся любимыми делами</li>
                        <li>• Проводи время с поддерживающими людьми</li>
                        <li>• Занимайся спортом</li>
                        <li>• Практикуй релаксацию</li>
                        <li>• Веди дневник</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-sm">Чего избегать:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Изоляции и одиночества</li>
                        <li>• Самообвинения</li>
                        <li>• Мести агрессору</li>
                        <li>• Самоповреждения</li>
                        <li>• Замалчивания проблемы</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  Экстренная помощь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Если ты чувствуешь угрозу своей безопасности или жизни, немедленно обратись за помощью:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-primary/20 rounded-lg">
                    <Icon name="AlertTriangle" className="text-primary" size={28} />
                    <div>
                      <p className="font-semibold">Полиция</p>
                      <p className="text-3xl font-bold text-primary">102</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/20 rounded-lg">
                    <Icon name="Heart" className="text-primary" size={28} />
                    <div>
                      <p className="font-semibold">Скорая помощь</p>
                      <p className="text-3xl font-bold text-primary">103</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                Ты не один в этой ситуации. Есть люди, которые хотят и готовы помочь.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/chat">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Анонимный чат
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/stories">
                    <Icon name="BookHeart" className="mr-2" size={18} />
                    Истории преодоления
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
