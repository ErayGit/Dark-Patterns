import { useNavigate } from "react-router-dom";
import {Box, Button} from "@mui/material";

export default function VariantB() {
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
        </Box>
    )
}