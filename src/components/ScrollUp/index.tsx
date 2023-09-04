import { useEffect, useState } from 'react';
import * as k from './styles';
import { BsArrowUpCircle } from 'react-icons/bs';
import handleScrollListener from '../../helpers/ScrollListener';

export default function ScrollUp() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    handleScrollListener(setScrolled);
  }, []);

  return (
    <k.Container scrolled={scrolled} href="#">
      <BsArrowUpCircle />
    </k.Container>
  );
}
