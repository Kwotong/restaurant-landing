import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__ bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overay flex__center'>
      <img src={images.G} alt='letter G' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img' />
        <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
      <div className='app__aboutus-content-knife flex-center'>
        <img src={images.knife} alt='knife' />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img' />
        <p className='p_opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;