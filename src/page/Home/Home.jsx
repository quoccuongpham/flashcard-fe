import { Container, Stack } from "@mui/material";
import { useEffect, useContext } from "react";
import Collection from "./Collection";
import HomeHeader from "./HomeHeader";
import { CollectionContext } from "../../context/CollectionContext";
const Home = () => {
    const { collectionState, loadCollection } = useContext(CollectionContext);
    useEffect(() => {
        loadCollection();
    }, []);

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
                justifyContent="left"
            >
                {collectionState.collections ? (
                    collectionState.collections.map((collection, index) => (
                        <Collection
                            name={collection.name}
                            key={index}
                        ></Collection>
                    ))
                ) : (
                    <>Loading</>
                )}
            </Stack>
        </Container>
    );
};

export default Home;
