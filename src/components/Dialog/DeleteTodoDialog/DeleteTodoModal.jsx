import { Dialog, DialogTitle } from "@mui/material";
import "./DeleteTodoModal.style.css";
import Button from "../../Button/MyButton";
import { useTasksStore } from "../../../stores/todos/todos.store";

const DeleteTodoModal = () => {
  const { dialog, setDialog, deleteTask } = useTasksStore();
  const { isOpen, task, type } = dialog;

  // Deleting tasks

  const handleDelete = () => {
    if (type === "delete" && task) {
      deleteTask(task.id);
      setDialog(false, null, null);
    }
  };

  const handleClose = () => {
    setDialog(false, null, null);
  };

  return (
    <>
      {type === "delete" ? (
        <Dialog
          open={isOpen}
          onClose={handleClose}
          sx={{
            "& .MuiDialog-paper": {
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              "@media (max-width: 600px)": {
                width: "70%",
              },
            },
          }}
        >
          <DialogTitle
            className={"DialogTitle"}
            sx={{
              padding: "0px 15px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "rgb(255, 228, 228)",
              "@media (max-width: 600px)": {
                fontSize: "12px",
              },
            }}
          >
            Delete task
            <span onClick={handleClose} className="closeIcon">
              +
            </span>
          </DialogTitle>
          <div className="dialogForm">
            <form className="form">
              <p>Are you sure you want to delete this task?</p>
              <div className="buttons">
                <Button buttonText="Cancel" handleToButton={handleClose} />
                <Button buttonText="Confirm" handleToButton={handleDelete} />
              </div>
            </form>
          </div>
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
};

export default DeleteTodoModal;
