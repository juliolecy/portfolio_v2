import skills from '../../utils/skills';
import Accordion from '../Accordion';
import GlitchText from '../GlitchText';
import Slider from '../Slider';
import * as k from './styles'

const Skills = () => {
  return (
  
  <k.Container>

    <GlitchText text='Habilidades'>
      Habilidades
    </GlitchText>

    <Accordion/>

    <Slider/>
    
  </k.Container>
    
  );
};

export default Skills;