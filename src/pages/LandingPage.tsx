import Hero from '../components/sections/Hero';
import StatsStrip from '../components/sections/StatsStrip';
import MissionSection from '../components/sections/MissionSection';
import TrainingCenterSection from '../components/sections/TrainingCenterSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import CoursesSection from '../components/sections/CoursesSection';
import InstructorsSection from '../components/sections/InstructorsSection';
import ContactSection from '../components/sections/ContactSection';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <MissionSection />
      <TrainingCenterSection />
      <CertificationsSection />
      <CoursesSection />
      <InstructorsSection />
      <ContactSection />
    </>
  );
}
