import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: string; time: string }[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: nickname || 'Аноним',
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Симуляция автоответа поддержки
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: 'Спасибо, что поделился. Мы здесь, чтобы поддержать тебя. Расскажи больше, если хочешь.',
          sender: 'Консультант',
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Анонимная поддержка
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Чат поддержки</h1>
            <p className="text-xl text-muted-foreground">
              Безопасное пространство для разговора. Твоя анонимность гарантирована.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Lock" className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Анонимно</h3>
                  <p className="text-sm text-muted-foreground">
                    Не нужно указывать реальное имя
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Shield" className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Безопасно</h3>
                  <p className="text-sm text-muted-foreground">
                    Без осуждения и оценок
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Heart" className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Поддержка</h3>
                  <p className="text-sm text-muted-foreground">
                    Понимание и сочувствие
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" size={24} />
                  Окно чата
                </CardTitle>
                <CardDescription>
                  Поделись тем, что тебя беспокоит. Мы здесь, чтобы выслушать.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4 min-h-[400px] max-h-[400px] overflow-y-auto space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-20">
                      <Icon name="MessageCircle" className="mx-auto mb-4 text-muted-foreground" size={48} />
                      <p className="text-muted-foreground mb-2">Начни разговор</p>
                      <p className="text-sm text-muted-foreground">
                        Напиши сообщение, и мы ответим тебе
                      </p>
                    </div>
                  ) : (
                    messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.sender === 'Консультант' ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.sender === 'Консультант'
                              ? 'bg-accent/50'
                              : 'bg-primary/20'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold">{msg.sender}</span>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm">{msg.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Твой ник (необязательно)"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      maxLength={20}
                      className="max-w-xs"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Напиши свое сообщение здесь..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button onClick={handleSendMessage} className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" className="text-primary" size={20} />
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Этот чат — демонстрационный.</strong> В реальной версии здесь будет связь 
                    с обученными консультантами.
                  </p>
                  <p>
                    Если тебе нужна срочная помощь прямо сейчас, пожалуйста, позвони на горячую линию:
                  </p>
                  <div className="bg-background rounded-lg p-4 mt-3">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Phone" className="text-primary" size={24} />
                      <div>
                        <p className="font-semibold">Детский телефон доверия</p>
                        <p className="text-2xl font-bold text-primary">8-800-2000-122</p>
                        <p className="text-xs text-muted-foreground">Круглосуточно, бесплатно, анонимно</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertCircle" className="text-primary" size={20} />
                  Правила безопасности в чате
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Не делись личной информацией: адресом, номером школы, полным именем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Не публикуй фотографии себя или других людей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Будь вежлив и уважителен к консультантам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5" size={16} />
                    <span>Если тебе угрожает опасность прямо сейчас, звони 102 (полиция) или 103 (скорая)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg">Нужна помощь родителям?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Руководство о том, как помочь ребенку, столкнувшемуся с буллингом
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/parents-guide">
                      Для родителей
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg">Все ресурсы помощи</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Полный список горячих линий, организаций и онлайн-ресурсов
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/resources">
                      Смотреть ресурсы
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Heart" className="text-primary mt-1" size={32} />
                  <div>
                    <h3 className="font-semibold mb-2">Ты не один</h3>
                    <p className="text-muted-foreground">
                      Многие подростки проходят через похожий опыт. Обращение за помощью — это признак 
                      силы, а не слабости. Мы здесь, чтобы поддержать тебя на каждом шаге пути к 
                      преодолению буллинга. Твои чувства важны, и ты заслуживаешь безопасности и уважения.
                    </p>
                  </div>
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
