document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.check-item input');
    const progressFill = document.getElementById('progress-fill');
    const percentText = document.getElementById('percent');

    function updateProgress() {
        const total = checkboxes.length;
        const checked = Array.from(checkboxes).filter(i => i.checked).length;
        const percentage = Math.round((checked / total) * 100);

        progressFill.style.width = percentage + '%';
        percentText.textContent = percentage + '%';

        // Ganti warna jika 100%
        if (percentage === 100) {
            progressFill.style.backgroundColor = '#10b981'; // Hijau
        } else {
            progressFill.style.backgroundColor = '#0284c7'; // Biru balik
        }
    }

    checkboxes.forEach(box => {
        box.addEventListener('change', updateProgress);
    });
});