import { Button, TextField, Container } from "@mui/material";
const Home = () => {
    return (
        <Container maxWidth={false} disableGutters={false}>
            <h1>Home Page</h1>
            <Button>Test button</Button>
            <TextField placeholder="test" />
        </Container>
    );
};

export default Home;
