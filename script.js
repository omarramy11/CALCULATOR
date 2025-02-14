// دالة لإضافة القيمة إلى شاشة العرض
function appendToDisplay(value) {
    document.getElementById('display').value += value; // هنا اضف القيمه عند الضغط
}

// دالة لمسح شاشة العرض
function clearDisplay() {
    document.getElementById('display').value = ''; // '' معناها عند الضغط تساوي مفيش قيمه
}

// دالة لحساب النتيجة
function calculateResult() {
    try {
        // eval : تستخدم لحساب القيم المدخله
        // حساب التعبير الموجود في شاشة العرض
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        // في حالة وجود خطأ، عرض "خطأ"
        document.getElementById('display').value = 'خطأ';
    }
}