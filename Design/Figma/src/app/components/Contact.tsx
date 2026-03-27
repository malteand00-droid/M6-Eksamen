import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@aalborgultimate.dk",
      link: "mailto:info@aalborgultimate.dk",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: "+45 12 34 56 78",
      link: "tel:+4512345678",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: "Aalborg Stadion, Hornevej 2, 9220 Aalborg Øst",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Kontortid",
      details: "Man-Fre: 16:00-19:00",
      link: null,
    },
  ];

  const boardMembers = [
    {
      name: "Martin Jensen",
      role: "Formand",
      email: "formand@aalborgultimate.dk",
    },
    {
      name: "Sarah Nielsen",
      role: "Næstformand",
      email: "naestformand@aalborgultimate.dk",
    },
    {
      name: "Peter Andersen",
      role: "Kasserer",
      email: "kasserer@aalborgultimate.dk",
    },
    {
      name: "Lisa Thomsen",
      role: "Sekretær",
      email: "sekretaer@aalborgultimate.dk",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt Os</h1>
          <p className="text-xl max-w-3xl">
            Vi er altid klar til at besvare dine spørgsmål. Kontakt os i dag!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center text-blue-600 mb-4">
                {info.icon}
              </div>
              <h3 className="font-bold mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-gray-700">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Os en Besked</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Navn *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emne *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Vælg emne</option>
                  <option>Prøvetræning</option>
                  <option>Medlemskab</option>
                  <option>Træning</option>
                  <option>Turneringer</option>
                  <option>Generel henvendelse</option>
                  <option>Andet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Besked *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Besked
              </button>
            </form>
          </div>

          {/* Map and Board */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Find Os</h2>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-80 mb-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Aalborg Stadion</p>
                <p className="text-gray-500 text-sm">Hornevej 2, 9220 Aalborg Øst</p>
              </div>
            </div>

            {/* Board Members */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Bestyrelsen</h3>
              <div className="space-y-3">
                {boardMembers.map((member, index) => (
                  <div key={index} className="pb-3 border-b border-gray-200 last:border-0">
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Følg Os på Sociale Medier</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Hurtige Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Prøvetræning</h3>
              <p className="text-gray-600 mb-4">
                Kom til en gratis prøvetræning og oplev ultimate frisbee
              </p>
              <a
                href="/bliv-medlem"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Book prøvetræning →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Træningstider</h3>
              <p className="text-gray-600 mb-4">
                Se hvornår vores forskellige hold træner
              </p>
              <a
                href="/traening"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Se træningstider →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Medlemskab</h3>
              <p className="text-gray-600 mb-4">
                Læs om vores forskellige medlemskaber
              </p>
              <a
                href="/bliv-medlem"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Se medlemskaber →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}