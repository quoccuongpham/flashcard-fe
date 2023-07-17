import { Stack, Typography, Chip, Modal, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { deepPurple } from "@mui/material/colors";
import styled from "@emotion/styled";
import { useState, useContext } from "react";
import { useFormik } from "formik";

import { CollectionContext } from "../../context/CollectionContext";
const ChipStyled = styled(Chip)({
    backgroundColor: deepPurple[50],
    color: deepPurple[500],
    fontWeight: 700,
});
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
const HomeHeader = () => {
    // Modal
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const { newCollection } = useContext(CollectionContext);
    // form
    const createCollection = useFormik({
        initialValues: {
            collectionName: "",
            collectionDes: "",
        },
        onSubmit: (values) => {
            // const result = await axios.get(`${apiURLdev}/`);
            try {
                const formData = {
                    name: values.collectionName,
                    des: values.collectionDes,
                };
                setLoading(true);
                newCollection(formData).then((success) => {
                    if (success) {
                        setLoading(false);
                        handleCloseModal();
                    }
                });
            } catch (error) {
                console.log("error");
            }
        },
    });
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" fontSize={25} fontWeight={600}>
                Collection
            </Typography>
            <ChipStyled
                icon={<AddCircleRoundedIcon />}
                label="new"
                onClick={handleOpenModal}
                size="medium"
            />
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box
                    sx={{ ...style }}
                    component="form"
                    onSubmit={createCollection.handleSubmit}
                >
                    <Typography variant="p" fontWeight={700} marginBottom={2}>
                        Tạo collection
                    </Typography>
                    <TextField
                        placeholder="Tên collection"
                        fullWidth={true}
                        sx={{ marginBottom: 1, marginTop: 2 }}
                        name="collectionName"
                        onChange={createCollection.handleChange}
                        value={createCollection.values.collectionName}
                        size="small"
                    ></TextField>
                    <TextField
                        placeholder="Mô tả"
                        fullWidth={true}
                        sx={{ marginBottom: 2 }}
                        name="collectionDes"
                        onChange={createCollection.handleChange}
                        value={createCollection.values.collectionDes}
                        size="small"
                    ></TextField>
                    <LoadingButton
                        loading={loading}
                        variant="contained"
                        type="submit"
                        sx={{
                            backgroundColor: deepPurple[50],
                            boxShadow: "none",
                            color: deepPurple[500],
                            fontWeight: 600,
                            ":hover": {
                                backgroundColor: deepPurple[500],
                                color: deepPurple[50],
                            },
                        }}
                    >
                        Tạo
                    </LoadingButton>
                </Box>
            </Modal>
        </Stack>
    );
};

export default HomeHeader;
