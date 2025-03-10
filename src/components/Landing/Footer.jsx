import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "General",
      links: [
        { name: "Sign Up", url: "/signup" },
        { name: "Help Center", url: "/help" },
        { name: "About", url: "/about" },
        { name: "Press", url: "/press" },
        { name: "Blog", url: "/blog" },
        { name: "Careers", url: "/careers" },
        { name: "Developers", url: "/developers" },
      ],
    },
    {
      title: "Browse LinkedIn",
      links: [
        { name: "Learning", url: "/learning" },
        { name: "Jobs", url: "/jobs" },
        { name: "Salary", url: "/salary" },
        { name: "Mobile", url: "/mobile" },
        { name: "Services", url: "/services" },
        { name: "Products", url: "/products" },
        { name: "Top Companies", url: "/companies/top" },
      ],
    },
    {
      title: "Business Solutions",
      links: [
        { name: "Talent", url: "/business/talent" },
        { name: "Marketing", url: "/business/marketing" },
        { name: "Sales", url: "/business/sales" },
        { name: "Learning", url: "/business/learning" },
      ],
    },
    {
      title: "Directories",
      links: [
        { name: "Members", url: "/directory/members" },
        { name: "Jobs", url: "/directory/jobs" },
        { name: "Companies", url: "/directory/companies" },
        { name: "Articles", url: "/directory/articles" },
        { name: "Schools", url: "/directory/schools" },
        { name: "News", url: "/directory/news" },
      ],
    },
  ];

  const legalLinks = [
    { name: "User Agreement", url: "/legal/user-agreement" },
    { name: "Privacy Policy", url: "/legal/privacy-policy" },
    { name: "Cookie Policy", url: "/legal/cookie-policy" },
    { name: "Copyright Policy", url: "/legal/copyright" },
    { name: "Brand Policy", url: "/legal/brand" },
    { name: "Community Guidelines", url: "/legal/community" },
    { name: "Language", url: "/settings/language" },
  ];

  return (
    <footer className="bg-secondary-bg dark:bg-secondary-bg-dark border-t border-border dark:border-border-dark py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mb-8 items-center md:items-start">
          <div className="flex-1 md:ml-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-primary-text dark:text-primary-text-dark font-semibold mb-4 text-center md:text-left">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-secondary-text dark:text-secondary-text-dark hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                        >
                          <span className="group-hover:underline">
                            {link.name}
                          </span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border dark:border-border-dark pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-secondary-text dark:text-secondary-text-dark mb-4 md:mb-0">
              © {new Date().getFullYear()} LinkedIn Corporation. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-xs text-secondary-text dark:text-secondary-text-dark hover:text-primary hover:underline transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
