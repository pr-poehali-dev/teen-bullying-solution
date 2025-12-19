import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка на сервер
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Mail" size={16} className="mr-2" />
              Связаться с нами
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады вашим вопросам, предложениям и обратной связи
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    support@safe-space.ru
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ответим в течение 24 часов
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Горячая линия</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    8-800-2000-122
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Круглосуточно, бесплатно
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Icon name="MessageCircle" className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Онлайн-чат</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Анонимная поддержка
                  </p>
                  <Button asChild variant="link" size="sm" className="px-0">
                    <Link to="/chat">Перейти в чат</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Send" className="text-primary" size={24} />
                    Отправить сообщение
                  </CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Check" className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
                      <p className="text-muted-foreground">
                        Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ваше имя"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Тема</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="О чем ваше сообщение?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Сообщение</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Напишите ваше сообщение здесь..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" className="mr-2" size={18} />
                        Отправить сообщение
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Icon name="HelpCircle" className="text-primary" size={20} />
                      Часто задаваемые вопросы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Как быстро вы отвечаете?</h4>
                      <p className="text-sm text-muted-foreground">
                        Мы стараемся отвечать на все сообщения в течение 24 часов в рабочие дни. 
                        Для срочных случаев используйте горячую линию.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Можно ли написать анонимно?</h4>
                      <p className="text-sm text-muted-foreground">
                        Да, вы можете воспользоваться анонимным чатом на сайте или позвонить 
                        на горячую линию без указания личных данных.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Кто отвечает на сообщения?</h4>
                      <p className="text-sm text-muted-foreground">
                        На ваши вопросы отвечают специалисты нашей команды: психологи, 
                        педагоги и консультанты с опытом работы с проблемами буллинга.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Icon name="AlertCircle" className="text-primary" size={20} />
                      Экстренная помощь
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Если вам или кому-то из ваших близких угрожает опасность прямо сейчас:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                        <Icon name="Phone" className="text-primary" size={24} />
                        <div>
                          <p className="font-semibold text-sm">Полиция</p>
                          <p className="text-xl font-bold text-primary">102</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                        <Icon name="Heart" className="text-primary" size={24} />
                        <div>
                          <p className="font-semibold text-sm">Скорая помощь</p>
                          <p className="text-xl font-bold text-primary">103</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  По каким вопросам к нам обращаться
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Для подростков и их семей:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Консультация по ситуации буллинга</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Помощь в поиске психолога</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Информация о правах и защите</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Эмоциональная поддержка</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Для педагогов и организаций:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Партнерство и сотрудничество</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Методические материалы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Организация тренингов и семинаров</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>Консультации по сложным случаям</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Globe" className="text-primary" size={24} />
                  Мы в социальных сетях
                </CardTitle>
                <CardDescription>
                  Следите за новостями, полезными материалами и историями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-4">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Globe" size={24} />
                      <span className="text-xs">ВКонтакте</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-4">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="MessageCircle" size={24} />
                      <span className="text-xs">Telegram</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-4">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Instagram" size={24} />
                      <span className="text-xs">Instagram</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-4">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Youtube" size={24} />
                      <span className="text-xs">YouTube</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6 py-8">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Мы ценим каждое ваше обращение. Вместе мы делаем мир безопаснее для детей и подростков.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/about">
                    <Icon name="Info" className="mr-2" size={18} />
                    О проекте
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/resources">
                    <Icon name="Phone" className="mr-2" size={18} />
                    Все ресурсы помощи
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
