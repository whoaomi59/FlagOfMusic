import Search from "./search";

export default function Appbar({
  handleSearch,
  handleInputChange,
  searchQuery,
}) {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-900">
      <div className="text-xl font-bold flex">ThePirateYTB</div>
      <div>
        <form onSubmit={handleSearch}>
          <Search
            handleInputChange={handleInputChange}
            searchQuery={searchQuery}
          />
          <input
            type="submit"
            value="Buscar"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
            style={{ marginLeft: "20px" }}
          />
        </form>
      </div>
    </nav>
  );
}
