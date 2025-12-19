import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Signs() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Eye" size={16} className="mr-2" />
              Распознать вовремя
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Признаки буллинга</h1>
            <p className="text-xl text-muted-foreground">
              Как понять, что ребенок или подросток подвергается травле
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="AlertTriangle" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Физические признаки</CardTitle>
                    <CardDescription>Видимые проявления травли</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Необъяснимые синяки, царапины, порезы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Поврежденная или пропавшая одежда, вещи</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Жалобы на головную боль, боли в животе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Нарушения сна, кошмары</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Потеря аппетита или переедание</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Heart" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Эмоциональные признаки</CardTitle>
                    <CardDescription>Изменения в поведении и настроении</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Резкие перепады настроения, плаксивость</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Тревожность, страхи, депрессивное состояние</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Низкая самооценка, негативные высказывания о себе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Раздражительность, агрессивность</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Замкнутость, избегание общения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="BookOpen" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Школьные признаки</CardTitle>
                    <CardDescription>Изменения в отношении к учебе</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Нежелание идти в школу, частые прогулы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Резкое снижение успеваемости</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Просьбы подвезти в школу (избегание общественного транспорта)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Отсутствие друзей, изоляция от одноклассников</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Выбор более длинного пути домой</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Smartphone" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Цифровые признаки</CardTitle>
                    <CardDescription>Признаки кибербуллинга</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Расстройство после использования телефона/компьютера</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Скрытность при использовании устройств</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Удаление аккаунтов в социальных сетях</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Избегание социальных мероприятий</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Страх проверить сообщения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertCircle" className="text-primary" size={24} />
                  Что делать, если вы заметили признаки?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>1. Сохраняйте спокойствие</strong> — ваша реакция очень важна для ребенка
                  </p>
                  <p className="text-muted-foreground">
                    <strong>2. Начните разговор</strong> — создайте безопасную атмосферу для открытого диалога
                  </p>
                  <p className="text-muted-foreground">
                    <strong>3. Слушайте без осуждения</strong> — дайте возможность выговориться
                  </p>
                  <p className="text-muted-foreground">
                    <strong>4. Поддержите</strong> — заверьте, что это не его вина
                  </p>
                  <p className="text-muted-foreground">
                    <strong>5. Действуйте</strong> — обратитесь за профессиональной помощью
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild>
                    <Link to="/parents-guide">
                      <Icon name="Users" className="mr-2" size={18} />
                      Руководство для родителей
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/help">
                      <Icon name="LifeBuoy" className="mr-2" size={18} />
                      Как получить помощь
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Для подростков</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Если ты замечаешь у себя эти признаки, знай: ты не один, и это не твоя вина. 
                  Буллинг — это серьезная проблема, но с ней можно справиться.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Важно понимать:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Травля — это проблема агрессора, не твоя</li>
                    <li>• Просить о помощи — это признак силы, не слабости</li>
                    <li>• Ты заслуживаешь уважения и безопасности</li>
                    <li>• Есть люди, которые готовы помочь</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link to="/chat">
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      Анонимный чат
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/resources">
                      <Icon name="Phone" className="mr-2" size={18} />
                      Горячие линии
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
