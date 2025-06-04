import SearchBar from "./search-bar";

export default function HeroSection() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search functionality here
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Share Knowledge, Grow Together
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          A collaborative platform where students share study materials, access
          resources, and connect with peers. Upload your notes in any format and
          discover valuable content from Nepali Students.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            PDF
          </span>
          <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
            Images
          </span>
          <span className="px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-medium">
            Text
          </span>
        </div>
      </div>
    </div>
  );
}
