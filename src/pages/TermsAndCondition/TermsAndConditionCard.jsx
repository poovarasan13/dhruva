import { Check } from "lucide-react";
import { useEffect } from "react";

export default function TermsOfServiceCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex mt-28  justify-center py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full rounded-2xl overflow-hidden shadow-lg bg-white p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center dm-sans">
          TERMS OF SERVICE
        </h2>
        <hr className="my-5" />
        <div className="text-gray-600 space-y-4 work-sans">
          <h3 className="text-lg font-semibold dm-sans">OVERVIEW</h3>
          <p className="text-justify">
            This website is operated by Karpagam College of Engineering.
            Throughout the site, the terms “we,” “us,” and “our” refer to
            <span className=" bg--200 transition duration-200 text-black p-1 rounded-lg hover:border-b-4 border-orange-400">
              Karpagam College Of Engineering
            </span>
            . By accessing our website and using our services, you agree to be
            bound by these Terms of Service.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 1 - GENERAL CONDITION
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-1" />
              <span>
                Karpagam College of Engineering reserves the right to modify,
                suspend, or discontinue any aspect of the website at any time.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-1" />
              <span>
                You agree not to use this website for any unlawful or
                unauthorized purpose.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-1" />
              <span>
                Unauthorized use of the website may give rise to a claim for
                damages and/or be a criminal offense.
              </span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 2 - ACCURACY OF INFORMATION
          </h3>
          <p>
            We strive to provide accurate and updated information about the
            college. However, we do not guarantee that all the information on
            this website is complete, accurate, or up to date.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 3 - USER CONDUCT
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-1" />
              <span>
                Use the website responsibly and do not disrupt its
                functionality.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-1" />
              <span>
                Do not post unlawful, harmful, defamatory, or objectionable
                content.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-1" />
              <span>
                Do not attempt to gain unauthorized access to restricted
                sections of the website.
              </span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 4 - THIRD-PARTY LINKS
          </h3>
          <p>
            This website may include links to external sites for additional
            resources. We are not responsible for their content or privacy
            practices.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 5 - PRIVACY POLICY
          </h3>
          <p>
            Your submission of personal information through the website is
            governed by our Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 6 - INTELLECTUAL PROPERTY
          </h3>
          <p>
            All content on this website, including text, images, logos, and
            multimedia materials, is the property of Karpagam College of
            Engineering unless stated otherwise. Unauthorized use or
            reproduction is prohibited.
          </p>

          <h3 className="text-lg font-semibold dm-sans">
            SECTION 7 - CONTACT INFORMATION
          </h3>
          <p>
            You can review the most current version of the Terms of Service at
            any time on this page. For inquiries, contact us at
            <span className="mx-1 bg-sky-200 transition duration-200 text-black p-1 rounded-lg hover:border-b-4 border-blue-400">
              dhruva@kce.ac.in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
