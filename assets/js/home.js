// function to remove items
function removeTasks() {
    const items = document.querySelectorAll(".task-checkbox");
    const checkedItems = []
    // filling id;s in checked items array
    items.forEach(item => {
        if (item.checked) {
            checkedItems.push(item.id)
        }
    })
    // Hitting out /delete endpoint in order to delete checked items
    fetch(`/delete?items=${JSON.stringify(checkedItems)}`).then(r => {
        console.log("Successfully deleted item : ", r);
        window.location.reload();
    })
        .catch(err => console.error("error in deleting item : ", err))
}