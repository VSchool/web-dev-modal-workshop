import ModalForm from "./ModalForm";

function Post(props) {

    const { title, description, handleEdit, id } = props

    return (
        <>
            <div className="post">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <button>Edit</button>
            </div>
            <ModalForm
                title={title}
                description={description}
                handleEdit={handleEdit}
                id={id}
            />
        </>
    );
}

export default Post;