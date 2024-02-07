import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import NzDiplomaTechnicalSupportLevel5 from './pages/Programme&Courses/Information Technology/nz-diploma-in-it-technical-support-level-5/NzDiplomaTechnicalSupportLevel5'
import Banner1 from './components/banner/banner1/banner1'
import Contact from './components/banner/Contact/contact'
import FooterBanner from './components/banner/FooterBanner/FooterBanner'
import NzDiplomaSystemAdminisstrationLevel6 from './pages/Programme&Courses/Information Technology/NZ DIPLOMA IN SYSTEMS ADMINISTRATION (LEVEL 6)/NzDiplomaSystemAdminisstrationLevel6'
import NzDiplomaNetworkSystemAdminisstrationAdvancedLevel7 from './pages/Programme&Courses/Information Technology/DIPLOMA IN NETWORKS AND SYSTEMS ADMINISTRATION ADVANCED (LEVEL 7)/NzDiplomaNetworkSystemAdminisstrationAdvancedLevel7'
import CoursesTimeTable from './pages/Programme&Courses/Schedule/TimeTable/TimeTable'
import Intake from './pages/Programme&Courses/Schedule/intake'
import TutionFees from './pages/Programme&Courses/Schedule/TutionFees'
import DiplomaInElectricalEngineeringlevel7 from './pages/Programme&Courses/Engineering/DIPLOMA IN ELECTRICAL ENGINEERING (LEVEL 7)/DiplomaInElectricalEngineeringlevel7'
import AcademicSettlementSupport from './pages/StudentServices/academic-settlement-support/AcademicSettlementSupport'
import StudentPlacementServices from './pages/StudentServices/students-placement-support/StudentPlacementServices'
import AdministrationSupportService from './pages/StudentServices/administration-support-services/AdministrationSupportServices'
import CareerSupport from './pages/StudentServices/career-support/CareerSupport'
import EducationPastoralCare from './pages/StudentServices/EducationPastoralCar/EducationPastoralCar'
import ICASA from './pages/StudentServices/icasa/Icasa'
import SafetyInTheCity from './pages/StudentServices/SafetyInTheCity/SafetyInTheCity'
import School from './pages/About/School/School'
import Staff from './pages/About/Staff/Staff'
import Booklet from './pages/About/Booklet/Booklet'
import Mentoring from './pages/About/MentoringSystem/mentoring'
import Faq from './pages/Faq/Faq'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programmes-courses/nz-diploma-in-it-technical-support-level-5" element={<NzDiplomaTechnicalSupportLevel5 />} />
        <Route path="/programmes-courses/nz-diploma-in-systems-administration-level-6" element={<NzDiplomaSystemAdminisstrationLevel6 />} />
        <Route path="/programmes-courses/diploma-in-networks-and-systems-administration-advanced-level-7" element={<NzDiplomaNetworkSystemAdminisstrationAdvancedLevel7 />} />
        <Route path="/programmes-courses/timetable" element={<CoursesTimeTable />} />
        <Route path="/programmes-courses/intake-2023-and-2024" element={<Intake />} />
        <Route path="/programmes-courses/tuition-fees" element={<TutionFees />} />
        <Route path="/programmes-courses/diploma-in-electrical-engineering-level-7" element={<DiplomaInElectricalEngineeringlevel7 />} />
        <Route path="/student-services/academic-settlement-support" element={<AcademicSettlementSupport />} />
        <Route path="/student-services/students-placement-support" element={< StudentPlacementServices />} />
        <Route path="/student-services/administration-support-services" element={<AdministrationSupportService />} />
        <Route path="/student-services/career-support" element={<CareerSupport />} />
        <Route path="/student-services/education-pastoral-care-of-tertiary-and-international-learners-code-of-practice-2021" element={<EducationPastoralCare />} />
        <Route path="/student-services/icasa" element={<ICASA />} />
        <Route path="/student-services/safety-in-the-city" element={<SafetyInTheCity />} />
        <Route path="/about-us/our-school" element={<School />} />
        <Route path="/about-us/staff" element={<Staff />} />
        <Route path="/about-us/our-booklet" element={<Booklet />} />
        <Route path="/about-us/mentoring-system" element={<Mentoring />} />
        <Route path="/contact-us/faqs" element={<Faq />} />
      </Routes >
      <Banner1 />
      <Contact />
      <FooterBanner />
      <Footer />

    </>

  )
}

export default App
