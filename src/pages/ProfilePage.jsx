import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Experience,
  Skills,
  About,
  Educations,
  Activity,
} from "../components/profile/profileSections";
import { ProfileMain, ProfileSidebar } from "../components/profile";
import { Footer } from "../components/common";

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { user: profileLink, userId } = useParams();
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sections = currentUser?.sections || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <ProfileMain
          user={currentUser}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
        {sections.map((section) => {
          const Component = section.component;
          return (
            <Component
              key={section?.title}
              section={section?.content}
              isEditMode={isEditMode}
            />
          );
        })}
        <Footer className={"bg-transparent"} />
      </div>
      <div className="hidden md:block md:col-span-1">
        <ProfileSidebar profileLink={`profile/${profileLink}/${userId}`} />
      </div>
    </div>
  );
};

export default ProfilePage;
