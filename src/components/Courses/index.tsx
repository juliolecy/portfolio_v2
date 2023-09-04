import * as k from './styles';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import Loading from '../Loading';
import GlitchText from '../GlitchText';

interface Certificates {
  id: number;
  title: string;
  certificate: string;
  created_by: string;
  svg: string;
  total_hours: number;
  status: boolean;
  topics: string;
}

const Courses = () => {
  const api = useApi();

  const [certificates, setCertificates] = useState<Certificates[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getCourses();
      console.log('Aqui ', data);
      setCertificates(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <k.Container className="projects">
        <div className="principal">
          <GlitchText text="Cursos" />
          <h2>Estes são meus cursos</h2>
          <div className="line"></div>

          {!certificates && <Loading />}

          {certificates && (
            <k.ProjectsContainer>
              {certificates.map((certificate, index) => (
                <li className="booking-card" key={index} style={{ backgroundImage: `url(/Skills/${certificate.svg})` }}>
                  <div className="book-container">
                    <div className="content">
                      <button className="btn">
                        <a href={`/curso/${certificate.id}`} target="_blank">
                          Ver mais
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="informations-container">
                    <h2 className="title">{certificate.title}</h2>
                    <p className="sub-title">{certificate.created_by}</p>

                    <div className="hours--container">
                      <div className="hours">
                        <p>{certificate.total_hours.toString()} horas</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </k.ProjectsContainer>
          )}
        </div>
      </k.Container>
    </>
  );
};

export default Courses;
