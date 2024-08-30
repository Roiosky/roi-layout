
import { useEffect, useRef } from 'react';
import './index.css';

const Gallery = () => {
  const images = [
    { src: './public/img1.png', title: 'Imagen 1' },
    { src: './public/img2.png', title: 'Imagen 2' },
    { src: './public/img3.png', title: 'Imagen 3' },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollPosition = 0;

    const scrollSlider = () => {
      if (slider) {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        scrollPosition += slider.clientWidth / 3;
        
        if (scrollPosition > maxScrollLeft) {
          scrollPosition = 0; // Reiniciar si llega al final
        }

        slider.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    };

    const intervalId = setInterval(scrollSlider, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="gallery">
      <div className="slider" ref={sliderRef}>
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image.src} alt={image.title} className="card-image" />
            <div className="card-content">
              <h4>{image.title}</h4>
              <button className="card-button">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
