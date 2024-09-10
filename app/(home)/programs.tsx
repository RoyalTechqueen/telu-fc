export default function Programs() {
  return (
    <div className="scroll-mt-24 py-16" id="programs">
      <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Youth Training</h3>
            <p>
              Our youth training program focuses on skill development, teamwork,
              and leadership for young players.
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Advanced Coaching</h3>
            <p>
              Our advanced coaching program is designed for players looking to
              take their game to the next level.
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Elite Teams</h3>
            <p>
              Join our elite teams and compete at the highest level with top
              players from around the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
