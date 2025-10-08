export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-white/30">
          
          <div className="px-6">
            <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
              Total Downloads
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold">29.6M</h3>
            <p className="text-xs mt-2 text-white/70">
              21% More Than Last Month
            </p>
          </div>

          <div className="px-6">
            <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
              Total Reviews
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold">906K</h3>
            <p className="text-xs mt-2 text-white/70">
              46% More Than Last Month
            </p>
          </div>

          <div className="px-6">
            <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
              Active Apps
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold">132+</h3>
            <p className="text-xs mt-2 text-white/70">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
