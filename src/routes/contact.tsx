import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Sample Request — acespaces" },
      {
        name: "description",
        content:
          "Request physical Corian® solid surface sample boxes, submit architectural drawings for quoting, or schedule a visit to our Bengaluru slab gallery and atelier.",
      },
      { property: "og:title", content: "Contact & Sample Request — acespaces" },
      {
        property: "og:description",
        content:
          "Connect with acespaces in Bengaluru. Physical sample dispatch in 72 hours, 48-hour drawing reviews, and architectural consultations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Sample Request",
    location: "Bengaluru",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Contact &amp; Enquiries</p>
        <div className="mt-5 grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <h1 className="display-xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.94]">
            Start a conversation.
          </h1>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Request physical sample boxes, submit CAD drawings for engineering quotes, or schedule a
            visit to our Bengaluru slab gallery and fabrication facility.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div className="border border-line bg-paper p-8 md:p-12">
            {submitted ? (
              <div className="py-12 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-signal text-paper">
                  ✓
                </span>
                <h2 className="display-md mt-6 text-3xl">Enquiry received.</h2>
                <p className="mt-3 max-w-md mx-auto text-[14px] leading-relaxed text-ink-soft">
                  Thank you, {formData.name || "friend"}. Our Bengaluru studio team will review your
                  project details and follow up within 24 hours. Sample boxes dispatch within 72
                  hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border border-ink bg-transparent px-6 py-2.5 text-[12px] font-semibold tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="label-micro block text-ink">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ar. Priya Sharma"
                    className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="label-micro block text-ink">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@atelier.in"
                      className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-micro block text-ink">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                      className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="type" className="label-micro block text-ink">
                      Enquiry Focus
                    </label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink"
                    >
                      <option value="Sample Request">Physical Sample Kit</option>
                      <option value="Fabrication Quote">Fabrication Quote (with drawings)</option>
                      <option value="Studio Visit">Bengaluru Studio Visit</option>
                      <option value="Architect Consultation">Architectural Consultation</option>
                      <option value="General Enquiry">General Information</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="label-micro block text-ink">
                      Project City
                    </label>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink"
                    >
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Goa">Goa</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other">Other India / Export</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label-micro block text-ink">
                    Project Brief &amp; Dimensions / Sample Preferences
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project typologies, estimated dimensions, target completion date, or specific colour swatches..."
                    className="mt-2 w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 bg-ink px-8 py-3.5 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal sm:w-auto"
                  >
                    Send enquiry
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Studio Details & Direct Contact */}
          <div className="space-y-6">
            <div className="border border-line bg-secondary p-8">
              <span className="label-micro text-signal">Bengaluru Atelier</span>
              <h2 className="font-display mt-3 text-2xl font-light text-ink">
                acespaces Studio &amp; Facility
              </h2>
              <div className="mt-6 space-y-4 text-[14px] text-ink-soft">
                <p>
                  <strong className="block text-ink">Address</strong>
                  Bengaluru Fabrication Atelier &amp; Slab Gallery, Karnataka, India
                </p>
                <p>
                  <strong className="block text-ink">Hours</strong>
                  Monday – Saturday: 9:30 AM – 6:30 PM IST
                </p>
                <p>
                  <strong className="block text-ink">Email</strong>
                  <a href="mailto:studio@acespaces.in" className="hover-underline text-ink">
                    studio@acespaces.in
                  </a>
                </p>
                <p>
                  <strong className="block text-ink">WhatsApp &amp; Direct Phone</strong>
                  <a
                    href="https://wa.me/919741044776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline text-ink"
                  >
                    +91 97410 44776
                  </a>
                </p>
              </div>
            </div>

            <div className="border border-line bg-paper p-8">
              <span className="label-micro text-ink-soft">Drawing Submission Protocol</span>
              <h3 className="font-display mt-3 text-lg font-medium text-ink">
                Accepted File Formats
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                For accurate CNC nesting and yield quotes, email your 2D CAD files (
                <code>.dwg</code>, <code>.dxf</code>) or 3D models (<code>.3dm</code>,{" "}
                <code>.stp</code>, <code>.skp</code>) to <strong>studio@acespaces.in</strong>.
              </p>
              <div className="mt-4 border-t border-line pt-4 text-[12px] text-ink-soft">
                Feasibility and initial sheet yield calculated within 48 business hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
