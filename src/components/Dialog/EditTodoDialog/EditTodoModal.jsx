import { useEffect, useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import Button from "../../Button/MyButton";
import { useTasksStore } from "../../../stores/todos/todos.store";
import "./EditTodoModal.style.css";
import useNotificationStore from "../../../stores/notification/notification.store";

const EditTodoModal = () => {
  const { dialog, setDialog, renameTask } = useTasksStore();
  const { isOpen, task, type } = dialog;
  const [editedTitle, setEditedTitle] = useState(task ? task.title : "");
  const { setNotification } = useNotificationStore();

  useEffect(() => {
    if (task) {
      setEditedTitle(task.title);
    }
  }, [task]);

  // Renaming tasks

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedTitle !== "" && task && type === "edit") {
      renameTask(task.id, { title: editedTitle });
      setNotification(true, "Task changed successfully!", "info");
      setEditedTitle("");
      setDialog(false, null, null);
    } else {
      alert("The task must not be empty!");
    }
  };

  return (
    <>
      {type === "edit" ? (
        <Dialog
          open={isOpen}
          onClose={() => setDialog(false, null, null)}
          sx={{
            "& .MuiDialog-paper": {
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              position: "relative",
              background: "white",
              "@media (max-width: 600px)": {
                width: "60%",
              },
            },
          }}
        >
          <DialogTitle
            sx={{
              padding: "0px 15px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "rgb(222, 232, 252)",
              "@media (max-width: 600px)": {
                fontSize: "12px",
              },
            }}
          >
            Edit task
            <span
              onClick={() => setDialog(false, null, null)}
              className="closeIcon"
            >
              +
            </span>
          </DialogTitle>
          <div className="dialogForm">
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="todo">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </label>
              <Button buttonText="Save" />
            </form>
          </div>
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
};

export default EditTodoModal;
