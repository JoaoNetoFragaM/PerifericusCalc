// Script para desmarcar checkboxes do tipo de reparo
document.querySelectorAll('input[name="custom-checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        document.querySelectorAll('input[name="custom-checkbox"]').forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});

// Script para desmarcar checkboxes da forma de pagamento
document.querySelectorAll('input[name="custom-checkbox2"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        document.querySelectorAll('input[name="custom-checkbox2"]').forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});
