import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Home from "./views/Home";
import VariantA from "./views/VariantA";
import VariantB from "./views/VariantB";
import { getTheme } from "./theme";

export default function App() {
    const [mode, setMode] = useState("light");

    const theme = getTheme(mode);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                <div style={{ position: "absolute", top: 10, right: 10 }}>
                    <IconButton onClick={toggleTheme}>
                        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a" element={<VariantA />} />
                    <Route path="/b" element={<VariantB />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}