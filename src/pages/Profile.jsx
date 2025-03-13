import { useState } from "react";
import {
  UserProfile,
  Experience,
  Skills,
  About,
  UserSidebar,
  SideProfile,
  Footer,
  Educations,
  Activity,
} from "../components/profile";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const user = {
    name: "Amilly Johnson",
    title: "Senior Product Designer",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "San Francisco, California",
    contactInfo: {
      email: "amilly.johnson@example.com",
      phone: "(555) 123-4567",
    },
    portfolio: "https://www.linkedin.com/in/amilly-johnson",
    sections: [
      {
        title: "About",
        content:
          "Creating user-centered designs that solve real problems. Passionate about accessibility and inclusive design with over 8 years of experience in product design, UX research, and design systems.",
        component: About,
      },
      {
        title: "Activity",
        content: {
          posts: {
            count: 37,
            data: [
              {
                id: 1,
                content:
                  "Excited to share my latest UX case study on improving e-commerce checkout flows!",
                image:
                  "https://media.licdn.com/dms/image/v2/D5622AQHsoi1o8jVLig/feedshare-shrink_2048_1536/B56ZV6E_iiHoAo-/0/1741509885354?e=1744848000&v=beta&t=6TgfN5NIpY_jDPp7k4qBc_5YYiRMW5bP2h6Vm7x-Oe0",
                likes: 128,
                comments: 24,
                date: "2023-12-15",
              },
              {
                id: 2,
                content:
                  "Just published an article on 'The Future of AI in UX Design'. Check it out!",
                image: "https://example.com/ai-ux-design.jpg",
                likes: 95,
                comments: 18,
                date: "2023-12-10",
              },
              {
                id: 3,
                content:
                  "Reflecting on my journey from junior to senior designer. What's your biggest career growth moment?",
                image: null,
                likes: 210,
                comments: 42,
                date: "2023-12-05",
              },
            ],
          },
          comments: {
            count: 152,
            data: [
              {
                id: 1,
                content:
                  "Your insights on accessibility in design are spot-on. Thanks for sharing!",
                postId: 1,
                likes: 15,
                date: "2023-12-16",
              },
              {
                id: 2,
                content:
                  "Great article! I'd love to hear more about how you see AI impacting design workflows.",
                postId: 2,
                likes: 8,
                date: "2023-12-11",
              },
              {
                id: 3,
                content:
                  "Mentorship was key in my growth. It's inspiring to see how far you've come!",
                postId: 3,
                likes: 22,
                date: "2023-12-06",
              },
            ],
          },
          videos: {
            count: 8,
            data: [
              {
                id: 1,
                title: "5 Essential Figma Plugins for UX Designers",
                thumbnail: "https://example.com/figma-plugins-thumbnail.jpg",
                views: 1200,
                likes: 85,
                date: "2023-11-20",
              },
              {
                id: 2,
                title: "How to Conduct Effective User Interviews",
                thumbnail: "https://example.com/user-interviews-thumbnail.jpg",
                views: 950,
                likes: 72,
                date: "2023-10-15",
              },
            ],
          },
          images: {
            count: 64,
            data: [
              {
                id: 1,
                title: "UX Workshop Presentation",
                url: "https://example.com/ux-workshop-presentation.png",
                likes: 45,
                date: "2023-11-05",
              },
              {
                id: 2,
                title: "Design System Components",
                url: "https://example.com/design-system-components.png",
                likes: 38,
                date: "2023-10-22",
              },
            ],
          },
        },
        component: Activity,
      },
      {
        title: "Experience",
        content: [
          {
            title: "Senior Product Designer",
            company: "Design Co.",
            type: "Full-time",
            duration: "Jan 2020 - Present · 3 yrs",
            location: "San Francisco, California",
            mode: "Remote",
            achievements: [
              "Led design initiatives for flagship products, improving user engagement by 30%",
              "Implemented a new design system, reducing development time by 25%",
              "Mentored junior designers, enhancing team productivity and skill development",
            ],
          },
          {
            title: "UX Designer",
            company: "Tech Innovations Inc.",
            type: "Full-time",
            duration: "Mar 2017 - Dec 2019 · 2 yrs 10 mos",
            location: "San Francisco, California",
            mode: "On-site",
            achievements: [
              "Developed user-centered designs for web and mobile applications",
              "Conducted user research and usability testing, resulting in a 20% increase in user satisfaction",
            ],
          },
        ],
        component: Experience,
      },
      {
        title: "Education",
        content: [
          {
            school: "Stanford University",
            degree: "Master of Design · Human-Computer Interaction",
            years: "2017 - 2019",
          },
          {
            school: "University of California, Berkeley",
            degree: "Bachelor of Arts · Cognitive Science",
            years: "2013 - 2017",
          },
          {
            school: "Design Thinking Bootcamp",
            degree: "Certificate · IDEO U",
            years: "2016",
          },
        ],
        component: Educations,
      },
      {
        title: "Skills",
        content: [
          "UI Design",
          "UX Research",
          "Figma",
          "Design Systems",
          "Prototyping",
          "Wireframing",
          "User Testing",
          "Adobe Creative Suite",
          "Sketch",
          "Information Architecture",
          "Interaction Design",
          "Usability Testing",
          "A/B Testing",
          "Design Thinking",
          "User-Centered Design",
        ],
        component: Skills,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <UserProfile
          user={user}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
        {user.sections?.map((section) => (
          <section.component
            key={section.title}
            section={section}
            isEditMode={isEditMode}
          />
        ))}
        <Footer />
      </div>
      <div className="md:col-span-1">
        <UserSidebar />
      </div>
    </div>
  );
};

export default Profile;
