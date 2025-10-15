import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">About</h1>

        {/* Work Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">Work Experience</h2>
          <div className="mt-4 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-card p-5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1">
                <div className="text-lg font-medium text-slate-900">Software Engineering Intern</div>
                <div className="text-sm text-slate-600">May 2024 - June 2024</div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 mt-1">
                <div className="text-slate-800">
                  <Link className="underline-offset-4 hover:underline" href="https://www.linkedin.com/company/program-warehouse/">
                    Program Warehouse
                  </Link>
                </div>
                <div className="text-sm text-slate-600">Remote</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-2">
                <li>Implemented authentication and authorization for backend APIs to ensure data integrity and privacy.</li>
                <li>Built scalable business logic to optimize data retrieval and processing for a smooth UX.</li>
                <li>Contributed to API documentation to improve integration and maintainability.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-card p-5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1">
                <div className="text-lg font-medium text-slate-900">Academic Intern</div>
                <div className="text-sm text-slate-600">June 2022 - July 2023</div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 mt-1">
                <div className="text-slate-800">
                  <Link className="underline-offset-4 hover:underline" href="https://www.linkedin.com/company/program-warehouse/">
                    National University of Singapore
                  </Link>
                </div>
                <div className="text-sm text-slate-600">Singapore</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-800 space-y-2">
                <li>Applied K-means clustering on demographics to reveal actionable customer segments.</li>
                <li>Co-built forecasting models for S&P 500 stocks achieving ~80% accuracy.</li>
                <li>Developed a web app to recommend portfolios with ROI and risk; awarded “High Achiever”.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Education</h2>
          <div className="mt-4 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-card p-5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1">
                <div className="text-slate-900">Master&apos;s in Computer Science (Artificial Intelligence)</div>
                <div className="text-sm text-slate-600">July 2023 - May 2025</div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 mt-1">
                <div className="text-slate-800">
                  <Link className="underline-offset-4 hover:underline" href="https://www.linkedin.com/company/program-warehouse/">
                    University of Southern California
                  </Link>
                  <div className="text-slate-700 text-sm mt-2">
                    Coursework: Machine Learning, Deep Learning, Applications of NLP, Analysis of Algorithms, Web Technologies, Foundations of AI
                  </div>
                </div>
                <div className="text-sm text-slate-600">GPA: 3.65</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
