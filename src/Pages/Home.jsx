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
            aboutHeading: "Our Work",
            about: "We, as Indians and descendants of the Mahabharata, are the inheritors of eternal truth. To express the emotions of this eternal truth, we awaken and manifest our feelings. Not only this, but through the actions and reactions of true words, and the processes and counter-processes, we inspire universal ideas and imagination rooted in scientific unity by using natural words. Through this, we attempt to discover the power, structure, and beauty of language in the pursuit of truth.  In our noble endeavors, we use true words in harmony with sound, rhythm, and meaning to actively engage the movements of the human body more rapidly. The innovative pronunciation of true words, through sound vibrations, stimulates the subtle and ultra-subtle pores of the internal organs, enabling healing through articulation itself. In this manner, the internal organs of the human body undergo a natural form of exercise, igniting one's life force more effectively and inspiring the process and counter-process of 'Illuminate Yourself' (Swayam Deep Bhav).ough the letters of these innovative true words, we create poems, ghazals, qawwalis, essays, literature, couplets (dohe), hymns (abhangs), and verses (shloks). Alongside, in news channels, short films, and movie scripting and narration, we focus on understanding the conceptual and truthful scientific ideas behind the writers' works. Our goal is to establish an effective global dialogue, ensuring that every viewer is deeply engaged for their physical well-being.  We strive to understand the literature and languages of the world through innovative contributions of proper knowledge, combining linguistic skills with communication and creativity. By doing so, we present a vision of universal unity and harmony based on scientific, equitable, and truth-centered principles through the 'Natural Root Word Science' of Shabdkoshvinashabd Word Therapy.",
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
            sub_heading: "नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचे शोधाचा सत्यशोध शोधण्याचा प्रयत्न करत असतो.",
            aboutHeading: "आमचे कार्य",
            about: "आम्ही भारतिय @ महाभारतिय लोक व भारत देश एक शास्वत सत्याचे धनी असल्याने शास्वत सत्याच्या भावना व्यक्त करण्यासाठी भावना जागृत करून प्रकट करत असतो.एवढेच नव्हे तर सतशब्दांच्या कृती प्रतिकृतीं, प्रक्रिया प्रतिप्रक्रियांव्दारे  वैज्ञानिक एकतेच्या वैश्विक कल्पनां व कल्पनाशक्तीला प्रेरणा देणारे नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचे शोधाचा सत्यशोध  शोधण्याचा प्रयत्न करत असतो.आमच्या या कार्याचे सत्कार्यामध्ये स्वर,लय व अर्थासोबत सतशब्दां द्वारेच मानवी शरिरातील होत असलेल्या हालचाली अधिक गतीने सक्रिय सहभागी करण्यासाठी आविष्कारी सतशब्द उच्चाराचे  ध्वनींव्दारेच मानवी शरिरातील अंतर्गत अवयवांच्या सुक्ष्म अतीसुक्ष्म छिद्र  सछिद्रांची अधिक तिव्रतेणे उघडझाप करून उच्चारा व्दारेच उपचार करतील.अशाप्रकारे मानवी शरिरातील अंतर्गत सर्व अवयवांचा नैसर्गिक पद्धतीचे व्यायामाने स्वतः व्दारे स्वतःचा प्राण अधिक प्रभावीपणे प्रज्वलित करुण 'स्वयं दिप भव' ची प्रक्रियाप्रतिप्रक्रिया करण्यास प्रेरित होतो . आविष्कारी सतशब्दांचे  अक्षरांव्दारे कविता, गझल, कव्वाली,निबंध, साहित्य,दोहे,अभंग, श्लोक सोबत वृत्त वाहिन्यां, लघु चित्रपट, चित्रपटांचे वाचन व लेखन झालेले असतांनाही त्यातिल लेखकांच्या लिखाणाच्या संकल्पित कल्पना, सतकल्पना वैज्ञानिक पद्धतीने समताधिष्ठित सत्यधिष्ठिततेसाठी लेखन व विश्लेषण यांचा प्रभावीपणे वैश्विक संवाद साधण्यासाठी, विश्वातील प्रत्येक प्रेक्षकांना प्रेक्षकांचे  शरिरिक कल्याणासाठी गूंतवुण ठेवण्यासाठी कार्य करत आहोत. प्रत्येक भाषेतील साहित्य आणि प्रत्येक भाषा समजुन घेण्यासाठी योग्य ज्ञानाचे आविष्कारी योगदाणाने  भाषिक कौशल्यासह संभाषण, सर्जनशीलता एकत्रीत करून वैज्ञानिक, समताधिष्ठित सत्य व सत्यधिष्ठित समता आधारित  विश्वव्यापी एकता एकात्मतेचे दर्शन नैसर्गिक मुळ शब्द विज्ञानचे 'शब्दकोषविनाशब्द' शब्दपॅथी व्दारेच देत आहेत.",
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
                <div className=" items-center gap-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-slideIn">{content[language].aboutHeading}</h2>
                    {/* Text Section */}
                    <p className="text-gray-700 text-lg animate-slideIn">{content[language].about}</p>

                </div>
            </section>


            {/*BLOGS */}
            <section className="py-10 px-6 text-center animate-slideIn">
                <h2 className="animate-slideIn text-2xl font-bold text-gray-800 mb-4">{content[language].latest}</h2>
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
