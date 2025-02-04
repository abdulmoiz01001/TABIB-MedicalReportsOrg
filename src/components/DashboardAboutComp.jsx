import React from 'react';
import clsx from 'clsx';

const DashboardAboutComp = () => {
  const containerClass = clsx("bg-gray-100 text-gray-800 py-10 px-6 md:px-20");
  const sectionClass = clsx("bg-white shadow-lg p-6 rounded-lg mb-10");
  const titleClass = clsx("text-2xl font-semibold text-red-600");
  const textClass = clsx("text-gray-700 mt-2 leading-relaxed");
  const listClass = clsx("list-disc list-inside text-gray-700 mt-2");
  const centeredImageContainer = clsx("bg-white flex flex-col justify-center shadow-lg p-6 rounded-lg mb-10");
  const footerClass = clsx("text-center py-6 border-t mt-6 text-gray-600");

  return (
    <div className={containerClass}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <img src='logo.png' alt="tabbib logo" className='mx-auto w-[150px] ' />
        <h1 className="text-4xl font-bold text-red-600">TABIAT.LIVE</h1>
        <p className="text-lg mt-2">A Predictive, Preventive, Personalized Approach to Hypertension</p>
        <p className="text-gray-600">Powered by AI Integrated TABIB Kiosk</p>
      </div>

      {/* Project Details */}
      <div className={sectionClass}>
        <h2 className={titleClass}>A Project by</h2>
        <p className="text-gray-700 mt-2 font-medium">
          Tabib Ahmad Yar Sukhera (Gold Medalist) & Dr. Engr. Farah Deeba Memon
        </p>
        <h3 className="text-lg font-semibold mt-4">Supervised by:</h3>
        <p className="text-gray-700">
          Prof. Dr. Ahsana Dar Farooq, Professor Dr. Noman Khan, Hk. Muhammad Amjad Ismail,
          and Dr. Engr. Shahid Muneer Shah (Hamdard University, Karachi)
        </p>
      </div>

      {/* Executive Summary */}
      <div className={sectionClass}>
        <h2 className={titleClass}>1. Executive Summary</h2>
        <p className={textClass}>
          Cardiovascular diseases (CVDs) remain the leading cause of death worldwide, claiming approximately 20.5 million lives in 2023.
          Hypertension affects 48% of the population in Pakistan, posing serious health risks such as heart attacks, strokes, kidney failure, and blindness.
       
          TABIB is the world’s first AI-integrated smart health kiosk, collecting three-dimensional data (psychological, anthropometric, physiological) to analyze cardiovascular risks.
          The results are presented in an AI-generated TABIAT report, aiding in algorithm-based clinical decision-making (ABCD).
        </p>
      </div>

      {/* Problem to be Solved */}
      <div className={sectionClass}>
        <h2 className={titleClass}>2. Problem to be Solved</h2>
        <ul className={listClass}>
          <li>Traditional hypertension management ignores psychosocial, environmental, and anthropometric factors.</li>
          <li>Current models focus solely on lowering blood pressure without addressing underlying health risks.</li>
          <li>Developing countries lack holistic, AI-driven preventive healthcare solutions.</li>
        </ul>
      </div>

      {/* The Idea */}
      <div className={sectionClass}>
        <h2 className={titleClass}>3. The Idea</h2>
        <p className={textClass}>
          TABIAT.LIVE integrates AI to analyze psychosomatic, anthropometric, and physiological data, providing a
          comprehensive health score and predictive analytics for hypertension and CVD risk assessment.
        </p>
      </div>

      {/* Differentiator */}
      <div className={sectionClass}>
        <h2 className={titleClass}>4. Idea Benefit/Differentiator</h2>
        <ul className={listClass}>
          <li>Holistic approach incorporating psychological, anthropometric, and physiological data.</li>
          <li>AI-driven precision reducing human error and enabling large-scale scalability.</li>
          <li>Personalized interventions and recommendations for healthcare providers.</li>
          <li>Culturally relevant analysis integrating Eastern medicine insights.</li>
          <li>Data-driven insights for population-level health monitoring.</li>
        </ul>
      </div>

      {/* Request Section */}
      <div className={sectionClass}>
        <h2 className={titleClass}>7. Request</h2>
        <p className={textClass}>We seek funding and grants to:</p>
        <ul className={listClass}>
          <li>Develop and scale the TABIAT.LIVE cloud platform and TABIB kiosks.</li>
          <li>Deploy 100 AI-integrated TABIB kiosks in healthcare facilities across Pakistan.</li>
          <li>Conduct longitudinal studies to validate TABIAT Score across diverse populations.</li>
          <li>Enhance AI capabilities for more accurate and detailed predictions.</li>
        </ul>
      </div>

      {/* Future Milestones */}
      <div className={sectionClass}>
        <h2 className={titleClass}>8. Future Milestones</h2>
        <ul className={listClass}>
          <li>Year 1: Deploy TABIB kiosks in 20 healthcare facilities; launch TABIAT.LIVE beta version.</li>
          <li>Year 2: Scale to 50 facilities; integrate AI for disease prediction.</li>
          <li>Year 3: Expand internationally; publish longitudinal study results; partner with global health organizations.</li>
        </ul>
      </div>

      {/* Additional Information */}
      <div className={sectionClass}>
        <h2 className={titleClass}>9. Additional Information</h2>
        <p className={textClass}>
          TABIAT.LIVE platform aligns with the World Health Organization’s call for innovative approaches to tackle non-communicable diseases...
        </p>
      </div>

      {/* Image Sections */}
      {["machine.png", "infograph.png", "panel.png"].map((src, index) => (
        <div key={index} className={centeredImageContainer}>
          <img src={src} alt="Illustration" />
          <p className="text-gray-700 text-center mt-2">
            {src === "machine.png" ? "TABIB Kiosk" : src === "infograph.png" ? "TABIAT Report" : "TABIAT.LIVE"}
          </p>
        </div>
      ))}

      {/* Footer */}
      <footer className={footerClass}>
        &copy; {new Date().getFullYear()} TABIAT.LIVE | Powered by AI & Data Science
      </footer>
    </div>
  );
};

export default DashboardAboutComp;
