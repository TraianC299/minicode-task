import { Suspense } from 'react'
import './App.css'
import CardsSection from './components/home/CardsSection'
import ConsultationSection from './components/home/ConsultationSection'
import HeroSection from './components/home/MainSection/HeroSection'
import TestimonialsSection from './components/home/TestimonialsSection'
import Loading from './components/system/utils/Loading'
import ContentProvider from './contexts/ContentProvider.context'
import InsuranceProvider from './contexts/InsuranceProvider.context'
import DesktopNav from './layouts/DesktopNav'
import Footer from './layouts/Footer'
import PhoneNav from './layouts/PhoneNav'
import { SnackProvider } from './contexts/SnackProvider.context'

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <ContentProvider>
        <SnackProvider>
          <DesktopNav />
          <PhoneNav />
          <InsuranceProvider>
            <HeroSection />
          </InsuranceProvider>
          <ConsultationSection />
          <CardsSection />
          <TestimonialsSection />
          <Footer></Footer>
          <div id='modal-root'></div>
        </SnackProvider>
      </ContentProvider>
    </Suspense>
  )
}

export default App
