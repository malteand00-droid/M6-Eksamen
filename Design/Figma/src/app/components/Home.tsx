import { Link } from "react-router";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Fællesskab",
      description: "Vær en del af et aktivt og socialt fællesskab med spillere i alle aldre og niveauer",
    },
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Regelmæssig Træning",
      description: "Træning to gange om ugen for både begyndere og erfarne spillere",
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: "Turneringer",
      description: "Deltag i lokale og internationale turneringer med klubben",
    },
  ];

  const upcomingEvents = [
    {
      date: "29 Mar",
      title: "Nybegynder Træning",
      description: "Særlig træning for nye spillere",
    },
    {
      date: "5 Apr",
      title: "Forårsturnering",
      description: "Lokal turnering i Aalborg",
    },
    {
      date: "12 Apr",
      title: "Social Event",
      description: "Grillaften på klubhuset",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1715802168605-4bfa24acbdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRpbWF0ZSUyMGZyaXNiZWUlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDM1NDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ultimate Frisbee Action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Aalborg Ultimate Frisbee Klub
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Danmarks mest dynamiske ultimate frisbee fællesskab
          </p>
          <Link
            to="/bliv-medlem"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            Bliv Medlem <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Hvorfor Vælge Os?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Preview Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Om Aalborg Ultimate</h2>
              <p className="text-gray-700 mb-4">
                Aalborg Ultimate Frisbee Klub blev grundlagt i 2010 og har siden udviklet sig til at være en af Nordjyllands førende ultimate frisbee klubber. Vi tilbyder træning for alle niveauer, fra begyndere til erfarne spillere.
              </p>
              <p className="text-gray-700 mb-6">
                Ultimate frisbee er en holdbaseret sport, der kombinerer hastighed, strategi og atletik. Sporten er kendt for sin "Spirit of the Game" - et unikt aspekt hvor fair play og respekt for modstanderen er i centrum.
              </p>
              <Link
                to="/om-klubben"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
              >
                Læs mere om os <ArrowRight size={20} />
              </Link>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723917964127-41491fd354da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmlzYmVlJTIwdGVhbSUyMHNwb3J0JTIwcGxheWVyc3xlbnwxfHx8fDE3NzQzNTQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Players"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Kommende Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 font-bold text-lg mb-2">
                {event.date}
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Klar til at Komme i Gang?</h2>
          <p className="text-xl mb-8">
            Kom til en gratis prøvetræning og oplev ultimate frisbee
          </p>
          <Link
            to="/kontakt"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            Kontakt Os <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}