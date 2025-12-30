import { Cookie, Settings, BarChart3, ShieldCheck, Mail } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Title */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-gray-500 mt-2">Last updated: 12/24/2025</p>
      </div>

      <div className="space-y-8">
        {/* What are Cookies */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Cookie className="text-blue-600" />
            <h2 className="text-xl font-semibold">What Are Cookies?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files that are stored on your device when you
            visit a website. They help websites remember information about your
            visit, such as your preferences and login status, to improve your
            browsing experience.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Settings className="text-blue-600" />
            <h2 className="text-xl font-semibold">How We Use Cookies</h2>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Keep you signed in to your account</li>
            <li>Analyze website traffic and performance</li>
            <li>Improve our services and user experience</li>
          </ul>
        </section>

        {/* Types of Cookies */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-blue-600" />
            <h2 className="text-xl font-semibold">Types of Cookies We Use</h2>
          </div>

          <div className="space-y-4 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">
                Essential Cookies:
              </span>{" "}
              Required for the website to function properly and cannot be
              disabled.
            </p>

            <p>
              <span className="font-semibold text-gray-800">
                Performance & Analytics Cookies:
              </span>{" "}
              Help us understand how visitors interact with our website so we
              can improve performance.
            </p>

            <p>
              <span className="font-semibold text-gray-800">
                Functional Cookies:
              </span>{" "}
              Remember your preferences and enhance your personalized
              experience.
            </p>

            <p>
              <span className="font-semibold text-gray-800">
                Marketing Cookies:
              </span>{" "}
              Used to deliver relevant advertisements and marketing campaigns
              (if applicable).
            </p>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-blue-700" />
            <h2 className="text-xl font-semibold text-blue-800">
              Managing Cookies
            </h2>
          </div>
          <p className="text-blue-900 leading-relaxed">
            You can control or delete cookies through your browser settings.
            Please note that disabling cookies may affect the functionality of
            certain parts of our website.
          </p>
        </section>

        {/* Third Party Cookies */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">Third-Party Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We may use third-party services such as analytics providers or
            payment processors that place cookies on your device to help deliver
            their services.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-100 rounded-2xl p-6 text-center">
          <Mail className="mx-auto text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Cookie Policy, please contact us
            at{" "}
            <a
              href="mailto:privacy@shopmart.com"
              className="text-blue-600 font-medium hover:underline"
            >
              privacy@shopmart.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
