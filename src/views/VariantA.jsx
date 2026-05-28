import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function VariantA() {
    const navigate = useNavigate();
    return (
        <Box>
                <Button
                    variant="outlined"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/")}
                >
                    Zurück zur Startseite
                </Button>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4">Shop A</Typography>
                <Button variant="contained">Buy Item</Button>
            </Box>
        </Box>

    );
}