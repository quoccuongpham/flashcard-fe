import { useLocation } from "react-router-dom";
import { useContext } from "react";
import {
    Container,
    Stack,
    TextField,
    Button,
    Box,
    Chip,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { FlashcardContext } from "../../context/FlashcardContext";
import { orange } from "@mui/material/colors";

const AddFlashCard = () => {
    const { flashcardState, newFlashcard } = useContext(FlashcardContext);
    const { state } = useLocation();
    const newFlashcardFormik = useFormik({
        initialValues: {
            fc_name: "",
            fc_wordtype: "",
            fc_pronunciation: "",
            fc_mean: "",
            fc_example: "",
        },
        onSubmit: (values) => {
            const formData = {
                ...values,
                collection_id: state.collection_id,
            };
            newFlashcard(formData);
            newFlashcardFormik.resetForm();
        },
    });
    return (
        <Container
            sx={{
                padding: 2,
            }}
        >
            <Typography
                variant="h6"
                fontWeight={700}
                marginBottom={2}
                textAlign="center"
            >
                Thêm{" "}
                <Typography variant="span" color={orange[500]}>
                    Flashcard
                </Typography>
            </Typography>
            <Stack
                component="form"
                gap={1}
                onSubmit={newFlashcardFormik.handleSubmit}
            >
                <TextField
                    onChange={newFlashcardFormik.handleChange}
                    value={newFlashcardFormik.values.fc_name}
                    fullWidth
                    placeholder="Từ vựng"
                    name="fc_name"
                ></TextField>
                <TextField
                    onChange={newFlashcardFormik.handleChange}
                    value={newFlashcardFormik.values.fc_pronunciation}
                    fullWidth
                    placeholder="Phát âm"
                    name="fc_pronunciation"
                ></TextField>
                <TextField
                    onChange={newFlashcardFormik.handleChange}
                    value={newFlashcardFormik.values.fc_wordtype}
                    fullWidth
                    placeholder="Từ loại"
                    name="fc_wordtype"
                ></TextField>
                <TextField
                    onChange={newFlashcardFormik.handleChange}
                    value={newFlashcardFormik.values.fc_mean}
                    fullWidth
                    placeholder="Ý nghĩa"
                    name="fc_mean"
                ></TextField>
                <TextField
                    onChange={newFlashcardFormik.handleChange}
                    value={newFlashcardFormik.values.fc_example}
                    fullWidth
                    placeholder="Ví dụ"
                    name="fc_example"
                ></TextField>
                <Button type="submit" variant="contained">
                    Thêm
                </Button>
            </Stack>
            <Box sx={{ marginTop: "20px" }}>
                {flashcardState.flashcards.map((value) => {
                    return <Chip label={value.word}></Chip>;
                })}
            </Box>
        </Container>
    );
};

export default AddFlashCard;
