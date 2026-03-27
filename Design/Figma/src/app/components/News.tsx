import { Calendar, User, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Historisk DM-guld til Aalborg Ultimate!",
      excerpt: "I en spændende finale besejrede vores open hold Copenhagen Ultimate og sikrede sig klubbens første DM-guld i mixed ultimate.",
      author: "Martin Jensen",
      date: "20 Marts 2026",
      category: "Resultater",
      image: "https://images.unsplash.com/photo-1773949092693-280b7eadab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0Mjc5NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true,
    },
    {
      id: 2,
      title: "Ny træningstid for recreational holdet",
      excerpt: "Fra april måned flytter vores recreational hold træning til onsdage kl. 19:00-21:00. Alle er velkomne til at deltage!",
      author: "Sarah Nielsen",
      date: "18 Marts 2026",
      category: "Træning",
      image: "https://images.unsplash.com/photo-1767406657699-9f3e01a48ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwdHJhaW5pbmclMjBmaWVsZHxlbnwxfHx8fDE3NzQzNTQ0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
    {
      id: 3,
      title: "Tilmeldingen til Nordjysk Cup er åbnet",
      excerpt: "Danmarks største regionale turnering finder sted 15-16 maj i Aalborg. Tilmeld dit hold senest 1. maj.",
      author: "Peter Andersen",
      date: "15 Marts 2026",
      category: "Turnering",
      image: "https://images.unsplash.com/photo-1606855269773-6359493df697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRpbWF0ZSUyMGZyaXNiZWUlMjB0b3VybmFtZW50fGVufDF8fHx8MTc3NDM1NDQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
    {
      id: 4,
      title: "Velkommen til 15 nye medlemmer!",
      excerpt: "Vi er glade for at byde velkommen til 15 nye medlemmer, der har tilmeldt sig klubben i marts. Se jer frem til mange gode træninger!",
      author: "Lisa Thomsen",
      date: "12 Marts 2026",
      category: "Medlemmer",
      image: "https://images.unsplash.com/photo-1723917964127-41491fd354da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmlzYmVlJTIwdGVhbSUyMHNwb3J0JTIwcGxheWVyc3xlbnwxfHx8fDE3NzQzNTQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
    {
      id: 5,
      title: "U20-holdet til EM-kvalifikation",
      excerpt: "Vores ungdomshold har kvalificeret sig til EM-kvalifikationen i juni. Stort tillykke til spillerne og trænerne!",
      author: "Michael Larsen",
      date: "8 Marts 2026",
      category: "Resultater",
      image: "https://images.unsplash.com/photo-1715802168605-4bfa24acbdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRpbWF0ZSUyMGZyaXNiZWUlMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3NDM1NDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
    {
      id: 6,
      title: "Generalforsamling d. 25. april",
      excerpt: "Klubbens årlige generalforsamling afholdes torsdag d. 25. april kl. 19:00. Alle medlemmer opfordres til at deltage.",
      author: "Bestryelsen",
      date: "5 Marts 2026",
      category: "Klub",
      image: "https://images.unsplash.com/photo-1585995603436-b7162d7341a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBuZXdzJTIwYW5ub3VuY2VtZW50fGVufDF8fHx8MTc3NDM1NDQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
  ];

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const categories = ["Alle", "Resultater", "Træning", "Turnering", "Medlemmer", "Klub"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nyheder</h1>
          <p className="text-xl max-w-3xl">
            Hold dig opdateret med de seneste nyheder fra Aalborg Ultimate Frisbee Klub
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-96 lg:h-auto">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm w-fit mb-4">
                    Fremhævet
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{featuredArticle.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>{featuredArticle.category}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-fit transition-colors">
                    Læs mere
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mb-3">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Læs mere →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Hold dig opdateret</h2>
            <p className="text-lg mb-8">
              Tilmeld dig vores nyhedsbrev og få de seneste nyheder direkte i din indbakke
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Tilmeld
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
