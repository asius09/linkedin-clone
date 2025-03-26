import React, { useState, useRef } from "react";
import DropDown from "../form/DropDown";

const Footer = ({ className = "" }) => {
  const dropDownRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState("Engligh");
  const footerLinks = [
    { text: "About", href: "#" },
    { text: "Accessibility", href: "#" },
    { text: "Talent Solutions", href: "#" },
    { text: "Professional Community", href: "#" },
    { text: "Policies", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Marketing Solutions", href: "#" },
    { text: "Privacy & Terms", href: "#" },
    { text: "Ad Choices", href: "#" },
    { text: "Advertising", href: "#" },
    { text: "Sales Solutions", href: "#" },
    { text: "Mobile", href: "#" },
    { text: "Small Business", href: "#" },
    { text: "Safety Center", href: "#" },
  ];

  const languages = [
    "العربية (Arabic)",
    "বাংলা (Bangla)",
    "Čeština (Czech)",
    "Dansk (Danish)",
    "Deutsch (German)",
    "Ελληνικά (Greek)",
    "English (English)",
    "Español (Spanish)",
    "فارسی (Persian)",
    "Suomi (Finnish)",
    "Français (French)",
    "हिंदी (Hindi)",
    "Magyar (Hungarian)",
    "Bahasa Indonesia (Indonesian)",
    "Italiano (Italian)",
    "עברית (Hebrew)",
    "日本語 (Japanese)",
    "한국어 (Korean)",
    "मराठी (Marathi)",
    "Bahasa Malaysia (Malay)",
    "Nederlands (Dutch)",
    "Norsk (Norwegian)",
    "ਪੰਜਾਬੀ (Punjabi)",
    "Polski (Polish)",
    "Português (Portuguese)",
    "Română (Romanian)",
    "Русский (Russian)",
    "Svenska (Swedish)",
    "తెలుగు (Telugu)",
    "ภาษาไทย (Thai)",
    "Tagalog (Tagalog)",
    "Türkçe (Turkish)",
    "Українська (Ukrainian)",
    "Tiếng Việt (Vietnamese)",
    "简体中文 (Chinese (Simplified))",
    "正體中文 (Chinese (Traditional))",
  ];

  return (
    <footer
      className={`
      text-gray-500 text-sm
     ${className}
      `}
    >
      <nav className="max-w-screen-xl mx-auto px-4 py-6">
        <ul className="flex flex-wrap justify-center mb-4">
          {footerLinks.map((link, index) => (
            <li key={index} className="mx-2 my-1">
              <a
                href={link.href}
                className="hover:underline hover:text-primary"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center mb-4">
          <h3 className="font-semibold mb-2">Questions?</h3>
          <p>
            <a href="#" className="hover:underline hover:text-primary">
              Visit our Help Center.
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline hover:text-primary">
              Manage your account and privacy
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline hover:text-primary">
              Go to your Settings.
            </a>
          </p>
        </div>
        <div className="text-center mb-4">
          <h3 className="font-semibold mb-2">Recommendation transparency</h3>
          <p>
            <a href="#" className="hover:underline hover:text-primary">
              Learn more about Recommended Content.
            </a>
          </p>
        </div>
        <div className="text-center mb-4 w-56 mx-auto">
          <DropDown
            options={languages}
            onSelect={(selection) => setSelectedLanguage(selection)}
            selectedOption={selectedLanguage}
            ref={dropDownRef}
            openOptions="upward"
          />
        </div>
        <p className="text-center">
          LinkedIn Corporation © {new Date().getFullYear()}
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
