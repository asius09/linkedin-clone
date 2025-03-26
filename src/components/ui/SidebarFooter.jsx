import React from "react";

const SidebarFooter = () => {
  const footerLinks = [
    { href: "/about", text: "About" },
    { href: "/accessibility", text: "Accessibility" },
    { href: "/help", text: "Help Center" },
    { href: "/privacy", text: "Privacy & Terms" },
    { href: "/ad-choices", text: "Ad Choices" },
    { href: "/advertising", text: "Advertising" },
    { href: "/business", text: "Business Services" },
  ];

  const appLinks = [
    { href: "/mobile", text: "Get the LinkedIn app" },
    { href: "/more", text: "More" },
  ];

  return (
    <footer className="mt-4 p-3 text-xs text-gray-500 dark:text-gray-400">
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap gap-3 mb-3 justify-center">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-primary hover:underline transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-2 mb-3">
          {appLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-primary hover:underline transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-center">
        LinkedIn Corporation © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default SidebarFooter;
