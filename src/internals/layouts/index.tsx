import { FunctionalComponent } from "npm:preact@10.17.1";
import PageProps from "../types/pagetypes.ts";
import NavBar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

const Index: FunctionalComponent<PageProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
