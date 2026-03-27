import { Check, X } from "lucide-react";

export function Membership() {
  const membershipPlans = [
    {
      name: "Junior (Under 18 år)",
      price: "500 kr",
      period: "/år",
      description: "Perfekt for unge spillere",
      features: [
        "Adgang til U20 træning",
        "Deltagelse i ungdomsturneringer",
        "Gratis klubtrøje",
        "Træning 2 gange om ugen",
        "Spillerlicens inkluderet",
      ],
      notIncluded: ["Adgang til open/women træning"],
      highlighted: false,
    },
    {
      name: "Recreational",
      price: "800 kr",
      period: "/år",
      description: "For dig der vil spille for sjov",
      features: [
        "Adgang til recreational træning",
        "Social events og fester",
        "Gratis klubtrøje",
        "Træning 1 gang om ugen",
        "Mulighed for social ultimate",
      ],
      notIncluded: ["Deltagelse i ligakampe", "Spillerlicens"],
      highlighted: false,
    },
    {
      name: "Konkurrence",
      price: "1.200 kr",
      period: "/år",
      description: "For dig der vil spille konkurrence",
      features: [
        "Adgang til al træning",
        "Deltagelse i ligakampe",
        "Gratis klubtrøje og shorts",
        "Træning 2-3 gange om ugen",
        "Spillerlicens inkluderet",
        "Adgang til styrketræning",
        "Deltagelse i turneringer",
        "Personlig udvikling",
      ],
      notIncluded: [],
      highlighted: true,
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Udfyld formularen",
      description: "Fortæl os lidt om dig selv og hvilket niveau du ønsker at spille på",
    },
    {
      number: "2",
      title: "Kom til prøvetræning",
      description: "Deltag i en gratis prøvetræning og mød klubben",
    },
    {
      number: "3",
      title: "Vælg medlemskab",
      description: "Vælg det medlemskab der passer til dig og betal kontingent",
    },
    {
      number: "4",
      title: "Velkommen til klubben!",
      description: "Du er nu officielt medlem og kan deltage i alle aktiviteter",
    },
  ];

  const faqs = [
    {
      question: "Kan jeg prøve at spille før jeg melder mig ind?",
      answer: "Ja! Du er velkommen til at deltage i 2 gratis prøvetræninger før du beslutter dig.",
    },
    {
      question: "Hvad skal jeg have med til træning?",
      answer: "Sportstøj, indendørs sko, en drikkeflaske og godt humør. Vi stiller frisbees.",
    },
    {
      question: "Skal jeg kunne spille ultimate fra start?",
      answer: "Nej, vi tager imod spillere på alle niveauer, også dem der aldrig har prøvet ultimate før.",
    },
    {
      question: "Kan jeg skifte medlemskab senere?",
      answer: "Ja, du kan opgradere eller nedgradere dit medlemskab ved sæsonstart.",
    },
    {
      question: "Hvornår starter næste sæson?",
      answer: "Vi har træning hele året, så du kan starte når som helst. Hovedsæsonen går fra april til oktober.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bliv Medlem</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bliv en del af Aalborg Ultimate og oplev Danmarks mest sociale frisbeeklub
          </p>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Vælg Dit Medlemskab</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                plan.highlighted
                  ? "bg-blue-600 text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-yellow-400 text-blue-900 text-center py-2 font-bold text-sm">
                  MEST POPULÆR
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-green-300" : "text-green-600"
                        }`}
                      />
                      <span className={plan.highlighted ? "text-white" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 opacity-50">
                      <X
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-red-300" : "text-red-600"
                        }`}
                      />
                      <span className={plan.highlighted ? "text-white" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Vælg Dette Medlemskab
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sådan Bliver Du Medlem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Tilmeldingsformular</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fornavn *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efternavn *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fødselsdato *
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medlemskabstype *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>Vælg medlemskab</option>
                <option>Junior (Under 18 år) - 500 kr/år</option>
                <option>Recreational - 800 kr/år</option>
                <option>Konkurrence - 1.200 kr/år</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tidligere erfaring med ultimate frisbee *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>Vælg niveau</option>
                <option>Ingen erfaring</option>
                <option>Begynder (under 1 år)</option>
                <option>Øvet (1-3 år)</option>
                <option>Erfaren (3+ år)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Besked til klubben (valgfri)
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Jeg accepterer klubbens vedtægter og betingelser *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Send Tilmelding
            </button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ofte Stillede Spørgsmål</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
