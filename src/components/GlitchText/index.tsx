import * as k from './styles'

interface GlitchText {
  text: string;
}

const GlitchText = ({text}: GlitchText) => {

  return (
<k.Container>
  <h1 className="glitch" data-text={text}>{text}</h1>
</k.Container>
  );
};

export default GlitchText;