export default function InputSearch() {
  return (
    <form className="flex-1 flex justify-center ">
      <input
        className="w-[100%] max-w-[26.31rem] py-[.68rem] px-[.62rem] border-2 border-[#0D6EFD] outline-none rounded-tl-lg rounded-bl-lg"
        type="search"
        name="search"
        placeholder="search for a product"
      />
      <button
        className="px-[1.43rem] py-[.68rem] border-2 border-l-0 border-[#0D6EFD] bg-gradient-to-r from-[#127FFF] to-[#0D6EFD] rounded-tr-lg rounded-br-lg text-white"
        type="submit"
      >
        search
      </button>
    </form>
  );
}
