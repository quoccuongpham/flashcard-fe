import { IconButton, Paper, Typography, Stack, Box } from "@mui/material";
import { grey, amber, orange } from "@mui/material/colors";
import ProgressBar from "@ramonak/react-progress-bar";

import CollectionOption from "./components/CollectionOption";
const Collection = ({ name }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                flexGrow: null,
                minWidth: 200,
                // width: 200,
                minHeight: 100,
                marginY: 1,
                backgroundColor: amber[100],
                borderRadius: 5,
                padding: 1,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="p">29/6/2023</Typography>
                <CollectionOption />
            </Stack>
            <Typography
                component="div"
                variant="p"
                fontWeight={700}
                color={grey[800]}
                textAlign="center"
                marginBottom={1}
            >
                {name}
            </Typography>
            <ProgressBar
                completed={50}
                height="5px"
                labelSize="15px"
                animateOnRender={true}
                labelAlignment="outside"
                labelColor="#333"
                bgColor="#ff942e"
            />
            <Stack marginTop={1} justifyContent="right" direction="row">
                <Box
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        paddingY: 0.5,
                        paddingX: 1,
                        borderRadius: 3,
                        color: "#ff942e",
                        fontWeight: 600,
                        fontSize: 14,
                    }}
                >
                    50 flashcards
                </Box>
            </Stack>
        </Paper>
    );
};

export default Collection;
