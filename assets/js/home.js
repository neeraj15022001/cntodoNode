function removeTasks() {
    const items = document.querySelectorAll(".task-checkbox");
    const checkedItems = []
    items.forEach(item => {
        if (item.checked) {
            checkedItems.push(item.id)
        }
    })
    fetch(`/delete?items=${JSON.stringify(checkedItems)}`).then(r => {
        console.log("Successfully deleted item : ", r);
        window.location.reload();
    })
        .catch(err => console.error("error in deleting item : ", err))
}