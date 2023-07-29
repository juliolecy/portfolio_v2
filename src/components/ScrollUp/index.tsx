import { useEffect, useState } from 'react'
import * as k from './styles'
import { AiOutlineArrowUp } from 'react-icons/ai';
import handleScrollListener from '../../helpers/ScrollListener';

export default function ScrollUp(){
  
    const [scrolled, setScrolled] = useState<boolean>(false)
    useEffect(()=>{ handleScrollListener(420, setScrolled)},[]);

    return (
        <k.Container scrolled={scrolled} href='#'>
                <AiOutlineArrowUp/>
        </k.Container>
    )
}