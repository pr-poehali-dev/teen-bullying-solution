import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Prevention() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Shield" size={16} className="mr-2" />
              Профилактика
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Предотвращение буллинга</h1>
            <p className="text-xl text-muted-foreground">
              Стратегии для семей, школ и сообществ по созданию безопасной среды
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <p className="text-lg font-medium text-center">
                  Предотвращение буллинга — это общая ответственность. Когда семья, школа и сообщество 
                  работают вместе, можно создать среду, где травля невозможна.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Роль семьи</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Home" className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Создание защитной семейной среды</CardTitle>
                      <CardDescription>Основа эмоциональной безопасности</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Открытая коммуникация:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Ежедневные разговоры о школе и друзьях</li>
                        <li>• Создание атмосферы доверия</li>
                        <li>• Активное слушание без осуждения</li>
                        <li>• Обсуждение чувств и эмоций</li>
                        <li>• Семейные традиции общения</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Укрепление самооценки:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Похвала за усилия, не только результаты</li>
                        <li>• Поддержка увлечений и талантов</li>
                        <li>• Признание уникальности ребенка</li>
                        <li>• Обучение справляться с неудачами</li>
                        <li>• Безусловная любовь и принятие</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-accent/30 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold mb-2">Обучение эмпатии:</h4>
                    <p className="text-sm text-muted-foreground">
                      Учите детей понимать чувства других, обсуждайте разные точки зрения, 
                      показывайте пример сострадания и уважения к различиям.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" size={24} />
                    Обучение социальным навыкам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-sm">Уверенное поведение</p>
                        <p className="text-sm text-muted-foreground">
                          Учите говорить "нет", выражать свои границы, просить о помощи
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-sm">Решение конфликтов</p>
                        <p className="text-sm text-muted-foreground">
                          Обучайте конструктивным способам разрешения споров
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-sm">Дружба и отношения</p>
                        <p className="text-sm text-muted-foreground">
                          Помогайте развивать навыки общения и построения здоровых отношений
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Роль школы</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Building" className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Школьная политика против буллинга</CardTitle>
                      <CardDescription>Системный подход к профилактике</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Четкие правила и последствия:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Определение буллинга и неприемлемого поведения</li>
                        <li>• Прозрачная система наказаний</li>
                        <li>• Процедуры сообщения о буллинге</li>
                        <li>• Защита свидетелей и жертв</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Обучение персонала:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Распознавание признаков буллинга</li>
                        <li>• Методы вмешательства</li>
                        <li>• Работа с жертвами и агрессорами</li>
                        <li>• Создание безопасной атмосферы в классе</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Образовательные программы:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Уроки о буллинге и его последствиях</li>
                        <li>• Развитие эмоционального интеллекта</li>
                        <li>• Тренинги по разрешению конфликтов</li>
                        <li>• Программы развития социальных навыков</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={24} />
                    Создание позитивной школьной культуры
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Инклюзивная среда:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Уважение к различиям</li>
                        <li>• Празднование многообразия</li>
                        <li>• Включение всех учеников</li>
                        <li>• Командная работа</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Позитивное подкрепление:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Поощрение доброты</li>
                        <li>• Признание помощи другим</li>
                        <li>• Награды за инклюзивность</li>
                        <li>• Ролевые модели</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button asChild variant="outline" className="w-full">
                <Link to="/teachers">
                  Подробное руководство для учителей
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Роль сообщества</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Globe" className="text-primary" size={24} />
                    Вовлечение сообщества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <div>
                        <p className="font-semibold">Родительские комитеты</p>
                        <p className="text-sm text-muted-foreground">
                          Создание групп поддержки, организация мероприятий, просветительская работа
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <div>
                        <p className="font-semibold">Молодежные инициативы</p>
                        <p className="text-sm text-muted-foreground">
                          Студенческие советы, волонтерские программы, кампании против буллинга
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <div>
                        <p className="font-semibold">Местные организации</p>
                        <p className="text-sm text-muted-foreground">
                          Спортивные клубы, творческие студии, центры досуга — создание позитивной среды
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Circle" size={8} className="text-primary mt-2" />
                      <div>
                        <p className="font-semibold">Медиа и просвещение</p>
                        <p className="text-sm text-muted-foreground">
                          Информационные кампании, социальная реклама, образовательные материалы
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Цифровая безопасность</h2>

              <Card className="hover-scale border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Smartphone" className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Профилактика кибербуллинга</CardTitle>
                      <CardDescription>Безопасность в интернете</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Для родителей:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Мониторинг онлайн-активности</li>
                        <li>• Настройки конфиденциальности</li>
                        <li>• Обучение цифровой грамотности</li>
                        <li>• Правила использования устройств</li>
                        <li>• Открытый диалог об онлайн-опыте</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Для детей:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Не делиться личной информацией</li>
                        <li>• Блокировать и сообщать о буллинге</li>
                        <li>• Сохранять доказательства</li>
                        <li>• Думать перед публикацией</li>
                        <li>• Быть добрым онлайн</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-primary" size={24} />
                  Ключевые принципы эффективной профилактики
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Проактивность</p>
                        <p className="text-sm text-muted-foreground">
                          Не ждать проблем, создавать позитивную среду заранее
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Последовательность</p>
                        <p className="text-sm text-muted-foreground">
                          Единые правила и их постоянное применение
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Сотрудничество</p>
                        <p className="text-sm text-muted-foreground">
                          Совместная работа семьи, школы и сообщества
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Образование</p>
                        <p className="text-sm text-muted-foreground">
                          Постоянное обучение всех участников процесса
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Эмпатия</p>
                        <p className="text-sm text-muted-foreground">
                          Развитие понимания и сострадания к другим
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Мониторинг</p>
                        <p className="text-sm text-muted-foreground">
                          Регулярная оценка эффективности мер
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Профилактика буллинга — это инвестиция в безопасное будущее наших детей. 
                Каждое действие, каждый разговор, каждый пример доброты имеют значение.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/parents-guide">
                    <Icon name="Users" className="mr-2" size={18} />
                    Руководство для родителей
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/teachers">
                    <Icon name="BookOpen" className="mr-2" size={18} />
                    Для учителей
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
