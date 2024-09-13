// MUI Import
import Button from "@mui/material/Button";

// ============ Start Action Button ============ 
// This button is a reusable component that receives two props
const ActionButton = ({ label, onClick }) => {
    return (
        <Button
            onClick={onClick}
            size="small"
            sx={{
                backgroundColor: "transparent",
                color: "inherit",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
                textTransform: "capitalize",
            }}
        >
            {label}
        </Button>
    );
};

export default ActionButton;
// ============ End Action Button ============ 

