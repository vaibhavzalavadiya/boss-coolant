import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_dzi7ay5", "template_f8a8bgq", formData, "kTR8adugPvmZ6GaT-")

      .then((result) => {
          alert("Message sent successfully!");
          setFormData({ name: '', phone: '', email: '', message: '' });
      }, (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
      });
  };

  const socialLinks = [
    { icon: Facebook, bg: "bg-blue-800", hover: "hover:bg-blue-700" },
    { icon: Twitter, bg: "bg-blue-400", hover: "hover:bg-blue-500" },
    { icon: Instagram, bg: "bg-pink-600", hover: "hover:bg-pink-700" },
    { icon: MessageSquare, bg: "bg-green-600", hover: "hover:bg-green-700" }
  ];

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-md">
            {["name", "phone", "email"].map((field, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={field} className="block text-sm font-medium mb-2">
                  {field === "name" ? "Your Name" :
                   field === "phone" ? "Phone Number" :
                   "Email Address"}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 text-white focus:outline-none focus:border-blue-500"
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 text-white focus:outline-none focus:border-blue-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              {[
                { Icon: MapPin, label: "Our Location", text: "123 Industrial Area, Phase 2, New Delhi, India" },
                { Icon: Phone, label: "Call Us", text: "+91 98765 43210\n+91 12345 67890" },
                { Icon: Mail, label: "Email Us", text: "info@BossCoolant.com\nsales@BossCoolant.com" },
                { Icon: Clock, label: "Business Hours", text: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed" },
              ].map(({ Icon, label, text }, i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-4 mt-1"><Icon className="text-blue-400" size={18} /></div>
                  <div>
                    <h4 className="font-semibold mb-1">{label}</h4>
                    {text.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-300">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href="#" className={`w-10 h-10 ${link.bg} rounded-full flex items-center justify-center ${link.hover} transition`}>
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
