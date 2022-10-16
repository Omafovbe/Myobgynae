import React from 'react';

import bgImage from '../../images/hero-bg.png';
import doc from '../../images/doc.svg';
import fDoc from '../../images/lady_doc.png';
import Testimonials from './testimonials';

const AboutContainer = () => (
  <section className="relative" name="about-us">
    <div
      className="bg-cover bg-no-repeat w-full h-full absolute inset-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="relative h-scree max-w-[1300px] mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-y-6 pt-28 lg:pt-20 z-20">
        <div className="lg:col-span-1 lg:pt-20 order-2 lg:order-1">
          <img
            src={doc}
            alt="doctor"
            className="z-0 w-full"
            style={{ height: 500 }}
          />
        </div>

        <div className="lg:col-span-1 lg:pt-20 order-1 lg:order-2">
          <div>
            <div className="flex flex-col item-center lg:items-start space-y-4 mb-5">
              <p className="text-primary-900 font-semibold text-lg text-center lg:text-left">
                -About us
              </p>
              <h1
                className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8"
                style={{ lineHeight: 1.3 }}
              >
                <span className="text-primary-900 pr-4">Myobgynae</span>
              </h1>
            </div>
            <p className="text-gray-600 lg:text-lg">
              At <strong>Myobgynae, </strong> our vision is to be a role model
              for international standarda healthcare. Our mission is to always
              strive to provide the best quality treatment and patient care by
              professionals who are competent in their fields with high ethics.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-6 pt-8 mt-4 lg:pt-20 z-20">
        <div className="lg:col-span-1" name="why-us">
          <div>
            <div className="flex flex-col item-center lg:items-start space-y-4 mb-5">
              <p className="text-primary-900 font-semibold text-lg text-center lg:text-left">
                -Why Us
              </p>
              <h1
                className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8"
                style={{ lineHeight: 1.3 }}
              >
                Find the right{' '}
                <span className="text-primary-900 pr-4"> Care</span>right at
                your fingertips
              </h1>
            </div>
            <p className="text-gray-600 lg:text-lg pb-4">
              Myobgynae has delivered the best in Gynaecological care to
              Myobgynae Inc, Nigeria, patients. The team of board-certified
              ophthalmologists and optometrists includes renowned experts, many
              of who are also fellowship-trained in surgical specialties.
              Patients always get a warm welcome at Zinny Eyecare, and they
              frequently praise the team’s highly personalized approach to
              Gynaecologist.
            </p>
            <p className="text-gray-600 lg:text-lg">
              Additionally,Myobgynae offers a variety of treatments which are
              rarely found in Gynaecological practices.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1">
          <img
            src={fDoc}
            alt="doctor"
            className="w-full object-fit"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <Testimonials />
    </div>
  </section>
);

export default AboutContainer;
