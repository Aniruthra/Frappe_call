import frappe

@frappe.whitelist()
def create_task(task_subject):
    """ Create a new task and set the subject and 
    saving it to database"""
    task=frappe.new_doc("Task")
    task.subject=task_subject
    task.save()
    return task.name
