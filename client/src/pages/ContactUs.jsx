import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const ContactUs = () => (
  <div className="w-full min-h-screen bg-white">
    {/* Hero Section */}
    <div className="bg-primary-dark text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold font-serif mb-4">Contact Us</h1>
      <p className="text-md max-w-3xl text-accent-light mx-auto">
        Reach out to join our academic network. Whether you want to collaborate,
        publish, or simply learn more—your ideas, research, and insights are welcome here.
      </p>
    </div>

    {/* Contact Info Section */}
    <div className="w-full flex justify-center px-4 py-16 bg-primary-light/25">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">Contact Information</h2>
        <div className="space-y-6 text-text">
        <div className="flex items-start gap-4">
            <Building2 className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-primary">Office</h3>
              <p className="text-subtext">Office number 30, Nihard Plaza,<br />Near Zakir Hussain school,<br />AMU Aligarh, UP, 202001</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-primary">Publisher Address</h3>
              <p className="text-subtext">IISPPR PUBLICATION,<br />Khera Afghan, Saharanpur, UP 247340</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-primary">Phone</h3>
              <p className="text-subtext">+91 95287 82464</p>
     
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-primary">Email</h3>
              <p className="text-subtext">iisppresearch@gmail.com</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
