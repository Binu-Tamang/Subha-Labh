import { Link } from "react-router-dom";

const OrderNow = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(to bottom, #FBE8E4, #E1D9FC)",
      }}
    >
      {/* Back Icon */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-gray-600 hover:text-black transition"
      >
        {/* Left Arrow Icon */}
        <span className="text-3xl bg-white px-[20px] py-[6px] rounded-3xl hover:shadow transition">&larr;</span>
      </Link>

      <div className="bg-[#F2EBEB] rounded-lg shadow-lg p-8 w-96 border-2 border-white">
        <h2 className="text-center text-2xl font-bold mb-2">Enquire Now!</h2>
        <p className="text-center text-gray-500 mb-6">
          What would you like to order?
        </p>

        <form className="space-y-4">
          <select className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option>--Choose the product--</option>
            <option>Product 1</option>
            <option>Product 2</option>
          </select>

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email Id"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="tel"
            placeholder="Phone No"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            rows="4"
            placeholder="Additional instructions"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition flex justify-center items-center"
          >
            Enquire Now →
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
