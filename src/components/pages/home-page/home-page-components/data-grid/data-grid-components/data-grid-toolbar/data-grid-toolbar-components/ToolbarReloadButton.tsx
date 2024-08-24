import { useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import styles from "./ToolbarReloadButton.module.css";
import { useQueryClient } from "react-query";
import { Tooltip } from "@mui/material";

const ToolbarReloadButton = () => {
  const [isRotating, setIsRotating] = useState(false);
  const queryClient = useQueryClient();

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 750);
    queryClient.refetchQueries(["certificates"]);
  };

  return (
    <Tooltip title="רענון הטבלה">
      <CachedIcon
        className={isRotating ? styles.rotate : ""}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </Tooltip>
  );
};

export default ToolbarReloadButton;
