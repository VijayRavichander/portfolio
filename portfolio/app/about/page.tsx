"use client";
import Link from "next/link";
export default function Page() {
  return (
    <div className="p-10 md:mx-24 mt-10">
      <div>
        <div className="text-4xl font-semibold py-8">Work Experience</div>
        <div className="mx-4">
          <div className="my-2">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
                Software Engineering Intern
              </div>
              <div>May 2024 - June 2024</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="font-semibold">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  Program Warehouse
                </Link>
              </div>
              <div>Remote</div>
            </div>
            <div className="text-lg font-thin ml-4">
              <div className="my-4">
                Implemented robust authentication and authorization mechanisms
                to secure backend APIs, ensuring data integrity and user
                privacy.
              </div>
              <div className="my-4">
                Developed efficient and scalable business logic, optimizing data
                retrieval and processing to deliver a seamless user experience.
              </div>
              <div className="my-4">
                Contributed to backend API documentation to enhance developer
                understanding and facilitate integration, improving
                collaboration and maintainability.
              </div>
            </div>
          </div>
          <div className="my-7">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
                Academic Intern
              </div>
              <div>June 2022 - July 2023</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="font-semibold">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  National University of Singapore
                </Link>
              </div>
              <div>Singapore</div>
            </div>
            <div className="text-lg font-thin ml-4">
              <div className="my-4">
                Implemented K-means clustering on customer demographic data to
                identify and analyze distinct customer segments.
              </div>
              <div className="my-4">
                Collaborated in modeling stage for stock prediction of five
                S&P500 companies like Apple, Bank of America, achieving 80%
                accuracy.
              </div>
              <div className="my-4">
                Developed web application integrating the above 2 models to
                recommend personalized stock portfolios for customers with
                expected return on investment and the standard deviation and
                received a “High Achiever Award” for academic excellence.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-4xl py-6">Education</div>
        <div className="mx-4">
          <div className="my-3">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-lg">
                Master&apos;s in Computer Science (Artificial Intelligence)
              </div>
              <div>July 2023 - May 2025</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="font-thin">
                <Link href="https://www.linkedin.com/company/program-warehouse/">
                  University of Southern California
                </Link>
                <div>
                  Coursework: Machine Learning, Deep Learning, Applications of
                  NLP, Analysis of Algorithms, Web Technologies, Foundations of
                  A.I,
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
