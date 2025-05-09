import { HeaderContainer } from "./styles";
import logoIgnite from "../../assests/logo-ignite.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="" />
            <nav>
               <NavLink to="/" title="timer">
                  <Timer size={24} />
               </NavLink>
               <NavLink to="/history" title="historico">
                <Scroll size={24} />
               </NavLink>
            </nav>
        </HeaderContainer>

    )
}