import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";
import AppRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
