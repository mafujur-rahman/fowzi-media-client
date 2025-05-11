import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const FullWidthImage = () => {
  return (
    <section className="container container-1480 pb-lg-5">
      <div
        className="container-fluid px-0 d-flex justify-content-center align-items-center"
        style={{
          position: 'relative',
          width: '100%',
          height: '50vh',
          minHeight: '300px',
          backgroundColor: '#',
        }}
      >
        <Image
          src="/assets/img/team/TEAM SECTION.png"
          alt="Team Section"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default FullWidthImage;
