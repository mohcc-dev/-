document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let employeeId = document.getElementById('employeeId').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let department = document.getElementById('department').value;
    let birthDate = document.getElementById('birthDate').value;
    let dateOfJoining = document.getElementById('dateOfJoining').value;

    let message = document.getElementById('message');

    // تحقق من تعبئة جميع الحقول
    if (!name || !employeeId || !email || !phone || !department || !birthDate || !dateOfJoining) {
        message.textContent = "يرجى تعبئة جميع الحقول!";
    } else if (!/^\d+$/.test(employeeId)) {
        message.textContent = "يجب أن يحتوي رقم الموظف على أرقام فقط!";
    } else if (!/^\d{10}$/.test(phone)) {
        message.textContent = "يجب أن يكون رقم الهاتف مكونًا من 10 أرقام!";
    } else {
        message.style.color = "green";
        message.textContent = "تم التسجيل بنجاح!";
        this.reset(); // إعادة تعيين النموذج
    }
});
