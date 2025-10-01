export const SubFooter = () => (
  <>
    {" "}
    <section className="w-full px-6 py-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-red-700 mb-6">How Bondee Works</h2>
      <div className="flex flex-col items-center md:flex-row justify-center gap-10">
        {[
          "Browse CCT events based on your interests.",
          "Register instantly or by answering a form.",
          "Get notified and participate in awesome events.",
        ].map((step, i) => (
          <div key={i} className="max-w-sm space-y-2">
            <div className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-xl mx-auto">
              {i + 1}
            </div>
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="bg-red-700 text-white py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Stay in the loop</h2>
      <p className="mb-6">
        Sign up to receive upcoming event alerts and updates
      </p>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="you@citycollegeoftagaytay.edu.ph"
          className="px-4 py-2 rounded-full w-full text-black focus:outline-none border-[1px]"
        />
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition">
          Subscribe
        </button>
      </form>
    </section>
  </>
);
