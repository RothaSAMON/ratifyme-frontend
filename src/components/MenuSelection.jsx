import * as React from "react";
import { Menu, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReusableButton from "./DataTableButton";

export default function MenuSelection({ onView, onDelete }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon fontSize="small" />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    "aria-labelledby": "long-button",
                    sx: { padding: 0 }, // Remove padding from the MenuList
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            width: "16ch",
                        },
                    },
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    sx={{ padding: 0 }} // Remove padding from the Box
                >
                    <ReusableButton label="View" onClick={onView} fullWidth />
                    <ReusableButton label="Delete" onClick={onDelete} fullWidth />
                </Box>
            </Menu>
        </div>
    );
}