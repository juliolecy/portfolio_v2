import Accordion from '../Accordion';
import GlitchText from '../GlitchText';
import Slider from '../Slider';
import * as k from './styles'

const Skills = () => {
  return (

  <k.Container name="skills" className='skills' id='skills'>

    <GlitchText text='Habilidades'/>
    <h2>Estes são alguns dos meus conhecimentos</h2>
    <div className="line"></div>

    <Accordion/>

    <Slider/>

  </k.Container>

  );
};

export default Skills;