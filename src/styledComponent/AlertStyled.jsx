import { Alert, Snackbar, Slide } from "@mui/material";

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

//? props = {type, mess, isOpen, setOpen}
const AlertStyled = (props) => {
    return (
        <div>
            <Snackbar
                open={props.isOpen}
                autoHideDuration={3000}
                onClose={() => {
                    props.setAlert({
                        ...props,
                        isOpen: false,
                    });
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                TransitionComponent={TransitionLeft}
            >
                <Alert
                    severity={props.type}
                    sx={{ width: "100%" }}
                    onClose={() => {
                        props.setAlert({
                            ...props,
                            isOpen: false,
                        });
                    }}
                >
                    {props.mess}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AlertStyled;
