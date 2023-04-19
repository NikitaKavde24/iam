import Modal from "../../Atoms/Modal/Modal";

export default function AddTaskForm({isShowForm}){
    return(
        <Modal isOpen={isShowForm} isHeader={true} headerText={"Adding Task"}></Modal>
    )
}