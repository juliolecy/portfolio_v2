
export default function handleScrollListener (setSome:React.Dispatch<React.SetStateAction<boolean>>){

    const scrollListener=()=>{
      if(window.scrollY > 420){
        setSome(true)
      } else {
        setSome(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return()=>{
      window.removeEventListener('scroll', scrollListener);
    }
}
