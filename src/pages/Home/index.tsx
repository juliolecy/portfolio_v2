import Hero from "../../components/Hero";
import MenuButton from "../../components/MenuButton";
import Header from "../../components/MenuButton";
import Sidebar from "../../components/Sidebar";
import * as k from './styles'

export default function Home(){
    return (
        <k.Layout>
        <Sidebar />
        <Hero/>
      </k.Layout>
    )
}