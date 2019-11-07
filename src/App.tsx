import React from "react";

import { ThemeProvider } from "./styled-components";
import theme from "./theme";
import Link from "./Link";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Link href="/">A link</Link>
  </ThemeProvider>
);

export default App;
