import * as k from './styles';
import skills from '../../utils/skills';

export default function Slider() {
  return (
    <k.SliderContainer>
      <div className="slider">
        <div className="slide-track">
          {skills.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.src} alt="react icon" />
            </div>
          ))}
          {skills.map((item, index) => (
            <div key={index} className="slide">
              <img src={item.src} alt="react icon" />
            </div>
          ))}
        </div>
      </div>
    </k.SliderContainer>
  );
}
