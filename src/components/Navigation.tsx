import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Безопасная среда
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>О буллинге</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/types"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Виды буллинга</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Физический, словесный, кибербуллинг
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/signs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Признаки буллинга</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Как распознать травлю
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/consequences"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Последствия</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Влияние буллинга на жизнь
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Подросткам</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/help"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Как получить помощь</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Шаги к безопасности
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/stories"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Истории преодоления</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Реальные истории силы
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/resources"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Ресурсы помощи</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Горячие линии и контакты
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Родителям</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/parents-guide"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Руководство для родителей</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Как помочь ребенку
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/prevention"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Профилактика</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Предотвращение буллинга
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/teachers" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                    Учителям
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild>
              <Link to="/chat">
                <Icon name="MessageCircle" className="mr-2" size={18} />
                Чат поддержки
              </Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                  Главная
                </Link>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">О буллинге</p>
                  <Link to="/types" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Виды буллинга
                  </Link>
                  <Link to="/signs" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Признаки
                  </Link>
                  <Link to="/consequences" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Последствия
                  </Link>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Подросткам</p>
                  <Link to="/help" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Как получить помощь
                  </Link>
                  <Link to="/stories" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Истории преодоления
                  </Link>
                  <Link to="/resources" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Ресурсы помощи
                  </Link>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Взрослым</p>
                  <Link to="/parents-guide" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Родителям
                  </Link>
                  <Link to="/prevention" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Профилактика
                  </Link>
                  <Link to="/teachers" onClick={() => setIsOpen(false)} className="block py-2 pl-4">
                    Учителям
                  </Link>
                </div>

                <Link to="/chat" onClick={() => setIsOpen(false)} className="block py-2 font-semibold text-primary">
                  Чат поддержки
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2">
                  О проекте
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2">
                  Контакты
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
