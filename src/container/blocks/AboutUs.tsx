export default function AboutUs() {
  return (
    <section className="bg-gray-30 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 uppercase mb-6">
          About Us
        </h2>
        <div className="relative bg-blue-900 text-white p-8 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor lacinia dui purus
              purus volutpat odio mi augue ullamcorper. Suspendisse vulputate
              dui et faucibus amet ac in ultrices. Convallis interdum justo in
              suspendisse faucibus. Dictum eget odio venenatis rhoncus
              condimentum. Lorem ipsum dolor sit amet consectetur. Dolor lacinia
              dui purus purus volutpat odio mi augue ullamcorper. Suspendisse
              vulputate dui et faucibus amet ac in ultrices. Convallis interdum
              justo in suspendisse faucibus. Dictum eget odio venenatis rhoncus
              condimentum.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative" style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100px",
                width: "100px",
              }}
              src="/Rectangle5.png"
              alt="Placeholder"
              className="w-64 h-auto rounded-lg shadow-lg transform rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
