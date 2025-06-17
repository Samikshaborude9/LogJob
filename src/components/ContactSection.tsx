export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9fafe] px-6 py-12">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* Left Info Section */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm text-white/90 mb-10">
              Not sure what you need? The team at LogJob will be happy to listen to you and suggest hiring solutions you hadn’t considered.
            </p>
          </div>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              📧 <span>info@logjob.com</span>
            </p>
            <p className="flex items-center gap-2">
              📞 <span>Support: (+91) 123 456 7890</span>
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="p-10 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            We’d love to hear from you! <br /> Let’s get in touch
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input-style" />
            <input type="text" placeholder="Company" className="input-style" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="input-style" />
            <input type="tel" placeholder="Phone number" className="input-style" />
          </div>

          <input type="text" placeholder="Address" className="input-style" />

          <textarea placeholder="Your Message" rows={4} className="input-style resize-none" />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-[#3c2366] text-white py-3 px-6 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
