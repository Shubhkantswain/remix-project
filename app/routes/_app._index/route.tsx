import { useCurrentUser } from "~/hooks/auth";
import TrackSection from "./_components/_trackSection/TrackSection";

const AppleMusicHomepage: React.FC = () => {
  const { data } = useCurrentUser()
console.log("data", data);
r

  return (
    <>
      <TrackSection />
      <TrackSection />
      <TrackSection />
      <TrackSection />
      <TrackSection />
      <TrackSection />
      <TrackSection />
      <TrackSection />
    </>

  );
};

export default AppleMusicHomepage;