import Link from "next/link";
export default function Page() {


  
  return (
    <div className="p-10 md:mx-24 mt-10">
      <div>
        <div className="text-4xl py-8">Work Experience</div>
        <div className="mx-4">
          <div className="my-2">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-lg">Software Engineering Intern</div>
              <div>July 2024 - Present</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  Program Warehouse
                </Link>
              </div>
              <div>Remote</div>
            </div>
          </div>
          <div className="my-7">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-lg">Academic Intern</div>
              <div>June 2022 - July 2023</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  National University of Singapore
                </Link>
              </div>
              <div>Singapore</div>
            </div>
          </div>
        </div>
      </div>
      <div>
    <div className="text-4xl py-6">Education</div>
        <div className="mx-4">
          <div className="my-3">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-lg">Master&apos;s in Computer Science (Artificial Intelligence)</div>
              <div>July 2023 - May 2025</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  University of Southern California
                </Link>
                <div>
                  Coursework: Machine Learning, Deep Learning, Applications of NLP, Analysis of Algorithms, Web Technologies, Foundations of A.I, 
                </div>
              </div>
              <div>GPA: 3.65</div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}