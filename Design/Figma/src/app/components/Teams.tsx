import { Users, Trophy, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Teams() {
  const teams = [
    {
      name: "Open (Herre/Mixed)",
      level: "Konkurrence",
      description: "Vores konkurrencehold deltager i nationale turneringer og DM. Træning 2-3 gange ugentligt med fokus på strategi og fysisk form.",
      schedule: "Tirsdag & Torsdag 19:00-21:00, Søndag 10:00-12:00",
      image: "https://images.unsplash.com/photo-1715802168605-4bfa24acbdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRpbWF0ZSUyMGZyaXNiZWUlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDM1NDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Women (Dame)",
      level: "Konkurrence",
      description: "Dametholdet er dedikeret til at udvikle kvindelige spillere og konkurrere på højeste niveau i Danmark.",
      schedule: "Mandag & Onsdag 18:30-20:30",
      image: "https://images.unsplash.com/photo-1723917964127-41491fd354da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmlzYmVlJTIwdGVhbSUyMHNwb3J0JTIwcGxheWVyc3xlbnwxfHx8fDE3NzQzNTQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Recreational (Fritid)",
      level: "Begynder/Motionist",
      description: "Perfekt for dig der vil lære spillet eller bare hygge med det. Ingen forpligtelser, fokus på sjov og fællesskab.",
      schedule: "Onsdag 19:00-21:00",
      image: "https://images.unsplash.com/photo-1767406657699-9f3e01a48ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwdHJhaW5pbmclMjBmaWVsZHxlbnwxfHx8fDE3NzQzNTQ0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "U20 (Ungdom)",
      level: "Junior",
      description: "For unge spillere under 20 år. Vi udvikler fremtidens talenter med fokus på teknik, taktik og teamwork.",
      schedule: "Tirsdag 17:00-18:30, Lørdag 14:00-16:00",
      image: "https://images.unsplash.com/photo-1773949092693-280b7eadab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0Mjc5NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "DM Guld 2024",
      description: "Open holdet vandt DM i mixed ultimate",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Nordjyllandsmestre",
      description: "Regionsmestre 3 år i træk",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "80+ Medlemmer",
      description: "Aktive spillere på tværs af alle hold",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vores Hold</h1>
          <p className="text-xl max-w-3xl">
            Aalborg Ultimate tilbyder hold for alle niveauer - fra nybegynder til elite. Find det hold der passer til dig!
          </p>
        </div>
      </div>

      {/* Teams Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-3">
                  {team.level}
                </div>
                <h2 className="text-3xl font-bold mb-4">{team.name}</h2>
                <p className="text-gray-700 mb-4">{team.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Træningstider:</p>
                  <p className="text-gray-700">{team.schedule}</p>
                </div>
              </div>
              <div className={`h-80 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <ImageWithFallback
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Vores Resultater</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Klar til at Blive en Del af Holdet?</h2>
          <p className="text-xl mb-8">
            Kom til en gratis prøvetræning og mød dit nye hold
          </p>
          <a
            href="/bliv-medlem"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg inline-block transition-colors"
          >
            Tilmeld Dig Nu
          </a>
        </div>
      </div>
    </div>
  );
}
