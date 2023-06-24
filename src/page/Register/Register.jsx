import {
    Container,
    Box,
    Typography,
    Stack,
    TextField,
    Button,
} from "@mui/material";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Required";
    } else if (!/^[^\s\W]+$/.test(values.username)) {
        errors.username = "username khong hop le";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "Mat khau phai it nhat 8 ky tu";
    }

    if (!values.rePassword) {
        errors.rePassword = "Required";
    } else if (values.rePassword !== values.password) {
        errors.rePassword = "Mat khau khong giong nhau";
    }
    return errors;
};

const Register = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            rePassword: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h3" marginBottom={4}>
                    Register
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth={true}
                        name="username"
                        label="Username"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        margin="normal"
                        error={formik.errors.username}
                        helperText={
                            formik.errors.username
                                ? formik.errors.username
                                : null
                        }
                    ></TextField>
                    <TextField
                        fullWidth={true}
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        margin="normal"
                        error={formik.errors.password}
                        helperText={
                            formik.errors.password
                                ? formik.errors.password
                                : null
                        }
                    ></TextField>
                    <TextField
                        fullWidth={true}
                        name="rePassword"
                        label="Re-Password"
                        variant="outlined"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.rePassword}
                        margin="normal"
                        error={formik.errors.rePassword}
                        helperText={
                            formik.errors.rePassword
                                ? formik.errors.rePassword
                                : null
                        }
                    ></TextField>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        type="submit"
                        sx={{ marginTop: "20px" }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
