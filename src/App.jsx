import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { customTheme} from "./themeConfig";

function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
