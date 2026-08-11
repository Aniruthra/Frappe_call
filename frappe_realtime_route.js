let dialog = new frappe.ui.Dialog({
    title: "Enter Contact Details",
    fields: [
        {
            fieldname: "first_name",
            label: "First Name",
            fieldtype: "Data",
            reqd: 1
        },
        {
            fieldname: "last_name",
            label: "Last Name",
            fieldtype: "Data"
        },
        {
            fieldname: "email_id",
            label: "Email ID",
            fieldtype: "Data"
        }
    ],
    primary_action_label: "Create Contact",
    primary_action(values) {
        dialog.hide();
        frappe.route_options = {
            first_name: values.first_name,
            last_name: values.last_name,
            email_id: values.email_id
        };
        frappe.new_doc("Contact");
    }
});
dialog.show();
