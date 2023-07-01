import { Button, TextField, Container, Stack } from "@mui/material";
import Collection from "./Collection";
import HomeHeader from "./HomeHeader";
const Home = () => {
    return (
        <Container maxWidth={false} disableGutters={false}>
            <Container
                sx={{
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
                <HomeHeader />
            </Container>
            <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent="space-around"
            >
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
                <Collection name="greeting" />
                <Collection name="needed" />
                <Collection name="stop" />
                <Collection name="waste" />
            </Stack>
        </Container>
    );
};

export default Home;
