import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Consequences() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="AlertCircle" size={16} className="mr-2" />
              Понимание проблемы
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Последствия буллинга</h1>
            <p className="text-xl text-muted-foreground">
              Как травля влияет на психологическое, социальное и физическое здоровье
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Brain" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Психологические последствия</CardTitle>
                    <CardDescription>Влияние на ментальное здоровье</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Буллинг оказывает глубокое воздействие на психическое состояние, которое может сохраняться годами.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Краткосрочные:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Тревожность и стресс</li>
                      <li>• Депрессия и апатия</li>
                      <li>• Низкая самооценка</li>
                      <li>• Страхи и фобии</li>
                      <li>• Нарушения сна</li>
                      <li>• Проблемы с концентрацией</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Долгосрочные:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Посттравматическое стрессовое расстройство</li>
                      <li>• Хроническая депрессия</li>
                      <li>• Тревожные расстройства</li>
                      <li>• Суицидальные мысли</li>
                      <li>• Проблемы с доверием</li>
                      <li>• Трудности в отношениях</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Социальные последствия</CardTitle>
                    <CardDescription>Влияние на отношения и коммуникацию</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Травля серьезно нарушает способность устанавливать и поддерживать здоровые социальные связи.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Социальная изоляция</strong>
                      <p className="text-sm text-muted-foreground">Трудности в общении, избегание социальных ситуаций</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Проблемы с доверием</strong>
                      <p className="text-sm text-muted-foreground">Сложность в построении близких отношений</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Трудности в коллективе</strong>
                      <p className="text-sm text-muted-foreground">Проблемы адаптации в новых группах</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Избегающее поведение</strong>
                      <p className="text-sm text-muted-foreground">Отказ от общественной активности</p>
                    </div>
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
                    <CardTitle className="text-2xl">Академические последствия</CardTitle>
                    <CardDescription>Влияние на обучение и карьеру</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Буллинг существенно влияет на учебный процесс и будущие профессиональные возможности.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Снижение успеваемости</strong>
                      <p className="text-sm text-muted-foreground">Трудности с концентрацией и усвоением материала</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Прогулы и пропуски</strong>
                      <p className="text-sm text-muted-foreground">Избегание школы из-за страха</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Потеря мотивации</strong>
                      <p className="text-sm text-muted-foreground">Нежелание участвовать в учебной деятельности</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <div>
                      <strong>Ограниченные возможности</strong>
                      <p className="text-sm text-muted-foreground">Влияние на выбор профессии и карьерный рост</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Activity" className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Физические последствия</CardTitle>
                    <CardDescription>Влияние на физическое здоровье</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Психологический стресс от буллинга проявляется в физических симптомах и заболеваниях.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Головные боли и мигрени</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Проблемы с желудком и пищеварением</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Нарушения сна и хроническая усталость</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Ослабленная иммунная система</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Расстройства пищевого поведения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" size={8} className="text-primary mt-2" />
                    <span className="text-muted-foreground">Самоповреждающее поведение</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={24} />
                  Путь к восстановлению
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Хотя последствия буллинга серьезны, важно знать: восстановление возможно. 
                  С правильной поддержкой и профессиональной помощью можно преодолеть травму и вернуться к полноценной жизни.
                </p>
                <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold">Шаги к восстановлению:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Признание проблемы и обращение за помощью</li>
                    <li>• Работа с психологом или психотерапевтом</li>
                    <li>• Поддержка семьи и близких людей</li>
                    <li>• Постепенное восстановление уверенности в себе</li>
                    <li>• Развитие новых навыков и интересов</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link to="/help">
                      <Icon name="LifeBuoy" className="mr-2" size={18} />
                      Получить помощь
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/stories">
                      <Icon name="BookHeart" className="mr-2" size={18} />
                      Истории преодоления
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
