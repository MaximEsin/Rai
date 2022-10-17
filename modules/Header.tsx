import HLogo from "../components/header/Hlogo";
import HText from "../components/header/HText";
import Navbar from "../components/header/Navbar";
import Input from "../components/header/Input";
import Language from "../components/header/Language";

const Header = () => (
    <>
     <header>
       <HLogo/> 
       <HText/>
       <Navbar/>
       <Input/>
       <Language/>
     </header>
    </>
);

export default Header;