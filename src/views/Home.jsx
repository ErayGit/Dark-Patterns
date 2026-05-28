import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                pt: 10,
                bgcolor: "background.default",
            }}
        >
            <Box sx={{ p: 5, maxWidth: 650 }}>

                <Typography variant="h3" gutterBottom>
                    User Experience Study
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Einkaufssimulation
                </Typography>

                <Typography variant="h7" sx={{ mt: 3 }}>
                    In dieser Studie testest du eine einfache Online-Shopping-Oberfläche.
                    Deine Aufgabe ist es, ein Produkt auszuwählen und den Kaufprozess bis
                    zur Bestätigung durchzuführen.
                </Typography>

                <Typography variant="h7" sx={{ mt: 2 }}>
                    Bitte handle dabei so, wie du es auch bei einem echten Online-Shop tun würdest.
                    Es gibt keine richtigen oder falschen Entscheidungen – uns interessiert nur dein Verhalten.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2, fontWeight: 500 }}>
                    Wähle anschließend eine der beiden Versionen, um zu starten:
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mt: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => navigate("/a")}
                    >
                        Version A starten
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={() => navigate("/b")}
                    >
                        Version B starten
                    </Button>
                </Box>

            </Box>
        </Box>
    );
}