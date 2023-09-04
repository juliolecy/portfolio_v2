import * as k from './styles';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import GlitchText from '../GlitchText';

interface Certificates {
  id: number;
  title: string;
  firebase_img: string;
  created_by: string;
  skill_svg: string;
  total_hours: number;
}

const Certificates = () => {
  const api = useApi();

  const [certificates, setCertificates] = useState<Certificates[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getCertificates();
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
                <li
                  className="booking-card"
                  key={index}
                  style={{ backgroundImage: `url(/Skills/${certificate.skill_svg})` }}
                >
                  <div className="book-container">
                    <div className="content">
                      <button className="btn">
                        <Link target="_blank" to={certificate.firebase_img}>
                          Ver mais
                        </Link>
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

export default Certificates;
