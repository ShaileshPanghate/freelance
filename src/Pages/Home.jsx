import { useState, useEffect } from "react";
import Navbar from "../Components/Navbr";
import { ArrowRight, ArrowUp, MessageCircle } from "lucide-react";
import Blogs from "../Components/Blogs";

const Home = () => {
    const [language, setLanguage] = useState("mr");

    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down 200px
    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const content = {
        en: {
            title: "Transforming Ideas into Impactful Words",
            sub_heading: "Transform thoughts into stories, poems, letters, speeches",
            about: "We explores the power, structure, and beauty of language, using words to convey ideas, evoke emotions, and inspire action. Our work often involves writing and analyzing various forms of text—such as letters, poems, essays, and dohas—while experimenting with tone, rhythm, and meaning. We combine creativity with linguistic expertise to communicate effectively, engage audiences, and contribute to literature and language understanding.",
            contributions: "Contributions",
            linguistics: "Linguistics & Cognitive Science",
            politics: "Politics & Media Analysis",
            books: "Books & Publications",
            quotes: "Famous Quotes",
            latest: "Latest Articles & Writtings",
            cta: "Discover Noam Chomsky's Work"
        },
        mr: {
            title: "कल्पनांना प्रभावी शब्दांमध्ये रूपांतरित करणे",
            sub_heading: "विचारांना कथा, कविता, पत्रे, भाषणांमध्ये रूपांतरित करा",
            about: "आम्ही कल्पना व्यक्त करण्यासाठी, भावना जागृत करण्यासाठी आणि कृतीची प्रेरणा देण्यासाठी शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्य शोधतो. आमच्या कार्यामध्ये स्वर, लय आणि अर्थ यांचा प्रयोग करताना अक्षरे, कविता, निबंध आणि दोहे यासारख्या मजकुराच्या विविध प्रकारांचे लेखन आणि विश्लेषण यांचा समावेश असतो. आम्ही प्रभावीपणे संवाद साधण्यासाठी, प्रेक्षकांना गुंतवून ठेवण्यासाठी आणि साहित्य आणि भाषा समजून घेण्यासाठी योगदान देण्यासाठी भाषिक कौशल्यासह सर्जनशीलता एकत्र करतो.",
            contributions: "योगदान",
            linguistics: "भाषाशास्त्र आणि संज्ञान शास्त्र",
            politics: "राजकारण आणि माध्यम विश्लेषण",
            books: "पुस्तके आणि प्रकाशने",
            quotes: "प्रसिद्ध उद्धरण",
            latest: "नवीन लेख आणि लेखन",
            cta: "नोम चॉम्स्की यांचे कार्य शोधा"
        }
    };
    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            {/* Navbar */}
            <Navbar className="relative z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center" language={language} setLanguage={setLanguage} />

            {/* Hero Section */}
            <section
                className="relative min-h-[50vh] z-20 px-6 py-12  text-white bg-cover bg-center flex flex-col justify-center"
            >
                {/* Background Overlay for Blur Effect */}
                <div
                    className="absolute inset-0 bg-cover bg-center lazy"
                    style={{ backgroundImage: "url(./Banner.png)", backdropFilter: "blur(8px)" }}
                ></div>

                {/* Content with Higher Z-Index */}
                <div className="relative z-20 max-w-7xl mx-auto text-left">
                    {/* Title */}
                    <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight relative inline-block after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-1000 hover:after:w-full animate-slideIn">
                        {content[language].title}
                    </h1>

                    {/* Sub-heading */}
                    <h4 className="text-white mt-4 text-lg sm:text-2xl lg:text-3xl animate-slideIn">
                        {content[language].sub_heading}
                    </h4>

                    {/* Button */}
                    <button onClick={() => window.open("https://wa.me/7757814825", "_blank")} className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-900 shadow-lg flex items-center justify-center gap-2 group transform transition-transform duration-300 hover:scale-120">
                        Chat On What's App
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                    </button>
                </div>
            </section>



            {/* About */}
            <section className="py-10 px-6 max-w-7xl mx-auto text-center">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Image Section */}
                    <img
                        src="./About-Us.png"
                        alt="Noam Chomsky"
                        className="w-full md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-110 "
                    />

                    {/* Text Section */}
                    <div className=" md:w-1/2 text-center md:text-left">
                        <p className="text-gray-700 text-lg animate-slideIn">{content[language].about}</p>
                    </div>
                </div>
            </section>


            {/*BLOGS */}
            <section className="py-10 px-6 text-center animate-slideIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{content[language].latest}</h2>
                <Blogs />
            </section>

            {/* Footer */}
            <footer className="py-6 px-6 bg-gray-900 text-white text-center">
                &copy; 2025. All Rights Reserved.
            </footer>

            {/* for top arrow */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
            <button
                onClick={() => window.open("https://wa.me/7757814825", "_blank")}
                className="fixed bottom-20 right-6 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
            >
                <MessageCircle className="w-6 h-6" />
            </button>
        </div>
    );
}

export default Home;
