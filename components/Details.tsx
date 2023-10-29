const Details = () => {
  return (
    <div
      id="about"
      className="max-container pb-20 xs:py-20 sm:mb-32 scroll-mt-10"
    >
      <div className="flex flex-col gap-4 text-center md:text-left md:flex-row justify-center bg-white px-10 py-10 max-w-[60rem] mx-auto shadow-xl">
        <div className="flex-1 md:self-center">
          <h3 className="mb-2">
            <span className="font-semibold text-2xl">Melbourne</span>,{" "}
            <span className="font-medium text-lg text-gray-600">Australia</span>
          </h3>
          <p className="md:max-w-sm">
            263 King Str. 05th Floor, utrol Hosue Building, Velbourne. VIC 3000.
            Auztralia.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4 md:max-w-sm ">
          <div>
            <h4 className="font-bold text-lg">Call directly</h4>
            <p className="font-medium">+0 123 456 789</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Lunch Service</h4>
            <p className="font-medium text-gray-400">
              Friday, Saturday and Sunday: Bookings from 12 pm to 1:30 pm
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Dinner Service</h4>
            <p className="font-medium text-gray-400">
              Daily: Bookings from 6 pm to 9:30 pm
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Delivery</h4>
            <p className="font-medium text-gray-400">
              Daily: from 10 am to 9 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
