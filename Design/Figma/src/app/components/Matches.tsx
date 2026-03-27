import { Calendar, MapPin, Trophy, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Matches() {
  const upcomingMatches = [
    {
      date: "29 Marts 2026",
      time: "14:00",
      homeTeam: "Aalborg Ultimate",
      awayTeam: "Aarhus Frisbee",
      location: "Aalborg Stadion",
      team: "Open",
    },
    {
      date: "5 April 2026",
      time: "11:00",
      homeTeam: "Aalborg Ultimate",
      awayTeam: "Copenhagen Ultimate",
      location: "Aalborg Stadion",
      team: "Women",
    },
    {
      date: "12 April 2026",
      time: "15:00",
      homeTeam: "Odense Ultimate",
      awayTeam: "Aalborg Ultimate",
      location: "Odense Idrætspark",
      team: "Open",
    },
  ];

  const recentResults = [
    {
      date: "22 Marts 2026",
      homeTeam: "Aalborg Ultimate",
      homeScore: 15,
      awayTeam: "Esbjerg Ultimate",
      awayScore: 12,
      team: "Open",
      result: "Sejr",
    },
    {
      date: "15 Marts 2026",
      homeTeam: "Aalborg Ultimate",
      homeScore: 13,
      awayTeam: "Randers Frisbee",
      awayScore: 10,
      team: "Women",
      result: "Sejr",
    },
    {
      date: "8 Marts 2026",
      homeTeam: "Copenhagen Ultimate",
      homeScore: 14,
      awayTeam: "Aalborg Ultimate",
      awayScore: 13,
      team: "Open",
      result: "Nederlag",
    },
    {
      date: "1 Marts 2026",
      homeTeam: "Aalborg Ultimate",
      homeScore: 15,
      awayTeam: "Aarhus Frisbee",
      awayScore: 8,
      team: "Women",
      result: "Sejr",
    },
  ];

  const standings = [
    { position: 1, team: "Aalborg Ultimate", played: 8, wins: 7, losses: 1, points: 21 },
    { position: 2, team: "Copenhagen Ultimate", played: 8, wins: 6, losses: 2, points: 18 },
    { position: 3, team: "Aarhus Frisbee", played: 8, wins: 5, losses: 3, points: 15 },
    { position: 4, team: "Odense Ultimate", played: 8, wins: 3, losses: 5, points: 9 },
    { position: 5, team: "Esbjerg Ultimate", played: 8, wins: 2, losses: 6, points: 6 },
    { position: 6, team: "Randers Frisbee", played: 8, wins: 1, losses: 7, points: 3 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1606855269773-6359493df697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRpbWF0ZSUyMGZyaXNiZWUlMjB0b3VybmFtZW50fGVufDF8fHx8MTc3NDM1NDQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ultimate Frisbee Tournament"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kampe & Resultater</h1>
          <p className="text-xl">Følg vores hold gennem sæsonen</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Matches */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Kommende Kampe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <Calendar size={20} />
                  <span className="font-semibold">{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock size={18} />
                  <span>{match.time}</span>
                </div>
                <div className="text-center mb-4">
                  <div className="font-bold text-lg mb-1">{match.homeTeam}</div>
                  <div className="text-gray-500 text-sm mb-1">vs</div>
                  <div className="font-bold text-lg">{match.awayTeam}</div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm">{match.location}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {match.team}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Seneste Resultater</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hold
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resultat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hold
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentResults.map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {result.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {result.homeTeam}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold">
                        {result.homeScore} - {result.awayScore}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {result.awayTeam}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            result.result === "Sejr"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {result.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Standings */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">Stilling - Open Liga</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Hold
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      Kampe
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      Sejre
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      Nederlag
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      Point
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {standings.map((standing) => (
                    <tr
                      key={standing.position}
                      className={`hover:bg-gray-50 ${
                        standing.team === "Aalborg Ultimate" ? "bg-blue-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold">
                        {standing.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {standing.team}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {standing.played}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {standing.wins}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {standing.losses}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold">
                        {standing.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
