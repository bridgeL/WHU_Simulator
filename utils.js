alertify.set("notifier", "position", "top-right");

const showToast = (message) => {
    alertify.notify(message, "success", 5);
};
