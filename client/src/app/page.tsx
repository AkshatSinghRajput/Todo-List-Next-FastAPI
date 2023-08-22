import NavbarComponent from "../Components/Navbar";
import { ThemeProvider } from "./theme-provider";
import TodoContainer from "@/Components/TodoContainer";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <NavbarComponent />
        <TodoContainer></TodoContainer>
      </ThemeProvider>
    </>
  );
}
