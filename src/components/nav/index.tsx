import {
  Container,
  Nav,
  NavItem,
  NavItems,
  NavMain,
} from "./navbar.style";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import LOGO from "../../../logo.png";

const Navbar = () => {
  return (
    <Container>
      <img src={LOGO} />
      <NavMain>
        <Nav>
          <NavItems>
            <a href="/">
              <NavItem>Home</NavItem>
            </a>
          </NavItems>
          <NavItems>
            <a href="/">
              <NavItem>About</NavItem>
            </a>
          </NavItems>
          <NavItems>
            <a href="/">
              <NavItem>How it works</NavItem>
            </a>
          </NavItems>
          <NavItems>
            <a href="/Campaigns">
              <NavItem>Campaigns</NavItem>
            </a>
          </NavItems>
          <NavItems>
            <a href="/Campaigns/new">
              <NavItem>New Campaign</NavItem>
            </a>
          </NavItems>
          <NavItems>
            <a href="/">
              <NavItem>Contact Us</NavItem>
            </a>
          </NavItems>
          <NavItems>
            <NavItem>
              <div className="flex justify-center">
                <ConnectButton
                  showBalance={false}
                  accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "full",
                  }}
                />
              </div>
            </NavItem>
          </NavItems>
        </Nav>
      </NavMain>
    </Container>
  );
};

export default Navbar;
