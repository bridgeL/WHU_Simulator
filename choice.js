const askUserChoice = (title, labels) => {
    // Function to generate dropdown options
    const result = {
        value: null,
    };
    function generateDropdown() {
        const dropdown = document.createElement("div");
        dropdown.innerHTML = ""; // Clear existing options
        labels.forEach((option) => {
            const opt = document.createElement("button");
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
            opt.onclick = () => {
                result.value = option;
                Swal.close();
            };
            opt.style =
                "display: block; margin: 20px auto; padding: 10px 20px;";
        });
        return dropdown;
    }

    return Swal.fire({
        title: title,
        html: generateDropdown(),
        icon: "question",
        showConfirmButton: false,
    }).then(() => result.value);
};
