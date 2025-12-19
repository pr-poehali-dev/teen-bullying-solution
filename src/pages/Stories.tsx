import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Stories() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Icon name="BookHeart" size={16} className="mr-2" />
              Вдохновение и надежда
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Истории преодоления</h1>
            <p className="text-xl text-muted-foreground">
              Реальные истории людей, которые справились с буллингом и вернулись к полноценной жизни
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/f42c9696-5a72-49c6-a176-edb523440947/files/ee2c34ac-5674-4b1b-b1e2-213c2c9fc545.jpg"
                    alt="История Анны"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">История Анны, 17 лет</CardTitle>
                    <CardDescription className="text-base">
                      "Я думала, что никогда не смогу снова доверять людям"
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    В 14 лет я столкнулась с буллингом в школе. Началось все с насмешек над моей внешностью, 
                    а затем перешло в социальные сети. Группа одноклассниц создала фейковую страницу от моего имени 
                    и публиковала унизительные посты. Я боялась идти в школу, перестала есть, замкнулась в себе.
                  </p>
                  <p>
                    Переломный момент наступил, когда мама заметила, что я плачу по ночам. Она не осуждала, 
                    а просто выслушала. Мы вместе пошли к школьному психологу, затем обратились к классному руководителю. 
                    Оказалось, что я была не единственной жертвой этих девочек.
                  </p>
                  <p>
                    Восстановление заняло время. Я начала ходить на психотерапию, нашла новое хобби — рисование, 
                    которое помогало выражать эмоции. Постепенно я познакомилась с новыми друзьями в художественной студии. 
                    Они приняли меня такой, какая я есть.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Что помогло Анне:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Поддержка семьи и открытый разговор с мамой</li>
                    <li>• Профессиональная психологическая помощь</li>
                    <li>• Новое увлечение, которое стало способом самовыражения</li>
                    <li>• Поиск поддерживающего сообщества</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="italic text-muted-foreground">
                    "Сейчас мне 17. Я поступила в художественный колледж, у меня есть настоящие друзья, 
                    и я даже веду блог о борьбе с буллингом. Тот опыт сделал меня сильнее. 
                    Если ты проходишь через это — знай, что это временно, и ты обязательно справишься."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/f42c9696-5a72-49c6-a176-edb523440947/files/8cf72fbd-58c0-43ad-a44b-59218a0f245e.jpg"
                    alt="История Максима"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">История Максима, 16 лет</CardTitle>
                    <CardDescription className="text-base">
                      "Спорт спас меня, но главное — я научился просить о помощи"
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    С 5 класса меня травили из-за того, что я был худым и носил очки. Старшеклассники отбирали деньги, 
                    толкали, обзывали. Я пытался не показывать, что мне больно, терпел. Думал, что если расскажу родителям, 
                    станет только хуже — назовут "стукачом".
                  </p>
                  <p>
                    Ситуация дошла до того, что меня избили после школы. Пришлось рассказать родителям правду. 
                    Папа хотел разобраться с обидчиками сам, но мама настояла на обращении к директору. 
                    Школа провела расследование, пригласили психолога, родители обидчиков тоже были вовлечены.
                  </p>
                  <p>
                    Я начал заниматься боксом — не для того чтобы драться, а чтобы чувствовать себя увереннее. 
                    Тренер стал для меня наставником. В зале я нашел друзей, которые прошли через похожее. 
                    Мы поддерживали друг друга. Постепенно я научился постоять за себя словами, а не кулаками.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Что помогло Максиму:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Обращение к родителям и школьной администрации</li>
                    <li>• Занятия спортом для повышения уверенности</li>
                    <li>• Наставничество тренера</li>
                    <li>• Группа поддержки сверстников</li>
                    <li>• Развитие навыков самозащиты (психологической)</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="italic text-muted-foreground">
                    "Теперь я понимаю: просить о помощи — не слабость, а смелость. Я продолжаю заниматься боксом, 
                    выступаю на соревнованиях. А тех ребят, которые меня травили, встречаю иногда — они даже извинились. 
                    Оказалось, у них были свои проблемы в семье."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/f42c9696-5a72-49c6-a176-edb523440947/files/6eb0ff7d-e89f-4f16-a0bf-36298ebbcf25.jpg"
                    alt="История Софии"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">История Софии, 15 лет</CardTitle>
                    <CardDescription className="text-base">
                      "Я нашла свой голос и помогаю другим"
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Когда я перешла в новую школу в 7 классе, не сразу влилась в коллектив. Девочки в классе 
                    объединились против меня — исключали из общих чатов, игнорировали, распускали слухи. 
                    Это был социальный буллинг, без криков и драк, но не менее болезненный.
                  </p>
                  <p>
                    Полгода я пыталась завоевать их дружбу, меняла себя, старалась им понравиться. 
                    Но ничего не помогало. Я начала верить, что со мной что-то не так. Успеваемость упала, 
                    я стала избегать школьных мероприятий. Учительница по литературе заметила и предложила поговорить.
                  </p>
                  <p>
                    Она направила меня к школьному психологу. Там я поняла, что проблема не во мне, а в токсичной 
                    групповой динамике. Мы с психологом разработали стратегию: я перестала пытаться нравиться всем 
                    и начала искать единомышленников. Нашла их в школьном театральном кружке. 
                    Там меня приняли и оценили за мои таланты.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Что помогло Софии:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Внимательность учителя, который заметил проблему</li>
                    <li>• Работа со школьным психологом</li>
                    <li>• Понимание, что проблема не в жертве</li>
                    <li>• Поиск своего сообщества по интересам</li>
                    <li>• Фокус на своих талантах и увлечениях</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="italic text-muted-foreground">
                    "Сейчас я капитан театральной труппы и волонтер программы поддержки жертв буллинга. 
                    Я использую свой опыт, чтобы помогать другим. Театр научил меня, что у каждого есть своя 
                    роль и ценность. Не нужно подстраиваться под других — нужно найти тех, кто примет тебя настоящей."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">История Дмитрия, 18 лет</CardTitle>
                <CardDescription className="text-base">
                  "Кибербуллинг чуть не сломал меня, но я стал сильнее"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    В 15 лет я пережил кибербуллинг. Кто-то взломал мою страницу в соцсети и разослал всем 
                    моим контактам компрометирующие сообщения. Затем в школьном чате начались издевательства. 
                    Я удалил все аккаунты, но скриншоты уже расходились по школе.
                  </p>
                  <p>
                    Я впал в депрессию, думал о суициде. Родители забрали телефон и настояли на консультации 
                    с психотерапевтом. Я сопротивлялся, но это спасло мне жизнь. Терапевт помог понять, 
                    что произошедшее не определяет меня как личность.
                  </p>
                  <p>
                    Мы с родителями обратились в полицию по поводу взлома. Оказалось, это был одноклассник, 
                    завидовавший моим успехам в программировании. Его привлекли к ответственности. 
                    Я перешел на домашнее обучение на год, сфокусировался на IT, начал участвовать в онлайн-хакатонах.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Что помогло Дмитрию:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Вмешательство родителей в критический момент</li>
                    <li>• Профессиональная психотерапия</li>
                    <li>• Юридическая защита прав</li>
                    <li>• Временная смена образовательной среды</li>
                    <li>• Переключение на позитивную деятельность</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="italic text-muted-foreground">
                    "Сейчас мне 18, я поступил в технический университет на факультет кибербезопасности. 
                    Тот опыт направил мою жизнь. Я хочу защищать людей от киберпреступлений и помогать 
                    жертвам кибербуллинга. Если бы не поддержка семьи и специалистов, меня могло бы не быть здесь."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/30 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={24} />
                  Общие уроки этих историй
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      Что работает:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Обращение за помощью к взрослым</li>
                      <li>• Профессиональная психологическая поддержка</li>
                      <li>• Поиск поддерживающего сообщества</li>
                      <li>• Развитие новых навыков и увлечений</li>
                      <li>• Фокус на своих сильных сторонах</li>
                      <li>• Время и терпение</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Icon name="AlertCircle" className="text-primary" size={20} />
                      Важно помнить:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Это не твоя вина</li>
                      <li>• Просить о помощи — это сила</li>
                      <li>• Восстановление требует времени</li>
                      <li>• У тебя есть ценность и таланты</li>
                      <li>• Ситуация временная</li>
                      <li>• Ты можешь стать сильнее</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Все эти истории реальны. Каждый из этих людей прошел через боль, но нашел силы двигаться дальше. 
                Если они смогли, сможешь и ты. Твоя история еще пишется, и у нее может быть счастливый финал.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/help">
                    <Icon name="LifeBuoy" className="mr-2" size={18} />
                    Получить помощь
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/chat">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Поделиться своей историей
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
