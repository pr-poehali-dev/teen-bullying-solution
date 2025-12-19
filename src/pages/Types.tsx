import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Types() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Виды буллинга</h1>
            <p className="text-xl text-muted-foreground">
              Понимание различных форм травли — первый шаг к защите
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Физический буллинг</CardTitle>
                    <CardDescription>Применение физической силы</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Самая очевидная форма буллинга, включающая прямое физическое воздействие на жертву.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Примеры:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Толчки, удары, пинки</li>
                      <li>• Щипки, захваты</li>
                      <li>• Порча личных вещей</li>
                      <li>• Отбирание еды или денег</li>
                      <li>• Физическое запугивание</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Последствия:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Физические травмы</li>
                      <li>• Страх перед школой</li>
                      <li>• Психосоматические заболевания</li>
                      <li>• Низкая самооценка</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="MessageSquare" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Словесный буллинг</CardTitle>
                    <CardDescription>Психологическое давление словами</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Использование слов для унижения, запугивания или причинения эмоциональной боли.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Примеры:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Обзывания и оскорбления</li>
                      <li>• Насмешки над внешностью</li>
                      <li>• Угрозы и запугивание</li>
                      <li>• Распространение слухов</li>
                      <li>• Публичное унижение</li>
                      <li>• Неприятные прозвища</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Последствия:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Депрессия и тревожность</li>
                      <li>• Потеря уверенности в себе</li>
                      <li>• Проблемы с самооценкой</li>
                      <li>• Социальная изоляция</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="UserX" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Социальный буллинг</CardTitle>
                    <CardDescription>Изоляция и исключение</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Намеренное исключение человека из социальной группы и разрушение его репутации.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Примеры:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Игнорирование и бойкот</li>
                      <li>• Исключение из группы</li>
                      <li>• Распространение сплетен</li>
                      <li>• Публичное унижение</li>
                      <li>• Манипуляции дружбой</li>
                      <li>• Подстрекательство других</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Последствия:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Чувство одиночества</li>
                      <li>• Социальная тревожность</li>
                      <li>• Проблемы с доверием</li>
                      <li>• Депрессия</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Smartphone" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Кибербуллинг</CardTitle>
                    <CardDescription>Травля в цифровом пространстве</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Современная форма буллинга с использованием цифровых технологий и социальных сетей.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Примеры:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Оскорбления в соцсетях</li>
                      <li>• Угрозы в мессенджерах</li>
                      <li>• Распространение фото/видео</li>
                      <li>• Создание фейковых аккаунтов</li>
                      <li>• Публичный шейминг онлайн</li>
                      <li>• Исключение из групп</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Особенности:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Круглосуточное воздействие</li>
                      <li>• Широкая аудитория</li>
                      <li>• Анонимность агрессора</li>
                      <li>• Сложно удалить следы</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={20} className="text-primary" />
                    Важно знать:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Кибербуллинг может быть особенно травматичным, так как жертва не может укрыться даже дома. 
                    Помни: скриншоты сообщений — это доказательства, которые можно использовать для защиты.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle>Важно понимать</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Буллинг — это не конфликт и не ссора. Это систематическое давление, где есть дисбаланс сил. 
                  Любая форма травли недопустима и требует вмешательства взрослых.
                </p>
                <p className="text-muted-foreground">
                  Часто разные виды буллинга комбинируются. Важно распознать проблему на ранней стадии 
                  и обратиться за помощью.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link to="/signs">
                Признаки буллинга
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/help">
                Как получить помощь
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
