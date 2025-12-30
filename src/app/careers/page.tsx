// src/app/careers/page.tsx
import React from "react";
import {
  Briefcase,
  Users,
  Clock,
  Globe,
  CheckCircle,
  Mail,
} from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20 px-4">

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Careers at ShopMart
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our growing team and help shape the future of online shopping.
            We’re always looking for passionate people who love innovation and teamwork.
          </p>
          <a
            href="#open-positions"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
          >
            View Open Positions
          </a>
        </section>

        {/* Why Work With Us */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Why Work With Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Feature
              icon={<Users />}
              title="Great Team Culture"
              desc="Collaborative, friendly, and supportive work environment"
            />
            <Feature
              icon={<Briefcase />}
              title="Career Growth"
              desc="Opportunities to learn, grow, and advance your career"
            />
            <Feature
              icon={<Clock />}
              title="Flexible Work"
              desc="Remote-friendly roles with flexible schedules"
            />
            <Feature
              icon={<Globe />}
              title="Meaningful Impact"
              desc="Your work reaches thousands of customers worldwide"
            />
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Open Positions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobCard
              title="Frontend Developer"
              type="Full-time · Remote"
              desc="Build modern, responsive user interfaces using React and Next.js."
            />
            <JobCard
              title="Backend Developer"
              type="Full-time · Remote"
              desc="Design and maintain scalable APIs and backend services."
            />
            <JobCard
              title="UI / UX Designer"
              type="Part-time · Remote"
              desc="Create beautiful, user-friendly designs for our web platform."
            />
            <JobCard
              title="Customer Support Specialist"
              type="Full-time · On-site"
              desc="Help customers with inquiries and ensure excellent service."
            />
          </div>
        </section>

        {/* Hiring Process */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Our Hiring Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Submit Application",
              "Application Review",
              "Interview",
              "Offer & Onboarding",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl shadow-md text-center"
              >
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-blue-700" />
                <p className="font-medium text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-10 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            Don’t see a role that fits?
          </h2>
          <p className="text-blue-700 mb-5">
            We’d still love to hear from you. Send us your CV and tell us how you
            can contribute to ShopMart.
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-800 font-medium">
            <Mail className="w-5 h-5" />
            careers@shopmart.com
          </div>
        </section>

      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="flex justify-center text-blue-700 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function JobCard({
  title,
  type,
  desc,
}: {
  title: string;
  type: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-blue-700 mb-3">{type}</p>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>

      <button className="mt-6 self-start text-blue-700 hover:underline font-medium">
        Apply Now
      </button>
    </div>
  );
}
