import { Target, Heart, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: "Spirit of the Game",
      description: "Vi værdsætter fair play og respekt højt. Ultimate frisbee er selvdømmende, hvilket fremmer ansvarlighed og integritet.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Fællesskab",
      description: "Hos os handler det ikke kun om sporten - det handler om at skabe varige venskaber og et stærkt socialt netværk.",
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: "Udvikling",
      description: "Vi støtter alle spillere i deres udvikling, uanset om du er begynder eller erfaren. Der er plads til alle.",
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Excellence",
      description: "Vi stræber efter at være den bedste version af os selv, både på og uden for banen.",
    },
  ];

  const history = [
    {
      year: "2010",
      event: "Klubben blev grundlagt",
      description: "En lille gruppe entusiaster startede Aalborg Ultimate",
    },
    {
      year: "2014",
      event: "Første turnering",
      description: "Vi deltog i vores første nationale turnering",
    },
    {
      year: "2018",
      event: "100 medlemmer",
      description: "Klubben ramte milepælen med 100 aktive medlemmer",
    },
    {
      year: "2026",
      event: "I dag",
      description: "Vi er nu en af de største ultimate frisbee klubber i Nordjylland",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705593697621-84ac9c0c05c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc3BvcnRzJTIwZmllbGR8ZW58MXx8fHwxNzc0MzU0MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Sports Field"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Om Os</h1>
          <p className="text-xl">Lær mere om Aalborg Ultimate Frisbee Klub</p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Vores Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Aalborg Ultimate Frisbee Klub har som mission at promovere ultimate frisbee som en sport for alle. Vi arbejder for at skabe et inkluderende miljø, hvor alle kan udvikle deres færdigheder, have det sjovt og være en del af et fantastisk fællesskab. Vi tror på, at ultimate frisbee er mere end bare en sport - det er en livsstil baseret på respekt, fair play og sammenhold.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Vores Værdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Vores Historie</h2>
        <div className="space-y-8">
          {history.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-20">
                <div className="bg-blue-600 text-white font-bold text-lg py-2 px-4 rounded-lg text-center">
                  {item.year}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What is Ultimate */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad er Ultimate Frisbee?</h2>
              <p className="text-gray-700 mb-4">
                Ultimate frisbee er en holdbaseret sport spillet med en frisbee. To hold på syv spillere kæmper om at score point ved at fange frisbeeen i modstanderens målzone.
              </p>
              <p className="text-gray-700 mb-4">
                Spillet er kendt for sin høje intensitet, strategiske dybde og den unikke "Spirit of the Game" - et koncept hvor spillerne selv dømmer kampen uden eksterne dommere.
              </p>
              <div className="bg-white p-6 rounded-lg mt-6">
                <h3 className="font-bold text-lg mb-3">Grundregler:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 7 spillere på hvert hold</li>
                  <li>• Selvdømmende - ingen dommere</li>
                  <li>• Man må ikke løbe med frisbeeen</li>
                  <li>• Score ved at fange i modstanderens målzone</li>
                  <li>• Først til 15 point vinder</li>
                </ul>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723917964127-41491fd354da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmlzYmVlJTIwdGVhbSUyMHNwb3J0JTIwcGxheWVyc3xlbnwxfHx8fDE3NzQzNTQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ultimate Frisbee Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Aktive Medlemmer</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">16</div>
            <div className="text-gray-600">År i Aalborg</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">Turneringer Årligt</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Passion</div>
          </div>
        </div>
      </div>
    </div>
  );
}
