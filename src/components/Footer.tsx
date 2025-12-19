import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-xl font-bold">Безопасная среда</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Платформа поддержки подростков в борьбе с буллингом
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">О буллинге</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/types" className="text-muted-foreground hover:text-primary transition-colors">
                  Виды буллинга
                </Link>
              </li>
              <li>
                <Link to="/signs" className="text-muted-foreground hover:text-primary transition-colors">
                  Признаки
                </Link>
              </li>
              <li>
                <Link to="/consequences" className="text-muted-foreground hover:text-primary transition-colors">
                  Последствия
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Как получить помощь
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Истории преодоления
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Ресурсы помощи
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-muted-foreground hover:text-primary transition-colors">
                  Чат поддержки
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Экстренная помощь</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Детский телефон доверия</p>
                <p className="text-xl font-bold text-primary">8-800-2000-122</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Служба экстренной помощи</p>
                <p className="text-xl font-bold text-primary">051</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                О проекте
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Помни: ты не один, и это не твоя вина. Помощь всегда рядом.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
