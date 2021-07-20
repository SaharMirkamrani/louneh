import { FaPaw } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { GiDogHouse } from 'react-icons/gi';
import { RiYoutubeFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../assets/logo.png';

const Home = () => {
  return (
    <>
      <div className='container' style={{ minHeight: '60vh' }}>
        <ChooseCatCard />
        <CategoryCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;

const ChooseCatCard = () => {
  return (
    <>
      <div
        className='bg-white rounded-pill w-75 p-4 text-center mx-auto'
        style={{ fontSize: '15px', color: '#3c4559', marginTop: '5rem' }}
      >
        <p className='mb-0 h5 cat-info'>دسته بندی مورد نظر را انتخاب کرده و ادامه دهید</p>
      </div>
    </>
  );
};

const CategoryCard = () => {
  return (
    <>
      <div className='d-flex justify-content-evenly align-items-center categoriesMobile' style={{ marginTop: '5rem' }}>
        <LinkContainer to='/pets'>
          <div className='bg-white w-25 text-center cat mx-2 my-2 p-4'>
            <FaPaw style={{ fontSize: '3rem', marginTop: '15px' }} />
            <p style={{ fontSize: '1rem', marginTop: '15px' }}>حیوانات</p>
          </div>
        </LinkContainer>
        <LinkContainer to='/supply'>
          <div className='bg-white w-25 text-center cat mx-2 my-2 p-4'>
            <GiDogHouse style={{ fontSize: '3rem', marginTop: '15px' }} />
            <p style={{ fontSize: '1rem', marginTop: '15px' }}>لوازم</p>
          </div>
        </LinkContainer>
        <LinkContainer to='/services'>
          <div className='bg-white w-25 text-center cat mx-2 my-2 p-4'>
            <FaBriefcaseMedical style={{ fontSize: '3rem', marginTop: '15px' }} />
            <p style={{ fontSize: '1rem', marginTop: '15px' }}>خدمات</p>
          </div>
        </LinkContainer>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <img src={Logo} alt='logo' />
        <p className='text-secondary my-4' style={{ textAlign: 'right' }}>
          لونه اولین بازار خرید و فروش آنلاین حیوانات
        </p>
        <div className='d-flex justify-content-start align-items-center'>
          <LinkContainer to='/' style={{ cursor: 'pointer' }}>
            <RiYoutubeFill className='text-secondary social-media' />
          </LinkContainer>
          <LinkContainer to='/' style={{ cursor: 'pointer' }}>
            <IoLogoLinkedin className='text-secondary social-media' />
          </LinkContainer>
          <LinkContainer to='/' style={{ cursor: 'pointer' }}>
            <AiOutlineInstagram className='text-secondary social-media' />
          </LinkContainer>
          <LinkContainer to='/' style={{ cursor: 'pointer' }}>
            <FaTwitter className='text-secondary social-media' />
          </LinkContainer>
          <LinkContainer to='/' style={{ cursor: 'pointer' }}>
            <AiFillFacebook className='text-secondary social-media' />
          </LinkContainer>
          <LinkContainer to='/' style={{ cursor: 'pointer' }}>
            <AiOutlineWhatsApp className='text-secondary social-media' />
          </LinkContainer>
        </div>
      </div>
    </>
  );
};
