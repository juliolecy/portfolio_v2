import { useEffect, useState } from 'react';
import * as k from './styles';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading2';
import { CourseType } from '../../types/types';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import { BiSolidTime } from 'react-icons/bi';
import { GrStatusGoodSmall } from 'react-icons/gr';

const Course: React.FC = () => {
  const { id } = useParams();
  const api = useApi();

  const [course, setCourse] = useState<CourseType | null>(null);
  const [topics, setTopics] = useState<string[]>([]);

  const handleFormatTopics = (topics: string) => {
    return topics.split(',');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await api.getCourse(id);
        setCourse(data);
        setTopics(handleFormatTopics(data.topics));
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!course && <Loading />}
      {course && (
        <k.Container>
          <k.Content>
            <h1>{course.title}</h1>
            <div className="image--container">
              <img src={`data:image/jpeg;base64,${course.certificate}`} alt="" />
            </div>
            <k.CourseInformation>
              <div className="card">
                <div className="container-card bg-green-box">
                  <div className="card--title">
                    <AiFillSafetyCertificate style={{ color: course.status ? 'green' : 'red' }} />
                    <p>{course.title}</p>
                  </div>

                  <div className="card--description">
                    <div className="line">
                      <IoSchoolSharp />
                      <span>{course.created_by}</span>
                    </div>
                    <div className="line">
                      <BiSolidTime />
                      <span>{course.total_hours}h</span>
                    </div>
                    <div className="line">
                      <GrStatusGoodSmall style={{ color: course.status ? 'green' : 'red' }} />
                      <span>{course.status ? 'Completo' : 'Cursando'}</span>
                    </div>
                  </div>

                  <div className="topics">
                    <h2>Assuntos abordados</h2>

                    <ul>
                      {topics.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </k.CourseInformation>
          </k.Content>
        </k.Container>
      )}
    </>
  );
};

export default Course;
