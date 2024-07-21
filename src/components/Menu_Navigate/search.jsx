export default function Search({ handleInputChange, searchQuery }) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      className="px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
      value={searchQuery}
      onChange={handleInputChange}
      required
    />
  );
}
