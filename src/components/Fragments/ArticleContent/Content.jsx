import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import freecodecampImage from '../../../assets/Freecodecamp.png';
import ibmImage from '../../../assets/IBM.png';

const courses = [
    {
      title: 'Freecodecamp',
      description: 'Back end Development',
      image: freecodecampImage,
      link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
    },
    {
      title: 'IBM',
      description: 'Cloud Computing',
      image: ibmImage,
      link: 'https://www.ibm.com/cloud/learn/cloud-computing',
    },
    {
      title: 'IBM',
      description: 'Cloud Computing',
      image: ibmImage,
      link: 'https://www.ibm.com/cloud/learn/cloud-computing',
    },
  ];

const project = [
    {
        name: 'CRUD E-commerce'
    },
    {
        name: 'Data API'
    },
    {
        name: 'AWS dan GCP'
    },
]

const Content = () => {
    return (
        <div className="article-content-container">
            <div className="article-title">
                <h1>Skill Development</h1>
            </div>

            <div className="slider-container">
                <h3>Course Rekomendasi</h3>
                <Swiper
                    modules={[]}
                    spaceBetween={20}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    }}
                >
                    {courses.map((course, index) => (
                    <SwiperSlide key={index}>
                        <a href={course.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <div className="card">
                            <img src={course.image} alt={course.title} className="card-image" />
                            <div className="card-content">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="recomend-project">
                <h3>Saran Proyek</h3>
                <div className="list-project">
                    {project.map((project, index) => (
                        <div key={index} className="project">
                            <p>{project.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="profile-button">
                <button className="profile-edit-button">
                    Cek Progress Tracker
                </button>
            </div>
        </div>
    )
}

export default Content;