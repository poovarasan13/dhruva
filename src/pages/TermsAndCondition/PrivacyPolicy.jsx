import { Check } from "lucide-react";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex lg:mt-32 mt-20 justify-center py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full rounded-2xl overflow-hidden shadow-lg bg-white p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center dm-sans">
          PRIVACY POLICY
        </h2>
        <hr className="my-5" />
        <div className="text-gray-600 space-y-4 work-sans">
          <h3 className="text-lg font-semibold dm-sans">
            SECTION 1 - INFORMATION WE COLLECT
          </h3>
          <p>
            When users register, we collect personal details such as name,
            email, and phone number for event registration and communication.
          </p>
          <p>
            Additionally, IP addresses are collected for compatibility insights.
          </p>

          <h3 className="text-lg font-semibold dm-sans">SECTION 2 - CONSENT</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <Check className="text-green-400 mr-2" />
              Users give consent by providing their information to register or
              engage with the platform.
            </li>
            <li className="flex items-center">
              <Check className="text-green-400 mr-2" />
              Consent can be withdrawn by contacting us at
              <span className="mx-1 bg-sky-200 transition duration-200 text-black p-1 rounded-lg hover:border-b-4 border-blue-400">
                dhruva@kce.ac.in
              </span>
              .
            </li>
          </ul>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 3 - DISCLOSURE
          </h3>
          <p>
            We may disclose personal information if required by law or if users
            violate our Terms of Service.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 4 - PAYMENT SECURITY
          </h3>
          <p>
            Payments are processed securely using <strong>Razorpay</strong>,
            following PCI-DSS standards.
          </p>
          <p>
            More details:{" "}
            <a
              href="https://razorpay.com"
              className="text-sky-600 hover:underline"
            >
              https://razorpay.com
            </a>
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 5 - THIRD-PARTY SERVICES
          </h3>
          <p>
            We may share user data with service providers for platform
            functionality. Third-party sites have their own privacy policies.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 6 - SECURITY MEASURES
          </h3>
          <p>Reasonable security precautions are taken to protect user data.</p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 7 - AGE REQUIREMENTS
          </h3>
          <p>Users confirm they are of legal age or have parental consent.</p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 8 - CHANGES TO THIS POLICY
          </h3>
          <p>
            We reserve the right to update this policy, with changes taking
            effect upon posting.
          </p>

          <h3 className="text-lg font-semibold dm-sans">CONTACT INFORMATION</h3>
          <p>
            For inquiries, reach us at
            <span className="mx-1 bg-sky-200 transition duration-200 text-black p-1 rounded-lg hover:border-b-4 border-blue-400">
              dhruva@kce.ac.in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
