
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-600 mb-2">About</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -top-0 -left-0 w-80 h-96 bg-gray-600 rounded-3xl transform rotate-12 opacity-90"></div>

              <div className="relative z-10 w-80 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src=""
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-justify">
                I'm an aspiring Accountant driven by precision, growth, and a genuine interest in understanding how numbers shape decisions. I’ve handled responsibilities like preparing financial reports, recording journal entries, managing budgets, and working with tools such as QuickBooks, Excel, and cloud-based accounting platforms—always pushing myself to become more accurate, efficient, and insightful.
              </p>
              <p className="text-justify">
                My journey in accounting has been about more than just mastering the basics. I’ve immersed myself in the intricacies of financial statements, reconciliations, and compliance. I’m not just learning to follow rules; I’m learning to understand the “why” behind them, so I can contribute meaningfully to any team I join.
              </p>
              <p className="text-justify">
                Throughout my academic and practical journey, I’ve taken on real-world challenges like balancing accounts, supporting audit preparations, and contributing to financial planning tasks during my internship. I don’t shy away from complex reconciliations or compliance work because I know that’s where the real learning—and real value—happens.
              </p>
              <p className="text-justify">
                What sets me apart isn’t just my understanding of accounting principles, but my mindset. I ask questions, I stay organized, and I constantly improve. I’m not just following formulas—I’m here to become a dependable, well-rounded accounting professional who brings clarity and accountability to every number I touch.
              </p>
              <p className="text-justify">
                If you’re looking for someone who’s committed to growing every day and ready to support a team with integrity and diligence, I’m that person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
