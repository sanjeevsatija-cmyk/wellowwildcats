import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Wellington Point Cricket Club (Wello Wildcats). Learn how we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Topbar />
      <Nav />
      <main>
        <PageHero
          label="Legal"
          title="Privacy Policy"
          subtitle="How we collect, use and protect your information."
        />

        <section className="bg-cream py-12 md:py-16 px-4 md:px-12">
          <div className="max-w-[780px] mx-auto">

            {/* Meta line */}
            <p className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-wello-grey mb-10">
              Effective Date: 1 May 2025 &nbsp;·&nbsp; Last Updated: 8 April 2026
            </p>

            {/* ── 1. About This Policy ── */}
            <PolicySection number="1" title="About This Policy">
              <p>
                Wellington Point Cricket Club (ABN 83 004 090 988), trading as{" "}
                <strong>WELLINGTON POINT CRICKET CLUB INC</strong>, is committed to protecting
                the privacy of our members, supporters and website visitors. This Privacy Policy
                explains what personal information we collect, how we use it, and your rights
                regarding that information.
              </p>
              <p>
                This policy applies to all information collected through our website
                (www.wellowildcats.com.au), our contact form, and any photos submitted to or
                published by the club.
              </p>
              <p>
                We are bound by the Australian Privacy Act 1988 (Cth) and the Australian Privacy
                Principles (APPs) to the extent they apply to us as a not-for-profit community
                sporting organisation.
              </p>
            </PolicySection>

            {/* ── 2. What We Collect ── */}
            <PolicySection number="2" title="What Information We Collect">
              <SubHeading>2.1 Contact Form Submissions</SubHeading>
              <p>When you submit an enquiry via our website contact form, we collect:</p>
              <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>Any message or information you voluntarily include in your submission</li>
              </ul>
              <p>
                This information is used solely to respond to your enquiry and is not stored in
                any database or used for marketing purposes without your consent.
              </p>

              <SubHeading>2.2 Photos and Images</SubHeading>
              <p>
                From time to time, we publish photos on our website that are taken at club
                events, matches and training sessions. These photos may include members, players,
                parents, guardians, and supporters.
              </p>
              <p>
                If you or your child appear in a photo published on our website and you wish to
                have it removed, please contact us using the details in Section 7 and we will
                action your request promptly.
              </p>
              <p>
                We do not accept or store photo uploads directly via our website. Any photos used
                on the site are sourced from club photographers, committee members, or submitted
                directly to the club via email.
              </p>

              <SubHeading>2.3 Information We Do Not Collect</SubHeading>
              <p>Our website does not collect:</p>
              <ul>
                <li>Financial or payment information (registrations are handled through PlayHQ)</li>
                <li>Sensitive personal information such as health or medical records</li>
                <li>Passwords or login credentials</li>
                <li>Information from minors without parental consent</li>
              </ul>
            </PolicySection>

            {/* ── 3. Third-Party Services ── */}
            <PolicySection number="3" title="Third-Party Services">
              <p>
                Our website integrates with or links to the following third-party platforms. We
                do not control their privacy practices and encourage you to review their
                individual privacy policies.
              </p>

              <SubHeading>3.1 Facebook &amp; Instagram</SubHeading>
              <p>
                Our website includes links to the club&apos;s official Facebook and Instagram
                pages. When you interact with these links or embedded content, Meta Platforms
                Inc. may collect information in accordance with their Privacy Policy
                (www.facebook.com/privacy/policy). We do not share your personal information
                with Meta and do not use Meta advertising pixels on our website.
              </p>

              <SubHeading>3.2 PlayHQ (Cricket Australia)</SubHeading>
              <p>
                Our website displays live competition data — including draws, results and ladders
                — sourced from the PlayHQ platform operated by Cricket Australia. This data is
                publicly available and accessed via the PlayHQ API. We do not share any personal
                information with PlayHQ through our website. Member registrations, scorecards and
                player data remain subject to Cricket Australia&apos;s Privacy Policy
                (www.cricket.com.au/privacy-policy).
              </p>

              <SubHeading>3.3 Vercel (Website Hosting)</SubHeading>
              <p>
                Our website is hosted on Vercel. Vercel may collect standard server log data
                (such as IP addresses and browser types) as part of hosting operations. This data
                is used for security and performance purposes only and is governed by Vercel&apos;s
                Privacy Policy (vercel.com/legal/privacy-policy).
              </p>
            </PolicySection>

            {/* ── 4. How We Use Your Information ── */}
            <PolicySection number="4" title="How We Use Your Information">
              <p>
                We use the personal information we collect only for the purpose for which it was
                provided, including:
              </p>
              <ul>
                <li>Responding to contact form enquiries</li>
                <li>Publishing club news, event photos and match coverage on our website</li>
                <li>
                  Communicating important club updates to members who have provided their contact
                  details
                </li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with any third party for
                commercial purposes.
              </p>
            </PolicySection>

            {/* ── 5. Storage & Security ── */}
            <PolicySection number="5" title="How We Store and Protect Your Information">
              <p>
                Contact form submissions are delivered directly to the club&apos;s designated
                email addresses and are not stored in a website database. We take reasonable
                steps to ensure your information is protected from unauthorised access, loss or
                misuse.
              </p>
              <p>
                Photos published on our website are managed by the club committee. We do not
                store member photos on third-party image hosting services accessible to the
                general public beyond what is published on our website.
              </p>
              <p>
                While we take reasonable precautions, no data transmission over the internet is
                100% secure. We cannot guarantee absolute security of information transmitted to
                or from our website.
              </p>
            </PolicySection>

            {/* ── 6. Cookies ── */}
            <PolicySection number="6" title="Cookies">
              <p>
                Our website may use essential cookies to ensure basic functionality. We do not
                use tracking cookies, advertising cookies, or analytics cookies. If you access
                our website via a link from Facebook or Instagram, those platforms may set their
                own cookies in accordance with their privacy policies.
              </p>
              <p>
                You can control cookie settings through your browser. Disabling cookies will not
                affect your ability to use our website.
              </p>
            </PolicySection>

            {/* ── 7. Your Rights ── */}
            <PolicySection number="7" title="Your Rights">
              <p>Under the Australian Privacy Act, you have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request removal of a photo in which you or your child appears</li>
                <li>
                  Make a complaint if you believe we have mishandled your personal information
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details below. We
                will respond to all requests within a reasonable time, generally within 30 days.
              </p>
            </PolicySection>

            {/* ── 8. Children's Privacy ── */}
            <PolicySection number="8" title="Children's Privacy">
              <p>
                Wellington Point Cricket Club is a family-oriented community club and we take the
                privacy and safety of children seriously. We do not knowingly collect personal
                information from children under 13 without the consent of a parent or guardian.
              </p>
              <p>
                Photos of minors published on our website are done so with the implied consent of
                families participating in club activities. If you wish to have a photo of your
                child removed from our website, please contact us immediately and we will act
                promptly.
              </p>
              <p>
                Member registrations for minors are managed by parents and guardians via the
                PlayHQ platform and are subject to Cricket Australia&apos;s privacy practices.
              </p>
            </PolicySection>

            {/* ── 9. Changes ── */}
            <PolicySection number="9" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or legal obligations. The updated policy will be posted on our website
                with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this
                policy periodically.
              </p>
            </PolicySection>

            {/* ── 10. Contact Us ── */}
            <PolicySection number="10" title="Contact Us">
              <p>
                For any privacy-related enquiries, requests or complaints, please contact:
              </p>

              <div className="mt-5 mb-5 bg-white border border-grey-light rounded-xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="font-condensed text-[9px] font-bold tracking-[0.16em] uppercase text-gold mb-1">Club</div>
                  <div className="font-condensed text-[13px] font-bold text-green-dark">Wellington Point Cricket Club</div>
                  <div className="text-[12px] text-wello-grey">Wello Wildcats</div>
                  <div className="text-[12px] text-wello-grey mt-1">16 Ivy Street, Thorneside QLD 4158</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="font-condensed text-[9px] font-bold tracking-[0.16em] uppercase text-gold mb-0.5">President</div>
                    <div className="font-condensed text-[13px] font-bold text-green-dark">Gurinder Singh Rangi</div>
                    <a href="mailto:president@wellowildcats.com.au"
                      className="text-[12px] text-wello-grey no-underline hover:text-gold transition-colors">
                      president@wellowildcats.com.au
                    </a>
                  </div>
                  <div>
                    <div className="font-condensed text-[9px] font-bold tracking-[0.16em] uppercase text-gold mb-0.5">Secretary</div>
                    <div className="font-condensed text-[13px] font-bold text-green-dark">Jamieson Stainburn</div>
                    <a href="mailto:secretary@wellowildcats.com.au"
                      className="text-[12px] text-wello-grey no-underline hover:text-gold transition-colors">
                      secretary@wellowildcats.com.au
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-[12px] text-wello-grey italic">
                If you are not satisfied with our response, you may contact the Office of the
                Australian Information Commissioner (OAIC) at{" "}
                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer"
                  className="text-wello-grey hover:text-gold no-underline transition-colors">
                  www.oaic.gov.au
                </a>{" "}
                or by calling 1300 363 992.
              </p>
            </PolicySection>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-grey-light text-center">
              <p className="font-condensed text-[10px] font-bold tracking-[0.14em] uppercase text-gold">
                Wellington Point Cricket Club &nbsp;·&nbsp; Est. 1895 &nbsp;·&nbsp; www.wellowildcats.com.au
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 pb-10 border-b border-grey-light last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-condensed text-[11px] font-bold tracking-[0.16em] text-gold">{number}.</span>
        <h2 className="font-serif text-[18px] md:text-[22px] font-black text-green-dark leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-3 text-[13px] md:text-[14px] text-wello-grey leading-[1.85]
                      [&_p]:mb-0
                      [&_ul]:list-none [&_ul]:pl-4 [&_ul]:space-y-1.5
                      [&_ul_li]:before:content-['›'] [&_ul_li]:before:text-gold
                      [&_ul_li]:before:font-bold [&_ul_li]:before:mr-2
                      [&_strong]:text-green-dark [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-condensed text-[11px] font-bold tracking-[0.14em] uppercase text-green-dark mt-5 mb-2">
      {children}
    </h3>
  );
}
