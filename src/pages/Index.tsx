import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Puppy {
  id: number;
  name: string;
  breed: string;
  age: string;
  image: string;
  price: string;
  description: string;
}

const puppies: Puppy[] = [
  {
    id: 1,
    name: 'Рекс',
    breed: 'Немецкая овчарка',
    age: '3 месяца',
    image: 'https://cdn.poehali.dev/projects/49c1d1fa-e315-4c90-ad9d-4216088f5094/files/ffbe17a6-2509-465a-83aa-3c4c71c295c5.jpg',
    price: '45 000 ₽',
    description: 'Активный и умный щенок с отличной родословной'
  },
  {
    id: 2,
    name: 'Бади',
    breed: 'Золотистый ретривер',
    age: '2 месяца',
    image: 'https://cdn.poehali.dev/projects/49c1d1fa-e315-4c90-ad9d-4216088f5094/files/b443c694-95f1-4eae-bc35-21bee11e189f.jpg',
    price: '40 000 ₽',
    description: 'Дружелюбный и игривый компаньон для всей семьи'
  },
  {
    id: 3,
    name: 'Лаки',
    breed: 'Лабрадор',
    age: '4 месяца',
    image: 'https://cdn.poehali.dev/projects/49c1d1fa-e315-4c90-ad9d-4216088f5094/files/7e5e1716-c1c1-4fa7-926f-3e44f5d22ed1.jpg',
    price: '38 000 ₽',
    description: 'Обучаемый и преданный друг с прекрасным характером'
  }
];

export default function Index() {
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо! Ваша заявка на просмотр ${selectedPuppy?.name} принята. Мы свяжемся с вами в ближайшее время!`);
    setIsBookingOpen(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-2xl">
                🐾
              </div>
              <span className="text-2xl font-bold text-primary">АРТ МОРИС</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection('main')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => setActiveSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
                О клубе
              </button>
              <button onClick={() => setActiveSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => setActiveSection('gallery')} className="text-foreground hover:text-primary transition-colors font-medium">
                Галерея
              </button>
              <button onClick={() => setActiveSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'main' && (
        <>
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Премиум Щенки
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                  Выберите верного друга из питомника с многолетней историей
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Heart" size={20} className="mr-2" />
                    Смотреть щенков
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 rounded-full border-2 hover:bg-accent/10">
                    <Icon name="Award" size={20} className="mr-2" />
                    Наши награды
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Доступные щенки</h2>
                <p className="text-muted-foreground text-lg">Выберите своего будущего друга</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {puppies.map((puppy, index) => (
                  <Card 
                    key={puppy.id} 
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden group">
                      <img 
                        src={puppy.image} 
                        alt={puppy.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                        {puppy.price}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        {puppy.name}
                        <span className="text-primary">🐕</span>
                      </CardTitle>
                      <CardDescription className="text-base">{puppy.breed}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span>{puppy.age}</span>
                        </div>
                        <p className="text-sm text-foreground/80">{puppy.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Dialog open={isBookingOpen && selectedPuppy?.id === puppy.id} onOpenChange={(open) => {
                        setIsBookingOpen(open);
                        if (open) setSelectedPuppy(puppy);
                      }}>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full">
                            <Icon name="CalendarCheck" size={18} className="mr-2" />
                            Записаться
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Запись на просмотр</DialogTitle>
                            <DialogDescription>
                              Заполните форму и мы свяжемся с вами для согласования времени
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleBookingSubmit} className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Ваше имя</Label>
                              <Input 
                                id="name" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                placeholder="Иван Иванов"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Телефон</Label>
                              <Input 
                                id="phone" 
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                placeholder="+7 (999) 123-45-67"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                placeholder="ivan@example.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="message">Комментарий</Label>
                              <Textarea 
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                placeholder="Желаемая дата и время..."
                                rows={3}
                              />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                                Отправить заявку
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" className="rounded-full">
                        <Icon name="Info" size={18} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: 'Award', title: 'Родословная', desc: 'Все щенки с документами РКФ' },
                    { icon: 'Heart', title: 'Здоровье', desc: 'Ветеринарный паспорт и прививки' },
                    { icon: 'Users', title: 'Поддержка', desc: 'Консультации на протяжении всей жизни' },
                    { icon: 'Home', title: 'Социализация', desc: 'Щенки растут в семейной атмосфере' }
                  ].map((item, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name={item.icon as any} size={24} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <CardDescription>{item.desc}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'about' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-5xl font-bold mb-8 text-center">О нашем клубе</h2>
              <Card className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    АРТ МОРИС — это семейный питомник с более чем 15-летней историей. Мы специализируемся на разведении немецких овчарок, лабрадоров и золотистых ретриверов.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Наши собаки — чемпионы российских и международных выставок. Мы уделяем особое внимание здоровью, характеру и социализации каждого щенка.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">лет опыта</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="text-3xl font-bold text-secondary">200+</div>
                      <div className="text-sm text-muted-foreground">счастливых семей</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-3xl font-bold text-accent">50+</div>
                      <div className="text-sm text-muted-foreground">наград</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'services' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-5xl font-bold mb-12 text-center">Наши услуги</h2>
              <div className="grid gap-6">
                {[
                  { title: 'Продажа щенков', desc: 'Породистые щенки с документами РКФ и родословной', price: 'от 35 000 ₽' },
                  { title: 'Дрессировка', desc: 'Индивидуальные и групповые занятия с кинологом', price: 'от 2 000 ₽' },
                  { title: 'Груминг', desc: 'Профессиональный уход и стрижка', price: 'от 1 500 ₽' },
                  { title: 'Передержка', desc: 'Комфортные условия проживания на время отпуска', price: 'от 800 ₽/день' },
                  { title: 'Ветеринарные услуги', desc: 'Консультации, прививки, чипирование', price: 'от 500 ₽' }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.desc}</CardDescription>
                        </div>
                        <div className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                          {service.price}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto animate-fade-in">
              <h2 className="text-5xl font-bold mb-12 text-center">Галерея</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {puppies.map((puppy) => (
                  <div key={puppy.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <img 
                      src={puppy.image} 
                      alt={puppy.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-bold text-lg">{puppy.name}</h3>
                        <p className="text-sm">{puppy.breed}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Питомниковая, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@artmoris.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Ежедневно с 10:00 до 20:00</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">АРТ МОРИС © 2024</p>
          <p className="text-sm opacity-80">Профессиональное разведение с любовью</p>
        </div>
      </footer>
    </div>
  );
}