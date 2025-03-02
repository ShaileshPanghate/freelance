import React from 'react';
import { useState } from "react";

const Imp_of_Words = () => {

    const [selectedPoem, setSelectedPoem] = useState(null);

    const poems = [
      {
        id: 1,
        title: "जगतगुरू संत तुकाराम महाराज शब्दांचे सामर्थ्   व महत्व विशद करताना बोलतांना बोलतात",
        preview: "आम्हा घरी धन, शब्दांचीच रत्ने।\nशब्दांचीच शस्त्रे यत्न करू ।।\n...",
        fullContent: "आम्हा घरी धन, शब्दांचीच रत्ने।\nशब्दांचीच शस्त्रे यत्न करू ।।\n शब्दांची आमुच्या जीवाची जीवन।\n शब्द वाटू धन जनलोका ।।\n तुका म्हणे पहा शब्दची हा देव। \nशब्दांची गौरव पूजा करू ।।",
      },
      {
        id: 2,
        title: "जगतगुरू संत तुकाराम महाराज शब्दांचे सामर्थ्   व महत्व विशद करताना बोलतांना बोलतात",
        preview: "घासावा शब्द, तासावा शब्द । तोलावा शब्द बोलण्यापूर्वी ।। शब्द हेची कातर। शब्द राई दोरे। बेतावेत शब्दं शास्त्रधारे...",
        fullContent: "घासावा शब्द, तासावा शब्द ।\n तोलावा शब्द बोलण्यापूर्वी ।।\n शब्द हेची कातर। शब्द राई दोरे।\n बेतावेत शब्दं शास्त्रधारे ।।\n बोलावे मोजके नेमके खमंग खमके।\n ठेवावे भान देश काळ पात्राचे ।।\n बेलावे बरे बोलावे खरे।\n शब्दामध्ये झळकावी ज्ञान, कर्म, भक्ती ।।\n स्वानुभावातुन जन्मावा प्रत्येक शब्द।\n शब्दांमुळे दंगल शब्दांमुळे मंगल ।।\n शब्दाचे हे जंगल जागृत रहावा ।\n जिभेवर तावा सर्व गुख दाता ।।\n पाणी वाणी नानी नारा नये ।।",
      },
      {
        id: 3,
        title: "वैश्विक संत कबीर",
        preview: "शब्द संभाल के बोलिए, शब्द के हात न पाव।\nएक शब्द औषध करे, एक शब्द करे घाव ।।...",
        fullContent: " शब्द संभाल के बोलिए, शब्द के हात न पाव।\nएक शब्द औषध करे, एक शब्द करे घाव ।।\n शब्द का रखना ध्यान रे, मुख से निकला शब्द।\n वपीरा फिर नही आयेगा, दिल किसीका तोडकर ।।\n तुम्हे चैन न आयेगा, शब्द, का रखना ध्यान रे।\n शब्द का मुल्य जाणो, शब्द से बनती विघटती।\nरुप कटवा भाता ना किसीको, सत्य मीन वोलीए ।।",
      },
      {
        id: 4,
        title: "वैश्विक संत कबीर",
        preview: "गुरु की अमृतवाणी सुनके, मुखमे अमृत घोलिए।\n मीन शब्द महान है, शब्द मे भरती ज्ञान ।।...",
        fullContent: "गुरु की अमृतवाणी सुनके, मुखमे अमृत घोलिए।\n मीन शब्द महान है, शब्द मे भरती ज्ञान ।।\n चलनी से गिरा हुआ अन्न, फिर न लगे हाथ में।\n        कविर कहता सुनो भाई साधु, शब्द का खेल शब्द में।।",
      },
      {
        id: 5,
        title: "प्रख्यात कवी वसामाजिक कार्यकर्ते",
        preview: "शब्दच मंगल, शब्दच जंगल, \n शब्दच भारी, शब्दच तारी,\n शब्दांनीच पेटती कित्येक घरे !!...",
        fullContent: "शब्दच मंगल, शब्दच जंगल, \n शब्दच भारी, शब्दच तारी,\n शब्दांनीच पेटती कित्येक घरे !!\n शब्दच सोहळा, शब्दांनीच येती मरण काळा!\n सावरावे शब्द राजवावे शब्द, आपुलकीने !!\n शब्दांमध्येच मर्म, स्नेहबंधाचे कर्म !\n चला वांच्या मैत्रीबंध, चला बांधुया मैत्रीवंध !!",
      },
      {
        id: 6,
        title: "माहात्मा ज्योतीराव फुले",
        preview: "विद्येविना मती गेली। मतीविना निती गेली ।।\nनितीविना गती गेली। गतीविना वित गेले ।।...",
        fullContent: "विद्येविना मती गेली। मतीविना निती गेली ।।\nनितीविना गती गेली। गतीविना वित गेले ।।\nवित्तविना शुद्र खचले। इतके अनर्थ एका अविद्येने केले ।।",
      },
      {
        id: 7,
        title: "संत तुकाराम महाराज",
        preview: 'देहाची तिजोरी, भक्तिचाच ठेवा। उघड दार देवा आता, उघड दार देवा ।।...',
        fullContent: 'देहाची तिजोरी, भक्तिचाच ठेवा। \nउघड दार देवा आता, उघड दार देवा ।।',
      },
      {
        id: 8,
        title: "वैश्विक संत कबीर",
        preview: "विद्येविना मती गेली। मतीविना निती गेली ।।\nनितीविना गती गेली। गतीविना वित गेले ।।...",
        fullContent: "कागज कि लेखी, मती कि रेखी, \nशब्दों की शक्ती से ही सिद्धी है।\nशब्द में ररक्ती है, शब्द में सृष्टी है,\n शब्द से ही सबकुछ है।",
      },
      {
        id: 9,
        title: "छत्रपती शिवाजी महाराज",
        preview: "शवद हा सैन्यापेक्षा श्रेष्ठ,\nशब्द हा शत्रुच्या मनाला जिंकतो....",
        fullContent: "शवद हा सैन्यापेक्षा श्रेष्ठ,\nशब्द हा शत्रुच्या मनाला जिंकतो. \n शब्द हा राज्याचा आवार आहे,\n शब्दच प्रजेचा सहारा आहे",
      },
    ];
    
    const [expandedDohe, setExpandedDohe] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleDohe = showAll ? poems : poems.slice(0, 3);

  const toggleBlog = (id) => {
    setExpandedDohe(expandedDohe === id ? null : id);
  };
  return (
    <div className="p-6">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleDohe.map((poem) => (
          <div key={poem.id} className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{poem.title}</h3>
            <p className="text-gray-600">{poem.preview}</p>
            <button
              onClick={() => setSelectedPoem(poem)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
       <button
        onClick={() => setShowAll(!showAll)}
        className="px-6 py-2 mt-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-transform duration-300 hover:scale-120"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>

      {/* Modal Box */}
      {selectedPoem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-2">{selectedPoem.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{selectedPoem.fullContent}</p>
            <button
              onClick={() => setSelectedPoem(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Imp_of_Words;
