import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ id: number; text: string; timestamp: string }>>([]);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    
    toast({
      title: "Сообщение отправлено",
      description: "Мы получили ваш вопрос и скоро ответим",
    });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Безопасная среда
              </span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}>
                О буллинге
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}>
                Помощь
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('parents')?.scrollIntoView({ behavior: 'smooth' })}>
                Родителям
              </Button>
              <Button onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}>
                Чат поддержки
              </Button>
            </div>
          </div>
        </div>
      </nav>

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

      <section id="info" className="py-20 bg-muted/30">
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

          <Card className="mt-12 border-primary/20 bg-gradient-to-br from-secondary/30 to-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="AlertCircle" className="text-primary" size={24} />
                Последствия буллинга
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Icon name="Brain" size={18} className="text-primary" />
                    Психологические
                  </h4>
                  <ul className="space-y-1 text-muted-foreground ml-6">
                    <li>• Депрессия и тревожность</li>
                    <li>• Низкая самооценка</li>
                    <li>• Страх и беспокойство</li>
                    <li>• Посттравматическое расстройство</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Icon name="GraduationCap" size={18} className="text-primary" />
                    Социальные и учебные
                  </h4>
                  <ul className="space-y-1 text-muted-foreground ml-6">
                    <li>• Снижение успеваемости</li>
                    <li>• Проблемы с посещением школы</li>
                    <li>• Изоляция от сверстников</li>
                    <li>• Потеря интереса к учебе</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="resources" className="py-20">
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

          <Card className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" className="text-primary" size={24} />
                Что делать, если ты столкнулся с буллингом?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Расскажи взрослому, которому доверяешь</h4>
                    <p className="text-muted-foreground">Родители, учитель, психолог — не держи проблему в себе</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Сохраняй доказательства</h4>
                    <p className="text-muted-foreground">Скриншоты переписок, записи угроз помогут разобраться в ситуации</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Не отвечай агрессией</h4>
                    <p className="text-muted-foreground">Это может ухудшить ситуацию. Лучше обратись за помощью</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <h4 className="font-semibold mb-1">Обратись на горячую линию</h4>
                    <p className="text-muted-foreground">Анонимно расскажи о проблеме специалистам</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="parents" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Советы для родителей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Как помочь ребенку справиться с буллингом
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="signs" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Eye" className="text-primary" size={20} />
                    <span className="font-semibold">Как распознать, что ребенка травят?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2">
                    <li>• Ребенок не хочет идти в школу, ищет причины остаться дома</li>
                    <li>• Снижается успеваемость, теряется интерес к учебе</li>
                    <li>• Появляются необъяснимые синяки, порванная одежда</li>
                    <li>• Становится замкнутым, тревожным, плохо спит</li>
                    <li>• Избегает разговоров о школе и одноклассниках</li>
                    <li>• Теряет или "ломает" вещи, не хочет объяснять причину</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="talk" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="text-primary" size={20} />
                    <span className="font-semibold">Как правильно поговорить с ребенком?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2">
                    <li>• Выберите спокойное время и место для разговора</li>
                    <li>• Не давите на ребенка, дайте ему время раскрыться</li>
                    <li>• Слушайте внимательно, не перебивая и не осуждая</li>
                    <li>• Скажите, что это не его вина, что вы на его стороне</li>
                    <li>• Не обещайте того, что не сможете выполнить</li>
                    <li>• Обсудите вместе план действий</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="actions" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" className="text-primary" size={20} />
                    <span className="font-semibold">Какие действия предпринять?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2">
                    <li>• Свяжитесь с классным руководителем и школьным психологом</li>
                    <li>• Зафиксируйте все случаи буллинга документально</li>
                    <li>• При необходимости обратитесь к администрации школы</li>
                    <li>• Рассмотрите консультацию с детским психологом</li>
                    <li>• В серьезных случаях — обращение в полицию или прокуратуру</li>
                    <li>• Продолжайте поддерживать ребенка эмоционально</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Heart" className="text-primary" size={20} />
                    <span className="font-semibold">Как поддержать ребенка эмоционально?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2">
                    <li>• Повторяйте, что вы любите ребенка и всегда будете рядом</li>
                    <li>• Помогите восстановить самооценку — хвалите за успехи</li>
                    <li>• Найдите занятия, где ребенок будет чувствовать себя успешным</li>
                    <li>• Расширяйте круг общения — кружки, секции, новые друзья</li>
                    <li>• Научите техникам управления стрессом и эмоциями</li>
                    <li>• Покажите, что проблему можно решить, но нужно время</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prevention" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                    <span className="font-semibold">Профилактика буллинга</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2">
                    <li>• Обсуждайте с ребенком тему буллинга с раннего возраста</li>
                    <li>• Учите уважению к различиям между людьми</li>
                    <li>• Развивайте эмоциональный интеллект и эмпатию</li>
                    <li>• Контролируйте активность ребенка в интернете</li>
                    <li>• Поддерживайте открытое общение с ребенком</li>
                    <li>• Будьте примером уважительного отношения к другим</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="chat" className="py-20">
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

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" size={24} />
                  Анонимные сообщения
                </CardTitle>
                <CardDescription>
                  Твое имя и данные не сохраняются. Ты в безопасности.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {messages.length > 0 && (
                  <div className="space-y-3 mb-4 p-4 bg-muted/50 rounded-lg max-h-60 overflow-y-auto">
                    {messages.map((msg) => (
                      <div key={msg.id} className="bg-card p-3 rounded-lg border">
                        <p className="text-sm mb-1">{msg.text}</p>
                        <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <Textarea
                  placeholder="Напиши свой вопрос или расскажи о проблеме..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-32 resize-none"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span>Сообщение полностью анонимно</span>
                  </div>
                  <Button onClick={handleSendMessage} disabled={!message.trim()}>
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </div>
              </CardContent>
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

      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-xl font-bold">Безопасная среда</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">Экстренная помощь:</p>
              <p className="text-2xl font-bold text-primary">8-800-2000-122</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>Помни: ты не один, и это не твоя вина. Помощь всегда рядом.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
