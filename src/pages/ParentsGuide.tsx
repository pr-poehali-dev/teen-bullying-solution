import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ParentsGuide() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Users" size={16} className="mr-2" />
              Для родителей
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Руководство для родителей</h1>
            <p className="text-xl text-muted-foreground">
              Как помочь ребенку, столкнувшемуся с буллингом: от разговора до действий
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <p className="text-lg font-medium text-center">
                  Ваша поддержка и правильная реакция могут стать решающим фактором 
                  в преодолении буллинга и восстановлении ребенка.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Как распознать буллинг</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Eye" className="text-primary" size={24} />
                    Тревожные признаки
                  </CardTitle>
                  <CardDescription>На что обращать внимание</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Поведенческие изменения:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Нежелание идти в школу, частые прогулы</li>
                        <li>• Замкнутость, избегание разговоров о школе</li>
                        <li>• Потеря интереса к любимым занятиям</li>
                        <li>• Резкие перепады настроения</li>
                        <li>• Нарушения сна и аппетита</li>
                        <li>• Ночные кошмары</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Физические признаки:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Необъяснимые синяки и царапины</li>
                        <li>• Поврежденная одежда или вещи</li>
                        <li>• Частые жалобы на боли</li>
                        <li>• Психосоматические симптомы</li>
                        <li>• Снижение успеваемости</li>
                        <li>• Частые "потери" денег или вещей</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-accent/30 rounded-lg">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/signs">
                        Подробнее о признаках буллинга
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Как начать разговор</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                    Создайте безопасное пространство
                  </CardTitle>
                  <CardDescription>Правила эффективного общения</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Выберите правильное время и место</h4>
                        <p className="text-sm text-muted-foreground">
                          Найдите спокойную обстановку, где вас никто не прервет. Не начинайте разговор 
                          второпях или в присутствии других детей.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Начните мягко</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Используйте открытые вопросы вместо прямых обвинений:
                        </p>
                        <div className="bg-accent/30 rounded p-3 text-sm space-y-1">
                          <p className="text-muted-foreground">"Я заметил, что ты в последнее время грустишь. Хочешь поговорить?"</p>
                          <p className="text-muted-foreground">"Как дела в школе? С ребятами все хорошо?"</p>
                          <p className="text-muted-foreground">"Ты можешь мне доверять. Если что-то беспокоит, я здесь, чтобы помочь"</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Слушайте активно</h4>
                        <p className="text-sm text-muted-foreground">
                          Дайте ребенку высказаться до конца, не перебивайте. Покажите, что вы слышите 
                          и понимаете: кивайте, поддерживайте зрительный контакт, повторяйте ключевые слова.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Не осуждайте и не обвиняйте</h4>
                        <p className="text-sm text-muted-foreground">
                          Избегайте фраз типа "Почему ты мне раньше не сказал?" или "Ты должен был дать сдачи". 
                          Вместо этого: "Спасибо, что доверился мне" и "Это не твоя вина".
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Подтвердите чувства ребенка</h4>
                        <p className="text-sm text-muted-foreground">
                          "Я понимаю, как тебе сейчас тяжело", "Твои чувства абсолютно естественны", 
                          "Любой на твоем месте чувствовал бы то же самое".
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Что делать дальше</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    План действий
                  </CardTitle>
                  <CardDescription>Пошаговая стратегия</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="FileText" className="text-primary" size={20} />
                        Шаг 1: Документируйте
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                        <li>• Запишите все детали: даты, места, имена, свидетели</li>
                        <li>• Сохраните доказательства: скриншоты, сообщения, фото повреждений</li>
                        <li>• Фиксируйте каждый новый инцидент</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Users" className="text-primary" size={20} />
                        Шаг 2: Свяжитесь со школой
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                        <li>• Назначьте встречу с классным руководителем</li>
                        <li>• При необходимости обратитесь к директору</li>
                        <li>• Запросите встречу со школьным психологом</li>
                        <li>• Требуйте письменного подтверждения обращения</li>
                        <li>• Узнайте о политике школы по борьбе с буллингом</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Heart" className="text-primary" size={20} />
                        Шаг 3: Обеспечьте психологическую поддержку
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                        <li>• Запишитесь к детскому психологу</li>
                        <li>• Рассмотрите семейную терапию</li>
                        <li>• Обратитесь на горячую линию поддержки</li>
                        <li>• Создайте поддерживающую атмосферу дома</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Shield" className="text-primary" size={20} />
                        Шаг 4: Обеспечьте безопасность
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                        <li>• При физической угрозе обратитесь в полицию</li>
                        <li>• Рассмотрите временную смену маршрута в школу</li>
                        <li>• Организуйте сопровождение ребенка</li>
                        <li>• При кибербуллинге: заблокируйте агрессоров, сохраните доказательства</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Чего избегать</h2>

              <Card className="hover-scale border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="AlertTriangle" className="text-destructive" size={24} />
                    Типичные ошибки родителей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Не преуменьшайте проблему</p>
                        <p className="text-sm text-muted-foreground">
                          "Это просто дети дразнятся" или "В мое время было хуже" — такие фразы обесценивают 
                          переживания ребенка и разрушают доверие.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Не обвиняйте ребенка</p>
                        <p className="text-sm text-muted-foreground">
                          "Ты наверное сам спровоцировал" или "Почему ты не можешь постоять за себя?" — 
                          буллинг никогда не вина жертвы.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Не действуйте импульсивно</p>
                        <p className="text-sm text-muted-foreground">
                          Не звоните родителям обидчиков, не устраивайте разборки с детьми. 
                          Это может усугубить ситуацию. Действуйте через официальные каналы.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Не советуйте "дать сдачи"</p>
                        <p className="text-sm text-muted-foreground">
                          Насилие порождает насилие. Вместо этого учите ассертивности и безопасным 
                          способам защиты.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Не игнорируйте проблему</p>
                        <p className="text-sm text-muted-foreground">
                          "Само пройдет" — не пройдет. Буллинг требует активного вмешательства взрослых.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Долгосрочная поддержка</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Heart" className="text-primary" size={24} />
                    Как помочь восстановиться
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Эмоциональная поддержка:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Регулярно интересуйтесь самочувствием</li>
                        <li>• Хвалите за сильные стороны</li>
                        <li>• Проводите качественное время вместе</li>
                        <li>• Показывайте безусловную любовь</li>
                        <li>• Будьте терпеливы — восстановление требует времени</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Практическая помощь:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Помогите найти новое хобби или увлечение</li>
                        <li>• Поддержите в развитии талантов</li>
                        <li>• Создайте возможности для новых знакомств</li>
                        <li>• Учите навыкам уверенного поведения</li>
                        <li>• Мониторьте ситуацию в школе</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" size={24} />
                  Профилактика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Даже если ваш ребенок не сталкивался с буллингом, важно создать защитные факторы:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm text-muted-foreground">
                      Поддерживайте открытое общение — ребенок должен знать, что может рассказать вам все
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm text-muted-foreground">
                      Развивайте эмоциональный интеллект и эмпатию
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm text-muted-foreground">
                      Укрепляйте самооценку ребенка
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm text-muted-foreground">
                      Учите постоять за себя безопасными способами
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm text-muted-foreground">
                      Знайте, с кем общается ваш ребенок
                    </span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/prevention">
                    Узнать больше о профилактике
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                Помните: ваша поддержка — самый важный фактор в преодолении буллинга. 
                Вы не одни, есть профессионалы, готовые помочь.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/resources">
                    <Icon name="Phone" className="mr-2" size={18} />
                    Горячие линии помощи
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/teachers">
                    <Icon name="BookOpen" className="mr-2" size={18} />
                    Работа со школой
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
