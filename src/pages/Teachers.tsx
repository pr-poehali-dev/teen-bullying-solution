import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Teachers() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Для педагогов
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Руководство для учителей</h1>
            <p className="text-xl text-muted-foreground">
              Практические инструменты распознавания, предотвращения и реагирования на буллинг
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <p className="text-lg font-medium text-center">
                  Учителя играют ключевую роль в предотвращении и пресечении буллинга. 
                  Ваше внимание, реакция и действия могут изменить жизнь ребенка.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Распознавание буллинга</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Eye" className="text-primary" size={24} />
                    На что обращать внимание
                  </CardTitle>
                  <CardDescription>Признаки в классе и за его пределами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Поведение жертвы:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Изоляция от одноклассников</li>
                        <li>• Снижение успеваемости</li>
                        <li>• Нежелание участвовать в групповых занятиях</li>
                        <li>• Страх отвечать у доски</li>
                        <li>• Частые отсутствия</li>
                        <li>• Видимые следы физического воздействия</li>
                        <li>• Потерянные или поврежденные вещи</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Поведение агрессора:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Доминирующее поведение</li>
                        <li>• Насмешки и унижения других</li>
                        <li>• Физическая агрессия</li>
                        <li>• Формирование групп против кого-то</li>
                        <li>• Отсутствие эмпатии</li>
                        <li>• Манипулятивное поведение</li>
                        <li>• Проблемы с соблюдением правил</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-accent/30 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold mb-2">Важно:</h4>
                    <p className="text-sm text-muted-foreground">
                      Буллинг часто происходит в "серых зонах" — перемены, столовая, туалеты, раздевалки, 
                      дорога в школу. Обращайте внимание не только на уроки, но и на внеурочное взаимодействие.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    Динамика класса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">
                      • Есть ли ученики, которых систематически исключают из групповых активностей?
                    </p>
                    <p className="text-sm">
                      • Наблюдаются ли устойчивые конфликтные пары или группы?
                    </p>
                    <p className="text-sm">
                      • Кто из учеников часто сидит один или избегает определенных одноклассников?
                    </p>
                    <p className="text-sm">
                      • Какова общая атмосфера в классе — поддерживающая или токсичная?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Немедленное вмешательство</h2>

              <Card className="hover-scale border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-primary" size={24} />
                    Что делать при инциденте
                  </CardTitle>
                  <CardDescription>Пошаговый протокол действий</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Немедленно остановите</h4>
                        <p className="text-sm text-muted-foreground">
                          Прервите буллинг сразу, как только заметили. Четко скажите: "Это неприемлемо. Прекратите немедленно."
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Обеспечьте безопасность жертвы</h4>
                        <p className="text-sm text-muted-foreground">
                          Физически отделите участников, убедитесь, что жертва в безопасности. 
                          При необходимости вызовите медработника.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Не проводите разбор при всех</h4>
                        <p className="text-sm text-muted-foreground">
                          Публичное обсуждение может усугубить ситуацию. Отведите участников в сторону. 
                          Поговорите отдельно с жертвой, агрессором и свидетелями.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Документируйте инцидент</h4>
                        <p className="text-sm text-muted-foreground">
                          Запишите дату, время, место, участников, свидетелей, описание произошедшего, 
                          ваши действия. Это важно для последующего разбирательства.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Сообщите администрации</h4>
                        <p className="text-sm text-muted-foreground">
                          Уведомите директора, завуча, школьного психолога согласно протоколу школы. 
                          Свяжитесь с родителями обеих сторон.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        6
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Обеспечьте последующую поддержку</h4>
                        <p className="text-sm text-muted-foreground">
                          Проверяйте состояние жертвы в следующие дни. Обсудите с психологом 
                          необходимость консультаций. Мониторьте ситуацию в классе.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-destructive/10 border-destructive/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="XCircle" className="text-destructive" size={20} />
                    Чего НЕ делать
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-destructive mt-0.5" size={16} />
                      <span className="text-muted-foreground">Не игнорируйте инцидент, даже если он кажется незначительным</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-destructive mt-0.5" size={16} />
                      <span className="text-muted-foreground">Не обвиняйте жертву и не говорите "разберитесь сами"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-destructive mt-0.5" size={16} />
                      <span className="text-muted-foreground">Не заставляйте жертву и агрессора "помириться" сразу</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-destructive mt-0.5" size={16} />
                      <span className="text-muted-foreground">Не минимизируйте проблему словами "это просто дети"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Создание безопасной атмосферы в классе</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Shield" className="text-primary" size={24} />
                    Проактивные стратегии
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Установите четкие правила:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Совместно с классом разработайте кодекс поведения</li>
                        <li>• Определите, что такое уважительное общение</li>
                        <li>• Объясните последствия буллинга</li>
                        <li>• Регулярно напоминайте о правилах</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Моделируйте уважение:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Относитесь ко всем ученикам справедливо и с уважением</li>
                        <li>• Не используйте сарказм или публичное унижение</li>
                        <li>• Показывайте пример разрешения конфликтов</li>
                        <li>• Признавайте свои ошибки</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Поощряйте инклюзивность:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Используйте разные форматы групповой работы</li>
                        <li>• Празднуйте разнообразие и уникальность</li>
                        <li>• Включайте всех в классные активности</li>
                        <li>• Поощряйте взаимопомощь</li>
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Развивайте эмпатию:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Обсуждайте чувства и эмоции</li>
                        <li>• Проводите уроки о буллинге</li>
                        <li>• Используйте ролевые игры</li>
                        <li>• Читайте и обсуждайте истории о преодолении</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="MessageCircle" className="text-primary" size={20} />
                    Открытая коммуникация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Создайте безопасное пространство для обсуждения проблем</p>
                    <p>• Регулярные классные часы о важных темах</p>
                    <p>• Анонимный ящик для сообщений о буллинге</p>
                    <p>• Индивидуальные беседы с учениками</p>
                    <p>• Поощряйте учеников сообщать о буллинге</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Работа с агрессором</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="UserX" className="text-primary" size={20} />
                    Понимание причин агрессии
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Агрессоры тоже нуждаются в помощи. Часто за буллингом стоят:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Проблемы в семье или собственный опыт насилия</li>
                    <li>• Низкая самооценка, компенсируемая доминированием</li>
                    <li>• Недостаток социальных навыков</li>
                    <li>• Желание получить статус в группе</li>
                    <li>• Отсутствие эмпатии и понимания последствий</li>
                  </ul>
                  <div className="bg-accent/30 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold mb-2 text-sm">Подход:</h4>
                    <p className="text-sm text-muted-foreground">
                      Четкие последствия + понимание причин + обучение альтернативному поведению + 
                      при необходимости работа с психологом
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Сотрудничество с родителями</h2>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    Эффективное взаимодействие
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">При разговоре с родителями жертвы:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Выразите сочувствие и поддержку</li>
                        <li>• Объясните предпринятые шаги</li>
                        <li>• Обсудите план поддержки</li>
                        <li>• Регулярно информируйте о ситуации</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">При разговоре с родителями агрессора:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Излагайте факты без обвинений</li>
                        <li>• Объясните серьезность ситуации</li>
                        <li>• Предложите совместный план действий</li>
                        <li>• Рекомендуйте консультацию психолога</li>
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
                  Помните
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-muted-foreground">
                  <p>• Ваша реакция критически важна — дети наблюдают и учатся</p>
                  <p>• Буллинг никогда не "проходит сам" — требуется вмешательство</p>
                  <p>• Поддерживайте жертву, работайте с агрессором, вовлекайте свидетелей</p>
                  <p>• Документируйте все инциденты и действия</p>
                  <p>• Заботьтесь о своем эмоциональном состоянии — работа с буллингом тяжела</p>
                  <p>• Вы не одни — используйте ресурсы школы и профессиональную помощь</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ваша роль как учителя неоценима в создании безопасной образовательной среды. 
                Каждое ваше действие против буллинга защищает детей и формирует культуру уважения.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/prevention">
                    <Icon name="Shield" className="mr-2" size={18} />
                    Стратегии профилактики
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
