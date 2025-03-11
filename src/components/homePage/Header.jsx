const Header = () => {
  return (
    <div className="border border-b-1-solid h-16 w-screen flex items-center justify-between px-22">
      <div className="flex-1 flex items-center gap-10">
        <div className="text-2xl">EcoStay</div>
        <div className="flex  text-xl gap-8 text-center">
          <p className="cursor-pointer">Categories</p>
          <p className="cursor-pointer">Book Now</p>
        </div>
      </div>
      <div className="border rounded-12 border-b-1 flex-1">
        <input
          type="text"
          className="w-full px-2"
          placeholder="Enter your Search"
        />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Header;
