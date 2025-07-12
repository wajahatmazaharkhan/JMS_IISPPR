import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const ContactUs = () => (
  <div className="w-full min-h-screen bg-white">
    {/* Hero Section */}
    <div className="bg-primary-dark text-white py-16 px-4 sm:px-6 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold font-serif mb-6 sm:mb-8">
        Contact Us
      </h1>
      <p className="text-base sm:text-lg max-w-3xl mx-auto text-accent-light">
        Reach out to join our academic network. Whether you want to collaborate,
        publish, or simply learn more—your ideas, research, and insights are welcome here.
      </p>
    </div>

    {/* Contact Info Section */}
    <div className="w-full flex justify-center px-4 py-12 sm:py-16 bg-primary-light/25">
      <div className="bg-white max-w-4xl w-full rounded-lg shadow-md p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-dark text-center mt-3 sm:mt-5 mb-10 sm:mb-12">
          Contact Information
        </h2>
        <div className="space-y-8 sm:space-y-9 text-text">
          {/* Office */}
          <div className="flex items-start gap-4">
            <Building2 className="w-6 h-6 text-primary mt-1 ml-2 sm:ml-12" />
            <div>
              <h3 className="font-semibold text-primary">Office</h3>
              <p className="text-subtext">
                Office number 30, Nihard Plaza,<br />
                Near Zakir Hussain school,<br />
                AMU Aligarh, UP, 202001
              </p>
            </div>
          </div>

          {/* Publisher Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary mt-1 ml-2 sm:ml-12" />
            <div>
              <h3 className="font-semibold text-primary">Publisher Address</h3>
              <p className="text-subtext">
                IISPPR PUBLICATION,<br />
                Khera Afghan, Saharanpur, UP 247340
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary mt-1 ml-2 sm:ml-12" />
            <div>
              <h3 className="font-semibold text-primary">Phone</h3>
              <p className="text-subtext">+91 95287 82464</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary mt-1 ml-2 sm:ml-12" />
            <div className="mb-4">
              <h3 className="font-semibold text-primary">Email</h3>
              <p className="text-subtext break-all">iisppresearch@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
