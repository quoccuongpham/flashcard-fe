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
    return errors;
};

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
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
                    Login
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
                    <Button
                        fullWidth={true}
                        variant="contained"
                        type="submit"
                        sx={{ marginTop: "20px" }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
