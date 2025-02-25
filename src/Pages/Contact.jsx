import Navbar from '../Components/Navbr'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {

    return (
        <>
            {/* Navbar */}
            <Navbar className="relative z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center" />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
                    <h2 className="text-4xl font-bold text-center mb-6">📞 Get in Touch</h2>

                    <div className="space-y-5">

                        <div className="flex items-center space-x-3">
                            <Phone className="text-green-600" />
                            <span className="text-gray-700">+91 7757814825</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="text-blue-600" />
                            <span className="text-gray-700">contact@example.com</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <MapPin className="text-red-600" />
                            <span className="text-gray-700">123, Business Street, Mumbai, India</span>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mt-10 mb-4">📍 Location</h3>
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238130.15440691105!2d78.90769835448079!3d21.16100605022737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1740474258322!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <footer className="py-6 px-6 bg-gray-900 text-white text-center">
                &copy; 2025. All Rights Reserved.
            </footer>

        </>
    )
}

export default Contact