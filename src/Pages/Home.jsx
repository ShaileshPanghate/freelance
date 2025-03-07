import { useState, useEffect } from "react";
import Navbar from "../Components/Navbr";
import { ArrowRight, ArrowUp, Loader, MessageCircle } from "lucide-react";
import Blogs from "../Components/Blogs";
import Imp_of_Words from "../Components/Imp_of_Words";


const Home = () => {
    const [language, setLanguage] = useState("mr");

    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    // Show button after scrolling down 200px
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

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
            latest: "Our Latest Writtings",
            imgAbout: "The concept of NOWSBANSIU originates from the idea of natural word formation through letters, inspired by the curves, twists, and ups and downs of the dense forest paths in the Melghat region. This symbolizes the creation of fundamental words that uphold equality-based truth and truth-based equality, envisioning a scientifically advanced India rooted in the wisdom of the Mahabharata.As a representation of this vision, the Bansi Group's students symbolically showcase the unity and integration of the seven religions, offering a glimpse of the Melghats harmony through a remarkable Meghdhavi moment.",
            dohe: "Importance of Words",
            scan: "Experience the magic of words in a new way! Using natural words, I strive to explore the power, structure, and beauty of language in the quest for truth. 📌 Scan now and immerse yourself in the art of language!",

        },
        mr: {
            title: "कल्पनांना प्रभावी शब्दांमध्ये रूपांतरित करणे",
            sub_heading: "नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचे शोधाचा सत्यशोध शोधण्याचा प्रयत्न करत असतो.",
            aboutHeading: "आमचे कार्य",
            about: `"NOWSBANSIU COMPANY" नैसर्गिक मुळ शब्द विज्ञान" ची 'शब्दकोषविनाशब्द'   "शब्दपॅथी" .            नैसर्गिक मुळ शब्दांचे विज्ञान तपासून  सतकल्पनांना कल्पनाच न ठेवता त्या कल्पनाशक्तीला अधिक प्रभावी शब्दांमध्ये रुपांतरित करून भाषेची शक्ती, रचना आणि सौंदर्याचा शोध,सत्यशोध शोधून मानवी सौंदर्यात वृद्धी व मानवास दिर्घायुष्यी कसे करता येईल याचा सत्यशोधकीय शोध  शब्दकोषविनाशब्द  ध्वनी उच्चारा व्दारेच उपचार केल्यास   मानवी जीवनात आत्मज्ञानानं प्रेरित होऊन  साक्षात्कारी आनंदी मेघ्धावी जिवन जगण्याची कला, तृप्ती,आनंदी व   शतकायूष्यी जिवन कसे जगता येईल याचा प्रयत्न करत असतो."`,
            details: `"उच्चारा   व्दारेच  उपचार" आम्ही भारतिय @ महाभारतिय लोक व भारत देश एक शास्वत सत्याचे धनी असल्याने  सत्याच्या भावना जागृत करण्यासाठी शास्वत सत्य प्रकट करत असतो. सतशब्दांच्या कृती प्रतिकृतीं, प्रक्रिया प्रतिप्रक्रियांव्दारे  वैज्ञानिक एकतेच्या वैश्विक कल्पनांना सतकल्पनाशक्तीत प्रेरणा देणारे नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचा सत्यशोध  शोधण्याचा प्रयत्नही करत असतो. आमच्या   कार्यांचे  सत्कार्यामध्ये  स्वर , लय व  अर्था व्दारेच सतशब्दीत शब्दकोषविनाशब्दांनी मानवी शरिरातील होत असलेल्या हालचाली अधिक गतीने सक्रिय  करण्यासाठी अविष्कारीत ध्वनी उच्चारा व्दारेच मानवी शरिरातील सर्व अवयवांचे सुक्ष्म अतीसुक्ष्म छिद्रांची उघडझाप अधिक तिव्र गतीने सक्रिय होउन उच्चारा व्दारेच उपचार करतील .  अशाप्रकारे मानवी शरिरातील सर्व अंतर्गत अवयवांचा व्यायाम नैसर्गिक पद्धतीने स्वतःव्दारे स्वतःचा प्राण    'स्वयं दिप भव'  करण्यासाठी प्रभावी  प्रक्रियाप्रतिप्रक्रिया प्रज्वलित करण्यास प्रेरित होत असतो. अक्षरा व्दारे सतशब्दीत झालेल्या कविता, गझल,गित, कव्वाली, निबंध, साहित्य, दोहे, अभंग, आरती,प्रार्थना,शेर,  श्लोक, वृत्त    वाहिन्यां,मालिका,लघुचित्रपट, चित्रपटांचे लेखनाचे लेखक व कवीच्या सतसंकल्पित कल्पनांना सतशब्दीत शब्दकोषविनाशब्दांचे     सतकल्पनेव्दारे रुपांतरित करून व्यायामित वाचनिय करता येते . सत्यसमताधिष्ठिते सोबत  वैज्ञानिक दृष्टीकोनातून लेखन विश्लेषण यांचा प्रभावीपणे वैश्विक संवाद साधण्यासाठी, विश्वातील प्रत्येक प्रेक्षकांना प्रेक्षकांचे शारिरिक कल्याण  करतांना समन्वयी सहकार्याने स्वतःचे आयुष्य स्वतःच कल्याणित झाल्याच्या अनुभवाची अनुभूती व्दारे लाभान्वित झालेवरच आमचे पुर्वसम्मतीने इतर सर्वांना  लाभार्थीत  करण्याचे कार्य करावे वा आम्ही कार्य करत आहोतच. प्रत्येक भाषेतील साहित्य आणि भाषा समजुन घेण्यासाठी योग्य ज्ञानाचे आविष्कारी         योगदाणाने  भाषिक      कौशल्यासह संभाषण, सर्जनशीलता एकत्रीत करून विश्वातील सर्वभाषिक शब्दकोषातील प्रत्येक शब्दाला वैज्ञानिक, समताधिष्ठित सत्य व सत्यधिष्ठित समता आधारित  विश्वव्यापी एकता एकात्मता  "नैसर्गिक मुळ शब्द विज्ञान" व्दारे 'शब्दकोषविनाशब्द'   म्हणजेच सतशब्दांचा पुरवठा '"शब्दपॅथी'" व्दारेच संबंधिताच्या पुर्वसम्मतीनेच देत आहोत.`,
            latest: "आमचे नवीनतम लेखन",
            imgAbout: `NOWSBANSIU     बाबतीत संकल्पना सतकल्पनांचा उगम व उत्पत्ती मेळघाट जन्मभूमी असलेल्या  आळ-वळण,  नागमोळी व चढउतार मार्गाने घनदाट जंगलातील चिन्हांकित मुळ आकडे,  अक्षरांनीच "नैसर्गिक मुळ शब्द विज्ञान" चे सत्यशोधनाद्वारे वैश्विक समताधिष्ठित सत्य व सत्यधिष्ठित      समताधारी विज्ञानाने भारत @ महाभारतात    सात धर्मांची एकता व एकात्मतेचे दर्शन देताना मेळघाटातील बंसी ग्रुप चे विद्यार्थी  विद्यार्थिनींचे प्रतिकात्मक उद्घाटनप्रसंगी   मेघ्धावी क्षणचित्र.`,
            dohe: "शब्दांचे सामर्थ्य व महत्व",
            scan: "शब्दांच्या जादूचा नवा अनुभव घ्या! नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचे शोधाचा सत्यशोध शोधण्याचा प्रयत्न करत असतो.📌 आत्ता स्कॅन करा आणि भाषेच्या कलेत मग्न व्हा!",
            lastDetails: `शेवटी संत अवधूत महाराज (सावंगा विठोबा) सुद्धा मौखिक परंपरेतील त्यांना प्राप्त झालेली शब्दविद्येतिल  नैसर्गिक मुळ शब्दांसह वैद्य न राहिल्याने  कशा शब्द कल्पनाच गायब होण्याची संभावना असुन ज्यामुळे मानवी शरीरावर त्याचे काय दुष्परिणाम होतात व होतिल ? याबाबत शब्द विकृततेने शरिराला कसा क्षयरोग जाहतो  व शब्द सतकृततेने कसे औषध दिधले(दिले) तर अहंकारी संशय कमी होतो; याबाबत शिष्यांना मौखिक परंपरेतून अवधुती भजनात शब्दांचे महत्त्व, समर्थता, विज्ञाणी ज्ञाना बाबत जनतेची  श्रवणशक्ती वृध्दींगततेव्दारे 'स्वयं दिप भव' करण्यासाठी  अवधूती भजन गायन करतांना गातात व  बोलतात.                  '                       "'शब्द बुडाला,                   कल्पना मेली!                      अहंकारी क्षयरोग जाहला!!                  औषध दिधले, संशय रोग गेला!                 शब्द बाजार मावळला, जिव मौन झाला!!        गुरू राज वैद्य भेटला!    आपणास नाही जाहला!!                   गुरू करें श्रवण भक्ती ! करी नित्य मनन दृष्टांत युक्ती !! "'                    म्हणजेच यापूर्वी सुद्धा अनेक थोर महापुरुष,राजे, महाराज, संत, महात्मे, तथागत भ. बुद्ध,भ.महाविर जैन, मो.पैगंबर, प्रभु येशू, सुफी संत , गुरू नानक चाणक्य, देवनामप्रिय सम्राट अशोक, विश्वसंत कबीर महाराज, जगदगुरू संत तुकाराम, गुरू गोविंदसिंग, राष्ट्रसंत तुकडोजी महाराज, सत्यशोधक महात्मा ज्योतिबा फुले, संत रविदास, शिवाजी महाराज, अकबर बादशहा,समर्थ रामदास स्वामी ,बाळ गंगाधर टिळक, निवृत्ती महाराज, संत ज्ञानेश्वर, शाहू महाराज, स्वामी विवेकानंद,साने गुरुजी, डॉ बाबासाहेब आंबेडकर, संत गाडगेबाबा सारखे अनेकांनी शिकवणी द्वारे  शब्दशः शब्दांतिल शब्द कसे शिकावे हे शिकवले पण पुर्वजांचे विचार समजून घेवून त्यांना कायमचे श्रवण न केल्याने आपणास "शिका" हे कळलेच नाही; त्यामुळे नाविन्यपूर्ण  "समान व्यायामीत सतशीक्षण" घेणे अपेक्षितच नव्हे तर जिवनावश्यक आहे. शब्दांतील शब्द गायब झाली तर त्यातील कल्पना कल्पनाच राहु नये,तर त्या संकल्पनांना सतकल्पनेत रूपांतर करून अंमलात आणण्यासाठी "शब्दकोषविनाशब्दां"ची चिकित्सा होऊन शब्दांतिल सतशब्द  कळले तर वादग्रस्त शब्दांबाबत चे कायम स्वरुपी वाद, संशयाचे वातावरण व झगडे आहेत ते निर्माणच होणार नाहीत. संत अवधूत महाराज यांच्या म्हणण्यानुसार शब्द बाजार मावळला म्हणजे चंद्र सूर्य तारे  मावळल्यानंतर जसा अंधार पडतो तसेच शब्दंविद्येसह सितारे मावळले तर   सतश्रद्धेस सुद्धा अंधश्रद्धा व अंधश्रद्धेस सुद्धा सतश्रद्धा म्हटल्या जाते व जाईल. आजच्या प्रचलित शब्दांतील पुर्वजांचे गायब वा बदल झालेले अक्षर व शब्द पुर्ववत झाल्यास शब्दकोषविनाशब्दांचे उच्चारा व्दारेच प्रथमोपचार, उपचार व शब्दांन्न असुन सुद्धा  ते न मिळाल्याने बहुतांश मानवी जिवांचे प्राण  अल्पायुष्यातच गतप्राण होत आहेत.  आज जात,पात, धर्म, पंथ, मंदिर , मस्जिद, विहार , चर्च, गुरूद्वार, दर्ग्यासह ३३कोटी देव भगवान प्रभु सहित सर्व शब्दांचे शाब्दिक नावं गावांचे वादावरूनच  एकमेकांशी वादग्रस्त चकमकीं चे रोगांशिवाय  त्याच सतशब्दांच्या ध्वनी  उच्चारा व्दारेच मानवी शरीरातील अंतर्गत अवयवांच्या व्यायामाने सुक्ष्म अतीसुक्ष्म छिद्रांची उघड झाप करण्यासाठी लागणारा शब्दोपचारासह प्रथमोपचार व उपचार होते, तरीही त्या उपचाराअभावी   मानवी शरिराचे अंतिम टोकाला शब्दान्न न पोहोचल्याने आपण सर्व विविध दुर्धर रोगाने पछाडलेलो आहोत.अशाप्रकारे आपण सर्व भारतीयच नव्हे तर संपूर्ण विश्व समाज व्यवस्थेतच   जाणीव जागृती अभावी वेगवेगळ्या  रोगांनी  रोगग्रस्त झालेलो आहे . रोगग्रस्त मानव प्रथम   खर्चीक औषधोपचारासह शस्त्रक्रिया केल्यावरही सफलता प्राप्त न झाल्याने कालांतराने मौन मुके होतात आणि शेवटी कमावलेला धनसंपत्ती,  द्रव्य, ऐशोआराम, ऐश्वर्य, जमीन जायदाद, रूपये सर्व काही सोडून  कमी वयात मृत्यूच्या आहारी जाण्याऐवजी सुरवातीलाच शब्दकोषविनाशब्दांचे  उच्चारा व्दारेच प्रथमोपचारसह उपचारासाठी लागणारी  निष्णात चिकित्सेसाठी वेळोवेळी वेळीच शब्दकोषविनाशब्द ध्वनी उच्चारानेच उपचार दिल्या जाते ते शब्द त्वरित घ्यावी. आम्हा भारतीय, इंडियन, हिंन्दुस्तानी यांचे मानवी आरोग्याचे सशक्तीकरण व्यायामित सतशिक्षित शब्दज्ञान विज्ञानचे शब्दविद्येव्दारेच प्राप्त करून त्या रोगप्रतिकारक व रोगप्रतिबंधक शक्तीचा वापर  स्वसशक्तीकरणासाठी  सतशीक्षणाची मोहिम राबविल्यानेच महाभारतातील (अफगाणिस्तान १८७६ ब्रह्मदेश १९३५, श्रीलंका १९३७ भुतान १९०६, नेपाळ १९०७, पाकिस्तान(बांग्लादेश१९७१)१९४७ ) सुद्धा एकता एकात्मतेच्या  स्वसशक्तीकरणासाठी सर्व मिळून संघर्ष करू लागतील.  भारतीय, इंडियन,हिन्दुस्तानीयांचे  भविष्यात कधीही भरून न निघणारे सतशब्दांच्या समान व्यायामीत सतशीक्षणा अभावी अपरिमित नुकसान यापुर्वी झाले ते आपल्या सहकार्याने यापुढे होणार नाही. पर्यायाने आपण जे नेहमी ऐकतो की,   "जो भी कहेंगे सच ही कहेंगे सच के शिवा और कुछ ना कहेंगे" हे ब्रीद वाक्य आहे पण ते सफलतापुर्वक सिध्द व्हावे! म्हणून  नाविन्यपूर्ण          "नैसर्गिक मुळ शब्द विज्ञान" चे 'शब्दकोषविनाशब्द'   "शब्दपॅथी" द्वारे  शब्द ज्ञान व विज्ञान ची चिकित्सा  शब्द ध्वनींच्या शब्द उच्चारानेच मानवी शरीराचा प्रथमोपचारासह    उपचार, सर्व सतशब्दीत नैसर्गिक मुळ शब्दांचे नाव गावासह पुर्वजांचा इतिहास, व्यायामीत शब्दांचे सतशीक्षण, सतशब्दांव्दारे शब्दान्न, शब्दांच्या क्रिया प्रती प्रक्रिया व कृती प्रती प्रकृती ची पध्दत जाणून घेण्यासाठी आजच आपल्या  देशाचे  व आपले शहरांचे नावासह आपल्या कुटुंबातील सर्व नावं गावांचे नावांसह विवादास्पद नावं  वा विश्वातील कोणत्याही भाषेंतील  शब्दं वा देशांचे नावं गावांचे नावं, शहरांचे नावं  शास्त्रीय दृष्टिकोनातून समजून घेण्यासाठी  योगदान  घ्यावे.               स्वसशक्तीकरण करून दिर्घायुष्यच नव्हे तर शतकायुषमान होण्यासाठी सर्वच्या  सर्व दररोजच्या वापरातील शब्दकोषविनाशब्द शब्दसंचानुसार असलेल्या  लाटचा कोटा निर्धारित पध्दतीने  मुल्यवर्धित प्रतिक्षा कालावधी नुसार अर्ज स्वरूपात भरून राखीव करून घ्यावी हिच  सविनय नम्र विनंती व निमंत्रण......                    नम: सत: काळ:!!!    शत: शत: नमन!!!`
        }
    };
    return (
        <div className="font-sans bg-gray-100 min-h-screen flex items-center justify-center">

            {loading ? (<div className="w-20 h-20  border-4  border-t-blue-500 border-gray-300 rounded-full animate-spin 
    loader border-t-4  border-solid" />) : (
                <div>
                    {/* Navbar */}
                    < Navbar className="relative z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center" language={language} setLanguage={setLanguage} />

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
                    <section className="py-10 px-6 max-w-7xl mx-auto text-center ">
                        <div className=" items-center gap-6">
                            <h2 className="text-2xl underline font-bold text-gray-800 mb-4 animate-slideIn">{content[language].aboutHeading}</h2>
                            {/* Text Section */}
                            <p className="text-gray-700 text-lg animate-slideIn">{content[language].about}</p>

                        </div> <br /><br />
                        <div className=" items-center gap-6">
                            {/* <h2 className="text-2xl underline font-bold text-gray-800 mb-4 animate-slideIn">{content[language].aboutHeading}</h2> */}
                            {/* Text Section */}
                            <p className="text-gray-700 text-lg animate-slideIn">{content[language].details}</p>

                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mt-12 gap-6">
                            <img
                                src="ourStudents.jpeg"
                                alt="Our Students"
                                className="w-full sm:w-1/2 rounded-lg shadow-lg"
                            />
                            <p className="text-gray-700 text-lg text-center sm:text-left animate-slideIn">
                                {content[language].imgAbout}
                                <button onClick={() => window.open("https://wa.me/7757814825", "_blank")} className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-900 shadow-lg flex items-center justify-center gap-2 group transform transition-transform duration-300 hover:scale-110">
                                    Chat On What's App
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                                </button>
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mt-8 gap-6">
                            {/* YouTube Video */}
                            <div className="w-full h-80 sm:w-1/2 aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-lg"
                                    src="https://www.youtube.com/embed/hjnIAQYrmK4?si=MvXEsIymvUpNVGaO"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Local Video */}
                            <div className="w-full sm:w-1/2 aspect-w-16 aspect-h-9">
                                <video
                                    className="w-full h-full rounded-lg shadow-lg"
                                    controls
                                >
                                    <source src="video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </section>


                    {/*BLOGS */}
                    <section className="py-10 px-6 text-center  animate-slideIn">
                        <h2 className="animate-slideIn text-2xl font-bold text-gray-800 underline mb-4">{content[language].latest}</h2>
                        <Blogs />
                    </section>


                    <section className="py-10 px-6 text-center animate-slideIn">
                        <h2 className="animate-slideIn text-2xl font-bold text-gray-800 underline mb-4">{content[language].dohe}</h2>
                        <Imp_of_Words />
                    </section>

                    <section className="flex py-10 px-6 max-w-4xl mx-auto text-center ">
                        <p className="text-gray-700 mt-16 text-lg text-center sm:text-left animate-slideIn max-w-md">
                            {content[language].scan}
                        </p>
                        <img
                            src="scanner.jpeg"
                            alt="Scan QR Code"
                            className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 h-auto"
                        />
                    </section>

                    <section>
                        <div className=" items-center gap-6">
                            {/* <h2 className="text-2xl underline font-bold text-gray-800 mb-4 animate-slideIn">{content[language].aboutHeading}</h2> */}
                            {/* Text Section */}
                            <p className="text-gray-700 m-14 text-lg animate-slideIn">{content[language].lastDetails}</p>

                        </div>
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
            )}
        </div>
    );
}

export default Home;
