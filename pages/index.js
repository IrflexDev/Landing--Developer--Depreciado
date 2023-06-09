import Banner from '../components/HomeThree/Banner';
import Funfact from '../components/Common/Funfact';
import BuySell from '../components/HomeOne/BuySell';
import AccountCreate from '../components/Common/AccountCreate';
import Platform from '../components/HomeOne/Platform';
import FeedBack from '../components/HomeOne/FeedBack';
import Portfolio from '../components/Common/Portfolio';
import OurFeature from '../components/Common/OurFeature';
import AppDownload from '../components/Common/AppDownload';
import RegisterAreaTwo from '../components/Common/RegisterAreaTwo';

const Index = () => {
  return (
    <>
      <Banner />
      <Funfact pt100='pt-100' />
      <BuySell pt70='pt-70' />
      <AccountCreate title='Get Started in a Few Minutes' />
      <Platform />
      <FeedBack />
      <Portfolio bgColor='bg-f9f9f9' />
      <OurFeature title="Our Features" />
      <AppDownload />
      <RegisterAreaTwo title='Start Trading on Novis' />
    </>
  );
};

export default Index;
