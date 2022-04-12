export const Style = {
    fontWeight: "bold",
    color: "green"
}

export const Alert = ({ type }) => {
    switch (type) {
        case "danger":
            return ("alert alert-danger")

        case "success":
            return ("alert alert-success")

        case "warning":
            return ("alert alert-warning")
    }
}

export const DAlert = "alert alert-danger"
export const SAlert = "alert alert-success"