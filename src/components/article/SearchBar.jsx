function SearchBar() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mb-8">
      <div className="border border-green-600 rounded-full overflow-hidden flex items-center bg-white">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full px-6 py-3 outline-none text-gray-700"
        />
      </div>
    </div>
  );
}

export default SearchBar;
