import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import { deepPurple } from "@mui/material/colors";

import { Modal, Box, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState, useContext } from "react";
import { CollectionContext } from "../../../context/CollectionContext";
import { useFormik } from "formik";
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

export default function CollectionOption({ collection_id }) {
    const { deleteCollection, changeName } = useContext(CollectionContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openModalChangeName, setOpenModalChangeName] = useState(false);
    const [loading, setLoading] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenModalChangeName = () => {
        setOpenModalChangeName(true);
    };
    const handleCloseModalChangeName = () => {
        setOpenModalChangeName(false);
    };

    // formik
    const changeNameFormik = useFormik({
        initialValues: {
            collectionName: "",
            collectionDes: "",
        },
        onSubmit: (values) => {
            setLoading(true);
            changeName(
                collection_id,
                values.collectionName,
                values.collectionDes
            ).then(() => {
                handleCloseModalChangeName();
                handleClose();
                setLoading(false);
            });
        },
    });

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <FormatListBulletedRoundedIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem
                    onClick={() => {
                        deleteCollection(collection_id);
                        handleClose();
                    }}
                >
                    Xóa
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleOpenModalChangeName();
                    }}
                >
                    Đổi tên
                </MenuItem>
                <Modal
                    open={openModalChangeName}
                    onClose={handleCloseModalChangeName}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{ ...style }}
                        component="form"
                        onSubmit={changeNameFormik.handleSubmit}
                    >
                        <Typography
                            variant="p"
                            fontWeight={700}
                            marginBottom={2}
                        >
                            Đổi tên collection
                        </Typography>
                        <TextField
                            placeholder="Tên collection"
                            fullWidth={true}
                            sx={{ marginBottom: 1, marginTop: 2 }}
                            name="collectionName"
                            onChange={changeNameFormik.handleChange}
                            value={changeNameFormik.values.collectionName}
                            size="small"
                        ></TextField>
                        <TextField
                            placeholder="Mô tả"
                            fullWidth={true}
                            sx={{ marginBottom: 2 }}
                            name="collectionDes"
                            onChange={changeNameFormik.handleChange}
                            value={changeNameFormik.values.collectionDes}
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
                            Đổi tên
                        </LoadingButton>
                    </Box>
                </Modal>
            </Menu>
        </div>
    );
}
