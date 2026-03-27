import { Clock, MapPin, Users, Dumbbell } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Training() {
  const sessions = [
    {
      day: "Tirsdag",
      time: "18:00 - 20:00",
      level: "Begyndere & Letøvede",
      location: "Aalborg Stadion, Bane 2",
      description: "Fokus på grundlæggende teknikker og introduktion til ultimate frisbee. Perfekt for nye spillere!",
    },
    {
      day: "Tirsdag",
      time: "20:00 - 22:00",
      level: "Øvede & Elite",
      location: "Aalborg Stadion, Bane 2",
      description: "Intensiv træning med fokus på strategi, avancerede teknikker og kampforberedelse.",
    },
    {
      day: "Torsdag",
      time: "18:00 - 20:00",
      level: "Alle Niveauer",
      location: "Aalborg Stadion, Bane 1",
      description: "Blandet træning hvor alle niveauer træner sammen. God mulighed for socialt samvær.",
    },
    {
      day: "Lørdag",
      time: "10:00 - 12:00",
      level: "Pick-up Games",
      location: "Aalborg Stadion",
      description: "Uformelle kampe i afslappet atmosfære. Drop-in velkommen!",
    },
  ];

  const whatToBring = [
    "Sportstøj og løbesko",
    "Vandflaske",
    "God attitude og lyst til at lære",
    "Frisbee (hvis du har en - ellers har vi)",
  ];

  const faqs = [
    {
      question: "Skal jeg have erfaring for at deltage?",
      answer: "Nej! Vi har træning for alle niveauer, fra helt nybegyndere til erfarne spillere. Vores tirsdagstræning kl. 18-20 er særligt designet til nye spillere.",
    },
    {
      question: "Hvad koster det?",
      answer: "Første træning er altid gratis! Herefter koster medlemskab 500 kr. per semester, hvilket inkluderer træning, adgang til turneringer og klubtrøje.",
    },
    {
      question: "Hvad skal jeg have med?",
      answer: "Almindeligt sportstøj, løbesko og en vandflaske. Vi har frisbees, så du behøver ikke medbringe din egen.",
    },
    {
      question: "Er der aldersgrænse?",
      answer: "Vi har spillere fra 16 år og opefter. For børn under 16 tilbyder vi særlige juniorholds-træninger - kontakt os for mere information.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwdHJhaW5pbmclMjBleGVyY2lzZXxlbnwxfHx8fDE3NzQzNTQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Team Training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Træning</h1>
          <p className="text-xl">Kom til træning og bliv en del af holdet</p>
        </div>
      </div>

      {/* Training Schedule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Træningsplan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-600">{session.day}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {session.level}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{session.location}</span>
                </div>
                <p className="text-gray-600 mt-4">{session.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What to Bring */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad Skal Du Medbringe?</h2>
              <ul className="space-y-3">
                {whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Prøv Gratis!</h3>
              <p className="mb-6">
                Din første træning er helt gratis og uforpligtende. Kom forbi og se om ultimate frisbee er noget for dig!
              </p>
              <div className="bg-white text-blue-600 p-4 rounded-lg">
                <div className="font-bold mb-2">Mød op til træning eller kontakt os:</div>
                <div className="text-sm">info@aalborgultimate.dk</div>
                <div className="text-sm">+45 12 34 56 78</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Træningstyper</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Begynder Træning</h3>
            <p className="text-gray-600">
              Lær grundlæggende kastninger, fangeteknikker og spilleregler i et trygt og støttende miljø.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Styrke & Kondition</h3>
            <p className="text-gray-600">
              Supplement din ultimate træning med styrke- og konditionstræning for at forbedre dit spil.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Kampforberedelse</h3>
            <p className="text-gray-600">
              Avanceret træning fokuseret på strategi, holdsamarbejde og konkurrenceforberedelse.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ofte Stillede Spørgsmål</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Find Os</h2>
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Aalborg Stadion</p>
            <p className="text-gray-500">Kaj Lindbergs Gade 7, 9220 Aalborg Øst</p>
          </div>
        </div>
      </div>
    </div>
  );
}
